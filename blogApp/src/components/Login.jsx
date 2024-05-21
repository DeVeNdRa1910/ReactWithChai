import React, {useState} from 'react'
import { useNavigate, Link, matchPath } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Input from './Input'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {resister, handlerSubmit} = useForm()
  const [error, setError] = useState('')

  const login  = async (data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if(session){
        const userData = await authService.getCurrentUser()
        if(userData) dispatch(authLogin(userData))
        navigate('/')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bgb-gray-100 rounded-xl p-10 border border-back/10`}>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60' >
          Don&apos;t have any account?&nbsp;
          <Link
            to='/signup'
            className='font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-700'
          >
            sign Up
          </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'
        >{error}</p>}
        <form onSubmit={handlerSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input  
              label="Email"
              placeholder='Enter Your Email'
              type='Email'
              {...resister("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(v) || 
                  "Email address must be a valid address",
                }
              })}
            />
            <Input 
              label="Password"
              placeholder="Enter Your Password"
              type="Password"
              {...resister("password", {
                required: true,
                // validate is optional
                }
              )}
            />
            <Button
              type="submit"
              className='w-full'
            >Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
