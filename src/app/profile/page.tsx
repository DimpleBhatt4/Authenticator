"use client"
import React,  {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

const ProfilePage = () => {
  const [data, setData] = useState("nothing")
  const getUserDetails =  async () =>{
    const response = await axios.get('/api/users/me')
    console.log(response.data);
    setData(response.data.data._id)
  }
  return (
    <div>
      <h2 className='text-white'>{data=='nothing' ? "Nothing to Display" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button className='text-white' onClick={getUserDetails}>Get user details</button>
    </div>
  )
}

export default ProfilePage