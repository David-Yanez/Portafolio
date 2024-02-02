import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center m-4 bg-slate-400'>
      <ul>
        <li>David Yánez</li>
      </ul>

      <ul className='flex gap-8 mr-20 '>
        <li>Sobre mi</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}
