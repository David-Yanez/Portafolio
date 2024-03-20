import React from 'react'
import { projects } from '../../Utils/projects'

export const CardDetails = ({ indexProjects }) => {
  const projec = projects[indexProjects]
  return (
    <div className='bg-slate-400 w-2/5 h-4/5 mt-16 hover:shadow-[0_0_50px_1px_rgba(0,98,224,0.60)] flex flex-col rounded-xl overflow-y-auto  '>
      <span className='flex justify-center pt-6'>
        <h3>{projec.name}</h3>
      </span>

      <figure className='pt-8 p-2 '>
        <img className='   object-full rounded-lg' src={`assets/portadas/${projec.fig}`} alt={`Portada de ${projec.name}`} />
      </figure>
      <p className='p-2'>{projec.description}</p>
      <p className='p-2'>Tecnologís usadas</p>
      <span className='flex gap-2 text-white mt-2 p-2 w-full flex-wrap justify-center'>{

          projec.tech.map((skill) => (
            <p className='border border-white p-1 rounded-lg bg-slate-600' key={skill}>{skill}</p>
          ))

        }
      </span>
      <span className='flex justify-evenly mt-6 mb-2'>
        <button className='border border-white p-1 rounded-lg '><a href={projec.link} target='_blank' rel='noreferrer'>Ir al sitio</a></button>
        <button className='border border-white p-1 rounded-lg'>Git hub</button>

      </span>

    </div>
  )
}
