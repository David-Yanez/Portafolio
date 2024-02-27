import React from 'react'

export const Contact = () => {
  return (
<div  className=' p-2  rounded-lg bg-slate-400 w-2/5 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.30)]   '>
  <span className='flex flex-col items-center'>
  <h2>Contactos</h2>
    <h3>David Yánez</h3>
    <p>Desarrollador</p>
  </span>


    <span className='flex mt-8 '>
    <img src="assets/contac/mail.svg" className='w-6 h-6' alt="" />
    <p>Email:</p>
    <input type="text" disabled='true' className=' bg-slate-500 rounded-md pl-2 ' value='luiis.daviid4@gmail.com'/>
    <figure className=' bg-blue-500 ml-2 rounded-md cursor-pointer'><img src="assets/contac/copy.svg" className='w-6 h-6 p-0.5' alt="" /></figure>
    </span>
    <span className='flex'>
    <img src="assets/contac/linke.svg" className='w-5 h-5' alt="" />
    <p>Linkedin: </p>
    <a href="https://tailwindcss.com" target="_blank"> David-Yanezz</a>
    </span>
   
   <span className='flex justify-center mt-8'>
   <button className='w-24 text-lg bg-gradient-to-r from-sky-700 via-sky-800 to-blue-800   p-2 rounded-xl hover:drop-shadow-2xl hover:shadow-[#7dd3fc] text-white'> ver CV</button>
   </span>
   
</div>
    
  )
}
