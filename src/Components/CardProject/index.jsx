import React from 'react'
import './index.css'

export const CardProject = (data) => {
  const modalDetails = () => {
    data.setOpenModal(true)
    data.setRenderDetails(true)
    data.setIndexProjects(data.indice)
  }
  return (

    <div className=' rounded-2xl  h-auto w-80  hover:scale-105  bg-[#48668f] [box-shadow:-34px_-34px_68px_#3a5172,_34px_34px_68px_#6691cc]'>
      <figure className='w-80 h-52 p-2'>
        <img className='w-full h-full object-full rounded-lg' src={`assets/portadas/${data.fig}`} alt={`Portada del proyecto ${data.name}`} />
      </figure>
      <p className='text-white text-lg text-center mt-2'>{data.name}</p>
      {/* <p className='mt-4 text-white p-2'>{data.description}</p> */}
      <div className='flex gap-2 text-white mt-2 p-2 w-full flex-wrap justify-center'>
        {
          data.tech.slice(0, 3).map((skill) => (
            <p className=' p-1 rounded-lg bg-slate-500' key={skill}>{skill}</p>
          ))
        }
      </div>
      <div className='flex justify-evenly mt-2 mb-2'>
        <button className='border text-white border-white p-1 rounded-lg bg-sky-800 '><a href={data.link} target='_blank' rel='noreferrer'>Ir al sitio</a></button>
        <button className='border text-white border-white p-1 rounded-lg bg-blue-900' onClick={() => modalDetails()}>Mas detalles</button>
      </div>
    </div>
  )
}
