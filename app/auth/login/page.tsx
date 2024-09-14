import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'
import React from 'react'


const Login = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-secondary'>
       <Image
          src={
            "https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={400}
          height={400}
          className="w-full h-full object-cover absolute opacity-20"
          alt="Music Consert"
        />
      <LoginForm/>
    </div>
  )
}

export default Login