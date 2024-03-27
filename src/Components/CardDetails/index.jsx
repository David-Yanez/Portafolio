import React from 'react'
import { projects } from '../../Utils/projects'

export const CardDetails = ({ indexProjects }) => {
  const projec = projects[indexProjects]
  return (
    <div className='bg-slate-500  w-4/5 lg:w-2/5 h-4/5 mt-16 hover:shadow-[0_0_50px_1px_rgba(0,98,224,0.60)] flex flex-col rounded-xl overflow-y-auto  '>
      <span className='flex justify-center pt-6'>
        <h3 className=' text-white text-3xl [text-shadow:0_1px_0_#ccc,_0_2px_0_#c9c9c9,_0_3px_0_#bbb,_0_4px_0_#b9b9b9,_0_5px_0_#aaa,_0_6px_1px_rgba(0,0,0,.1),_0_0_5px_rgba(0,0,0,.1),_0_1px_3px_rgba(0,0,0,.3),_0_3px_5px_rgba(0,0,0,.2),_0_5px_10px_rgba(0,0,0,.25),_0_10px_10px_rgba(0,0,0,.2),_0_20px_20px_rgba(0,0,0,.15)]'>{projec.name}</h3>
      </span>

      <figure className='pt-8 p-2 '>
        <img className='   object-full rounded-lg ' src={`assets/portadas/${projec.fig}`} alt={`Portada de ${projec.name}`} />
      </figure>
      <p className='p-2 text-sm lg:text-base text-white'>{projec.description}</p>
      <p className='p-2 font-semibold text-white '>Tecnologís usadas</p>
      <span className='flex gap-2 text-white mt-2 p-2 w-full flex-wrap justify-center'>{

          projec.tech.map((skill) => (
            <p className=' text-sm lg:text-base p-1 rounded-lg bg-slate-600' key={skill}>{skill}</p>
          ))

        }
      </span>
      <span className='flex justify-evenly mt-6 mb-2'>
        <button className='border border-white p-1 rounded-lg text-white bg-sky-800'><a href={projec.link} target='_blank' rel='noreferrer'>Ir al sitio</a></button>
        <button className='border border-white p-1 rounded-lg text-white bg-blue-900'><a href={projec.gitHubb} target='_blank' rel='noreferrer'>Git hub</a></button>

      </span>

    </div>
  )
}
