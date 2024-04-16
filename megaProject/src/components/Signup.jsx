import { useState } from "react"
import React from 'react'
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Signup() {

    const navigate = useNavigate()
    const [error , setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate('/')
            }
        } catch (error) {
            
        }
    }

  return (
    <div className="flex items-center justify-center ">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%' />
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2> 
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have any account?&nbsp;
            <Link
                to='/signup'
                className='font-medium text-primary transition-all duration-200 hover:underline'
            >
                Sign Up
            </Link>
        </p>
        {error && <p className='text-red-800 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
                <Input 
                    label='Full Name'
                    placeholder='Enter your name'
                    {...register("name" , {
                        required: true
                    } )}
                />
                <Input 
                    label="Email: "
                    placeholder="Enter your Email"
                    type="email"
                    {...resister("email"), {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 
                            "Email address must be a valid address"
                        }
                    }}
                />
                <Input 
                    label="password: "
                    type="password"
                    placeholder="Enter Your password"
                    {...register("password"), {
                        required: true
                    }}
                />
                <Button
                    type='submit'
                    className='w-full'
                >Create Account</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
