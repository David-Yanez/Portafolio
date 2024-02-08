import React from 'react'

export const CardSkills = (data) => {
  const col = data.col
  const textTitle = {
    color: '#FFF',
    'text-shadow': `0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #${col}, 0 0 30px #${col}, 0 0 40px #${col}, 0 0 55px #${col}, 0 0 75px #${col}`

  }
  return (
    <div className='border rounded-xl border-white h-24 w-24'>
      <div className='card h-full w-full'>
        <div className='  card-inner rounded-lg h-full w-full'>

          <figure className='h-full w-full card-front '>
            <img className='h-full w-full p-2 object-contain   ' src={`assets/skills/${data.fig}`} alt={data.nombre} />
          </figure>
          <div className='flex justify-center h-full w-full items-center  card-back'>
            <p style={textTitle}>{data.nombre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
