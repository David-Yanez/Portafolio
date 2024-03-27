import React from 'react'

export const Contact = () => {
  const copy = () => {
    navigator.clipboard.writeText('luiis.daviid4@gmail.com')
  }

  return (
    <div className=' p-2  rounded-3xl bg-slate-400 w-3/4 lg:w-1/4 hover:shadow-[0_0_50px_1px_rgba(0,98,224,0.60)]  ' onClick={e => e.stopPropagation()}>
      <span className='flex flex-col items-center '>

        <h2 className='text-4xl'>David Yánez</h2>
        <h3 className='text-lg'>Desarrollador Web</h3>
      </span>

      <span className='flex mt-10 gap-2 lg:ml-8'>
        <img src='assets/contac/mail.png' className='w-8 h-8' alt='' />

        <input type='text' disabled='true' className=' bg-slate-500 rounded-md pl-1 w-3/4 lg:w-3/5  ' value='luiis.daviid4@gmail.com' />
        <figure className='  ml-1 rounded-md cursor-pointer' onClick={copy}><img src='assets/contac/copiar.png' className='w-8 h-8 hover:scale-110' alt='' /></figure>
      </span>
      <span className='flex gap-2 mt-2 items-center lg:ml-8'>
        <img src='assets/contac/linke2.svg' className='w-8 h-8' alt='' />

        <a href='https://tailwindcss.com' target='_blank' rel='noreferrer' className='ml-1 underline'> David-Yanezz</a>
      </span>

      <span className='flex justify-center mt-6'>
        <button className='w-24 text-lg bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   p-2 rounded-xl hover:drop-shadow-2xl hover:shadow-[#7dd3fc] text-white'> <a href='assets/CV/cv.pdf' target='_blank'>ver CV </a> </button>
      </span>

    </div>

  )
}
