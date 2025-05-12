"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import backgroundImage from "../../../public/bg-img.png";
import Image from "next/image";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async ()=>{

  }
  return (
    <div className='bg-[#1F1F1F] h-screen flex flex-col  relative'>
      {/* left */}
      <div className='bg-[#1F1F1F] text-white p-4 w-full h-full md:w-[50%] md:h-[90%] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center'>
          Join the Community. <br />
          Unlock Exclusive Benefits.
        </h1>
        <p className='text-lg my-4'>Sign up today and never miss an update.</p>
        <Image src='/logo.png' height={300} width={300} alt='Logo' />
      </div>
      {/* Right */}
      <div className='bg-white text-gray-600 h-full md:absolute md:left-[48%] md:top-[5%] md:w-[50%] md:h-[90%] md:rounded-lg p-4'>
        <h2 className='text-2xl font-bold text-black'>Sign up now</h2>
        <div className='my-2'>
          <label htmlFor='username'>User name : </label> <br />
          <input
            id='username'
            className='border border-gray-400 rounded-lg w-9/10 p-1  mt-1'
            type='text'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder='Username'
          />
        </div>

        <div className='my-2'>
          <label htmlFor='email'>Email :</label> <br />
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
          <label htmlFor='password'>Password :</label> <br />
          <input
            id='password'
            type='password'
            className='border border-gray-400 rounded-lg w-9/10 p-1  mt-1'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='password'
          />
        </div>
        <div className="">
          <input type='checkbox' id="check1" className="my-4" />
          <label htmlFor='check1'>
            By creating an account, I agree to our Terms of use and Privacy Policy
          </label>{" "}
          <br />
          <input type='checkbox' id="check2" className="my-4" />
          <label htmlFor='check2'>
           By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
          </label>
          <br />
        </div>
        <button
        onClick={onSignup}
         className='bg-[#1F1F1F] text-white my-4 px-3 py-1 rounded-lg'>
          Signup
        </button>
        <p>Already have an account? <Link href='/login' className="text-green-600">Login here</Link> </p>
      </div>
    </div>
  );
}
