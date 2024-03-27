import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './index.css'

let estilo = ''
export const Navbar = ({ openModal, setOpenModal, setRenderDetails }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (isMenuOpen) {
      estilo = 'flex flex-col gap-2 items-center w-full '
      console.log('open ' + isMenuOpen)
    } else {
      estilo = 'hidden'
      console.log('open ' + isMenuOpen)
    }
    setIsMenuOpen(!isMenuOpen)
    console.log(estilo)
  }
  /* useEffect(() => {

  }, isMenuOpen) */
  // from-emerald-400 to-cyan-400
  return (
    <nav className=' justify-between items-center p-2 lg:p-4 w-[calc(100vw_-_60px)]  fixed  z-10 top-0  bg-slate-500 rounded-xl mt-2  lg:flex'>
      <div className='flex justify-between'>
        <ul>
          <Link to='about' spy smooth={50} offset={-200} duration={500}>
            <figure className='h-12 w-32 lg:h-10 lg:w-64 lg:pl-8 cursor-pointer'>
              <img className='h-full w-full object-contain' src='assets/name/iconNombre2.png' alt='icon david' />
            </figure>
          </Link>
        </ul>
        <figure className='h-10 w-10 cursor-pointer lg:hidden' onClick={toggleMenu}>
          <img src='assets/name/menu2.svg' alt='' />
        </figure>
      </div>

      <ul className={`lg:flex lg:flex-row  lg:gap-8 mr-20  text-white cursor-pointer ${estilo}`}>
        <li className='pt-2 text-lg nav-item'><Link to='about' spy smooth={50} offset={-100} duration={500}>Sobre mi</Link> </li>
        <li className='pt-2 text-lg nav-item'><Link to='projects' spy smooth={50} offset={-100} duration={500}>Proyectos</Link> </li>
        <li className='pt-2 text-lg nav-item'> <Link to='skills' spy smooth={50} offset={10} duration={500}>Habilidades</Link></li>
        <li className=' hidden lg:flex text-lg bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   p-2 rounded-xl shadow-lg hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:scale-105 duration-200' onClick={() => (setOpenModal(!openModal), setRenderDetails(false))}>Contacto</li>
      </ul>

    </nav>

  )
}
