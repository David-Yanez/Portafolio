import React from 'react'
import reactIcon from '../../assets/react.svg'
import momgoDb from '../../assets/mongodb.svg'
import javaScri from '../../assets/JavaS.svg'
import './index.css'
/**
 *     overflow-clip-margin: content-box;
    overflow: clip;
    overflow-x: ;
    overflow-y: ;

    .flip-card:hover .flip-card-inner
 */

export const Skills = () => {
  // text-lg font-bold bg-clip-text text-transparent bg-gradient-to-t from-pink-50 to-sky-100
  return (
    <div className='flex flex-col items-center'>
      <p className=' text-center text-2xl'>Mis Habilidades</p>
      <div className='flex gap-10  w-3/5 m-4 flex-wrap '>

        <div className='border rounded-xl border-white h-24 w-24'>
          <div className='card h-full w-full'>
            <div className='  card-inner rounded-lg h-full w-full'>
              <figure className='h-full w-full card-front '>
                <img className='h-full w-full p-2 object-contain   ' src={reactIcon} alt='' />
              </figure>
              <div className='flex justify-center h-full w-full items-center  card-back'>
                <p className='text-title '>React js</p>
              </div>
            </div>
          </div>
        </div>

        <div className='border rounded-xl border-white h-24 w-24'>
          <div className='card h-full w-full'>
            <div className='  card-inner rounded-lg h-full w-full'>
              <figure className='h-full w-full card-front '>
                <img className='h-full w-full p-2 object-contain   ' src={momgoDb} alt='' />
              </figure>
              <div className='flex justify-center h-full w-full items-center  card-back'>
                <p className='text-title '>MongoDb</p>
              </div>
            </div>
          </div>
        </div>

        <div className='border rounded-xl border-white h-24 w-24'>
          <div className='card h-full w-full'>
            <div className='  card-inner rounded-lg h-full w-full'>
              <figure className='h-full w-full card-front '>
                <img className='h-full w-full p-2 object-contain   ' src={javaScri} alt='' />
              </figure>
              <div className='flex justify-center h-full w-full items-center  card-back'>
                <p className='text-title '>JavaScript</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
