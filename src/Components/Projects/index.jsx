import React from 'react'
import { Card } from '../Card'
import { projects } from '../../Utils/projects'

export const Projects = () => {
  return (
    <div className=' mt-24 flex flex-col items-center' id='projects'>
      <p className='text-center  mb-10 subTitle'> Mis Proyectos </p>
      <div className='flex gap-4'>
        {
          projects.map((project) => (
            <Card
              key={project.name}
              name={project.name}
              fig={project.fig}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))
        }
      </div>
    </div>
  )
}
