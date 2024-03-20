import React from 'react'

import { skills } from '../../Utils/skils'

import './index.css'
import { CardSkills } from '../CardSkills'

export const Skills = () => {
  return (
    <div className='flex flex-col items-center' id='skills'>
      <p className=' text-center my-20 subTitle'>Mis Habilidades</p>
      <div className='flex gap-8 lg:gap-10 w-4/5  lg:w-3/5 m-4 flex-wrap justify-center '>

        {
      skills.map((skill) => (
        <CardSkills
          key={skill.nombre}
          nombre={skill.nombre}
          fig={skill.fig}
          col={skill.col}
        />
      ))

     }

      </div>
    </div>
  )
}
