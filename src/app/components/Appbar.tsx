import React from 'react'
import SigninButton from './SigninButton'
const Appbar = () => {
  return (
    <header className='flex p-4 gap-4 bg-gradient-to-b from-white to-gray-200 shadow'>
    <SigninButton />
    </header>
  )
}

export default Appbar
