import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import './border.css'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="text-black flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-white bg-opacity-80 backdrop-blur-lg rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-black text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form className='mt-2' onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label=""
                            placeholder="Enter your full name"
                            className="w-full border border-gray-400 shadow-md"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label=""
                            placeholder="Enter your email"
                            type="email"
                            className="w-full border border-gray-400 shadow-md"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label=""
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-400 shadow-md"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            bgColor='bg-orange-500'
                            type="submit"
                            className="w-full hover:bg-orange-600 active:scale-95">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup