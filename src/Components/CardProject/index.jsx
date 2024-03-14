import React from 'react'
import './index.css'

export const CardProject = (data) => {
  const modalDetails = () => {
    data.setOpenModal(true)
    data.setRenderDetails(true)
    data.setIndexProjects(data.indice)
  }
  return (

    <div className='border rounded-lg border-white h-auto w-80  hover:scale-105 '>
      <figure className='w-80 h-52 p-2'>
        <img className='w-full h-full object-full rounded-lg' src={`assets/portadas/${data.fig}`} alt={`Portada del proyecto ${data.name}`} />
      </figure>
      <p className='text-white text-lg text-center mt-2'>{data.name}</p>
      {/* <p className='mt-4 text-white p-2'>{data.description}</p> */}
      <div className='flex gap-2 text-white mt-2 p-2 w-full flex-wrap justify-center'>
        {
          data.tech.slice(0, 3).map((skill) => (
            <p className='border border-white p-1 rounded-lg bg-slate-600' key={skill}>{skill}</p>
          ))
        }
      </div>
      <div className='flex justify-evenly mt-2 mb-2'>
        <button className='border border-white p-1 rounded-lg '><a href={data.link} target='_blank' rel='noreferrer'>Ir al sitio</a></button>
        <button className='border border-white p-1 rounded-lg' onClick={() => modalDetails()}>Mas detalles</button>
      </div>
    </div>
  )
}
