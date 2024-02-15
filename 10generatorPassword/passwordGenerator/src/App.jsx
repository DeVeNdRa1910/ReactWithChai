import { useState, useCallback, useEffect, useRef } from 'react'

// when you want to take referance of any element in that case we are using useRef hook
function App() {
  const [length, setLength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState()

  //useRef hook
  const passwordRef = useRef()
  // we can take referance by passing ref={} in props of that element

  // useCallback( function , dependancies)
  const passwordGenerator = useCallback(()=>{
    let pass =""
    //String id data for making password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str +=  "1234567890";
    if(charAllowed) str += "!@#$%^&*()_+=[]{]~";

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  } , [length , numAllowed , charAllowed])

  //when dependencies change then useCallback run there arrow function but this array is use to optimization. 
  // useCallback is use for memoization(optimization). We can creat this project without useCallback but that method is not optimized
  // similarly when dependencies change then useCallback run there passwordGenerator function.


  // let optimize copyPassword by useCallback
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    // we want to copy on clipboard that mean we want to write passwored on clipboard
  } , [password])
  // In simple language jab function run hoga tab vo function kis kis entity se deal karega or we can say change karega vo sari entity dependencies hoti hai useCallback ke liye

  useEffect(()=>{
    passwordGenerator()
  } , [length , numAllowed , charAllowed , passwordGenerator])
  // jab jab length , numAllowed , charAllowed or passwordGenerator me koi change hoga tab tab useEffect ka function run hoga

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            onClick={copyPasswordToClipboard}
          />
          {/* // now we have referance of input in passwordRef */}
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" 
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange = {(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="length"  >length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numAllowed}
              onChange={()=>{
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Numbers</label>
            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
