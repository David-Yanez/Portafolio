import './App.css'
import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Modal } from './Components/Modal'


function App () {

  const [openModal, setOpenModal] = useState(true)
  //
  return (
    <>
      <div className='flex flex-col h-auto w-screen justify-center items-center bg-slate-500'>
        <Navbar />
        <AboutMe />
        <Projects />
        <Skills />
       
      </div>
      {openModal && (
        <Modal>
           <Contact />
        </Modal>
      )}
   
    </>
  )
}

export default App
