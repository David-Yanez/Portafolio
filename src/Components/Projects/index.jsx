import React from 'react'
import { Card } from '../Card'

export const Projects = () => {
  return (
    <div>
      <p className='text-center text-2xl'>Mis Proyectos</p>
      <div className='flex gap-4'>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}
