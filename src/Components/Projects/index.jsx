import React from 'react'
import { Card } from '../Card'

export const Projects = () => {
  return (
    <div className=' mt-24'>
      <p className='text-center text-2xl text-blue-900 mb-10'>Mis Proyectos</p>
      <div className='flex gap-4'>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}
