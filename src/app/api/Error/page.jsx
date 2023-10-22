import React from 'react'
import { signIn } from 'next-auth/react'

const Error = () => {
  return (
    <div className='flex flex-col h-screen w-full text-white text-2xl justify-center items-center'>
      <div className='flex justify-center items-center'>
      <p>Oops! Seems you have not logged in</p>
      </div>
      </div>
    
  )
}

export default Error