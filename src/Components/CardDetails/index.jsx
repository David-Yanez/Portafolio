import React from 'react'
import { projects } from '../../Utils/projects'

export const CardDetails = ({ indexProjects }) => {
  const projec = projects[indexProjects]
  return (
    <div className='bg-slate-400 w-1/4 hover:shadow-[0_0_50px_1px_rgba(0,98,224,0.60)]'>

      <h3>{projec.name}</h3>
      <figure>
        <img src={`assets/portadas/${projec.fig}`} alt={`Portada de ${projec.name}`} />
      </figure>
      <p>{projec.description}</p>
      <p>Tecnologís usadas</p>
      <span className='flex gap-2 text-white mt-2 p-2 w-full flex-wrap justify-center'>{

          projec.tech.map((skill) => (
            <p className='border border-white p-1 rounded-lg bg-slate-600' key={skill}>{skill}</p>
          ))

        }
      </span>
      <span className='flex justify-evenly mt-2 mb-2'>
        <button className='border border-white p-1 rounded-lg '><a href={projec.link} target='_blank' rel='noreferrer'>Ir al sitio</a></button>
        <button className='border border-white p-1 rounded-lg'>Git hub</button>

      </span>

    </div>
  )
}
