import React from 'react'
import { CardProject } from '../CardProject'
import { projects } from '../../Utils/projects'

export const Projects = ({ openModal, setOpenModal, setRenderDetails }) => {
  return (
    <div className=' mt-24 flex flex-col items-center ' id='projects'>
      <p className='text-center  mb-10 subTitle'> Mis Proyectos </p>
      <div className='flex gap-6'>
        {
          projects.map((project) => (
            <CardProject
              key={project.name}
              name={project.name}
              fig={project.fig}
              description={project.description}
              tech={project.tech}
              link={project.link}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setRenderDetails={setRenderDetails}
            />
          ))
        }
      </div>
    </div>
  )
}
