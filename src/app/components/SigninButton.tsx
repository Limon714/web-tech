"use client"
import React from 'react';
import {useSession, signOut, signIn} from "next-auth/react"

const SigninButton = () => {
    const {data:session} = useSession();
    if(session && session.user){
        return(
            <div className='flex gap-4 ml-auto'>
                <p className='text-sky-800'>{session.user.name}</p>
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
