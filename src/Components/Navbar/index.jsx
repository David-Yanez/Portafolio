import React from 'react'
import david from '../../assets/Captura de pantalla 2024-02-07 014857.png'

export const Navbar = () => {
  //from-emerald-400 to-cyan-400
  return (
    <nav className='flex justify-between items-center p-4 w-full  fixed  z-10   bg-slate-500'>
      <ul>
        <figure className='h-10 w-64 pl-8 cursor-pointer'>
          <img className='h-full w-full object-contain' src='assets/name/iconNombre2.png' alt='icon david' />
        </figure>
      </ul>

      <ul className='flex gap-8 mr-20  text-white cursor-pointer '>
        <li className='pt-2 text-lg'>Sobre mi</li>
        <li className='pt-2 text-lg'>Proyectos</li>
        <li className='pt-2 text-lg'>Habilidades</li>
        <li className='text-lg bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   p-2 rounded-xl hover:drop-shadow-2xl hover:shadow-[#7dd3fc]'>Contacto</li>
      </ul>
    </nav>
  )
}
