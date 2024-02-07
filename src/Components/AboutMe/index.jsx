import React from 'react'
import Meee from '../../assets/me.jpg'
export const AboutMe = () => {
  //  <button className='mt-8 ml-40 border border-black rounded-md w-24'>Contacto</button>
// bg-gradient-to-r from-emerald-500 to-emerald-900
// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    <div className='flex gap-40 mt-20 '>
      <figure className='  w-80 h-80 '>
        <img className='w-full h-full  object-contain rounded-lg' src={Meee} alt='Foto David' />
      </figure>
      <span className='w-96'>
        <h1 className=' text-4xl text-center text-white'>David Yánez</h1>
        <h2 className='text-xl text-center text-white'>Desarrolador Web</h2>
        <p className='mt-8 text-white'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
        <button
          class=' mt-8 ml-40 w-28 h-12 text-white font-semibold      bg-gradient-to-r from-emerald-400 to-cyan-400    rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer'
        >
          Contacto
        </button>

      </span>

    </div>
  )
}
