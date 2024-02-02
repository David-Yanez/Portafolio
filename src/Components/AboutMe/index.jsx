import React from 'react'
import Meee from '../../assets/me.jpg'
export const AboutMe = () => {
  return (
    <div className='flex gap-40 mt-20 '>
      <figure className='w-80 h-80 '>
        <img className='h-full w-full cover rounded-lg' src={Meee} alt='Foto David' />
      </figure>
      <span className='w-96'>
        <h1 className=' text-4xl text-center text-white'>David Yánez</h1>
        <h2 className='text-xl text-center text-white'>Desarrolador Web</h2>
        <p className='mt-8 text-white'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
        <button className='mt-8 ml-40 border border-black rounded-md w-24'>Contacto</button>
      </span>

    </div>
  )
}
