import React from "react";
import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { resister, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const data = await authService.getCurrentUser();
        if (data) dispatch(login(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl  p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60' >
          Already Have an account?
          <Link
            to='/signup'
            className='font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-700'
          >
            sign In
          </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'
        >{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'as>
            <Input 
              label="Full Name"
              placeholder="Enter Your full Name"
              {...resister("name", {
                required: true,
              })}
            />
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
              {...resister("password",{required: true})}
            />
            <Button type="submit" className="w-full" >Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
