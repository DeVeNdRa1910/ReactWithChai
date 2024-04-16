import React , {useId} from 'react'

function Select({options, label, className="", ...props}, ref) {
    const id = useId()
  return (
    <div>
      {label && <label htmlFor={id} className=''>  </label >}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {
            //  -> ka matlab yadi options ke ander value hai then only map will run o/w it will not work , here we can use option as key bca every option is unique.
            options?.map((option)=>(
                <option key={option} value={option}>{option}</ option>
            ))
        }
      </select>
    </div>
  )
}
// this also a option(suntax) to use forwordRefa        
export default React.forwardRef(Select)
