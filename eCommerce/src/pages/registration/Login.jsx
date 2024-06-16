import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-gray-50 px-1 lg:px-8 py-6 border border-gray-100 rounded-xl shadow-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-gray-500 '>
                    </h2>
                </div>
                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
                    />
                </div>
                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
                    />
                </div>
                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-gray-500 hover:bg-gray-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-gray-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
  )
}

export default Login
