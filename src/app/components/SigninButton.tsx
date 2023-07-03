"use client"
import React from 'react';
import {useSession, signOut, signIn} from "next-auth/react"

const SigninButton = () => {
    const {data:session} = useSession();
    if(session && session.user){
        return(
            <div className='flex gap-3 ml-auto grid grid-flow-rows grid-cols-3'>
                <p className='text-sky-800'>{session.user.name}</p>
                <span className='w-4 h-4 rounded-full mr-36 '> {session.user.email} </span>
                <button onClick={() => signOut()} className='text-red-700'>Sign out</button>
            </div>
        )
    }
  return (
    <div  className='flex gap-4 ml-auto'>
      <button onClick={() =>  signIn()} className='text-green-800'>Sign in</button>
    </div>
  )
}


export default SigninButton;
