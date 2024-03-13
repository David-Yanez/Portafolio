import React from 'react'
import Meee from '../../assets/me.jpg'
import './index.css'
export const AboutMe = ({ openModal, setOpenModal, setRenderDetails }) => {
  //  <button className='mt-8 ml-40 border border-black rounded-md w-24'>Contacto</button>
// bg-gradient-to-r from-emerald-500 to-emerald-900
// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    // <figure className='  w-80 h-80 '>
    <div className='flex gap-40 mt-40  justify-center' id='about'>

      <figure className=' w-60 h-80 group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800 p-2 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] backdrop-filter backdrop-blur-md border border-neutral-600 '>
        <img className=' w-full h-full  object-contain rounded-lg' src={Meee} alt='Foto David' />
      </figure>
      <span className='w-2/5'>
        <h1 className=' text-6xl text-center text-white titulo'>David Yánez</h1>
        <h2 className='text-xl mt-4 text-center text-white'>Desarrolador Web</h2>
        <p className='mt-8 text-white text-lg'>
          Soy un ingeniero en sistemas informáticos y de computación apasionado por la creación de experiencias digitales excepcionales. Mi enfoque se centra en el desarrollo web, donde combino mi sólida formación técnica con la creatividad para construir productos de calidad, manejondo con destreza las tecnologías más populares, como HTML, CSS, JavaScript y otros frameworks líderes.
        </p>
        <button
          class='text-lg mt-20 ml-40 w-28 h-12 text-white font-semibold   bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer'
          onClick={() => (setOpenModal(!openModal), setRenderDetails(false))}
        >
          Contacto
        </button>

      </span>

    </div>
  )
}
