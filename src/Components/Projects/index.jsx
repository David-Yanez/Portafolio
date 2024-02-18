import React from 'react'
import { Card } from '../Card'

export const Projects = () => {
  return (
    <div className=' mt-24 flex flex-col items-center'>
      <p className='text-center  mb-10 subTitle'> Mis Proyectos </p>
      <div className='flex gap-4'>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}
