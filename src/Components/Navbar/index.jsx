import React from 'react'
import { Link } from 'react-scroll'
import './index.css'

export const Navbar = () => {
  // from-emerald-400 to-cyan-400
  return (
    <nav className='flex justify-between items-center p-4 w-full  fixed  z-10   bg-slate-500'>
      <ul>
        <Link to='about' spy smooth={50} offset={-200} duration={500}>
          <figure className='h-10 w-64 pl-8 cursor-pointer'>
            <img className='h-full w-full object-contain' src='assets/name/iconNombre2.png' alt='icon david' />
          </figure>
        </Link>

      </ul>

      <ul className='flex gap-8 mr-20  text-white cursor-pointer '>
        <li className='pt-2 text-lg nav-item'><Link to='about' spy smooth={50} offset={-100} duration={500}>Sobre mi</Link> </li>
        <li className='pt-2 text-lg nav-item'><Link to='projects' spy smooth={50} offset={-100} duration={500}>Proyectos</Link> </li>
        <li className='pt-2 text-lg nav-item'> <Link to='skills' spy smooth={50} offset={10} duration={500}>Habilidades</Link></li>
        <li className='text-lg bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   p-2 rounded-xl hover:drop-shadow-2xl hover:shadow-[#7dd3fc]'>Contacto</li>
      </ul>
    </nav>
  )
}
