import React from 'react'
import david from '../../assets/Captura de pantalla 2024-02-07 014857.png'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 w-full  fixed  z-10      bg-slate-400'>
      <ul>
        <figure className='h-10 pl-8'>
          <img className='h-full' src={david} alt='icon david' />
        </figure>
      </ul>

      <ul className='flex gap-8 mr-20 '>
        <li className='pt-2'>Sobre mi</li>
        <li className='pt-2'>Proyectos</li>
        <li className='pt-2'>Habilidades</li>
        <li className='bg-gradient-to-r from-emerald-400 to-cyan-400 p-2 rounded-xl hover:drop-shadow-2xl hover:shadow-[#7dd3fc]'>Contacto</li>
      </ul>
    </nav>
  )
}
