"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function LoginPage() {
      const router = useRouter();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
  const onLogin = async ()=>{
try {
  setLoading(true);
  const response = await axios.post("/api/users/login", user);
  console.log("Login suceess", response.data);
  router.push('/profile')
} catch (error:any) {
  console.log("Login Failed", error.message)
}finally{
  setLoading(false)
}
  }
    useEffect(()=>{
      if(user.email.length > 0 && user.password.length > 0) {
          setButtonDisabled(false)
      }else{
          setButtonDisabled(true)
      }
    },[user])
  return (
    <div className='bg-[#1F1F1F] h-screen flex flex-col  relative'>
      {/* left */}
      <div className='bg-[#1F1F1F] text-white p-4 w-full h-full md:w-[50%] md:h-[90%] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center'>
          Welcome Back! <br />
        We Missed You.
        </h1>
        <p className='text-lg my-4'>Log in to continue where you left off.</p>
        <Image src='/logo.png' height={300} width={300} alt='Logo' />
      </div>
      {/* Right */}
      <div className='bg-white text-gray-600  h-full md:absolute md:left-[48%] md:top-[5%] md:w-[50%] md:h-[90%] md:rounded-lg p-4'>
        <h2 className='text-2xl font-bold text-black'>Login now</h2>

        <div className='my-2'>
          <label htmlFor='email'>Email</label> <br />
          <input
            id='email'
            className='border border-gray-400 rounded-lg w-9/10 p-1 mt-1'
            type='text'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='Email'
          />
        </div>
        <div className='my-2'>
          <label htmlFor='password'>Password</label> <br />
          <input
            id='password'
            type='password'
            className='border border-gray-400 rounded-lg w-9/10 p-1  mt-1'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='password'
          />
        </div>
        <div className="w-7/10">
          <input type='checkbox' id="check1" className="my-4" />
          <label htmlFor='check1'>
            By creating an account, I agree to our Terms of use and Privacy
            Policy
          </label>
        </div>
        <button
        onClick={onLogin}
         className='bg-[#1F1F1F] text-white my-4 px-3 py-1 rounded-lg'>
          Login
        </button>
        <p>Don't have an account yet? <Link href='/signup' className="text-green-600">Signup here</Link> </p>
      </div>
    </div>
  );
}
