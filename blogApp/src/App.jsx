import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        } else {
          dispatch(logout)
        }
      })
      .catch(err => console.error(err))
      .finally(()=>{
        setLoading(false)
      })
    // finally se code run hota hi hai chahe vo error hi return kare
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
      <div className='w-full block'>
        <Header />
          <main>
            This is main Body
            {/* <outlet /> */}
          </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
