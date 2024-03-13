import './App.css'
import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Modal } from './Components/Modal'
import { CardDetails } from './Components/CardDetails'
function App () {
  const [openModal, setOpenModal] = useState(false)

  // bg-gradient-to-bl from-slate-400 via-gray-500 to-slate-500
  // bg-slate-500
  const [renderDetails, setRenderDetails] = useState(false)
  const [indexProjects, setIndexProjects] = useState(0)

  return (
    <>
      <div className='flex flex-col h-auto w-screen justify-center items-center bg-gradient-to-bl from-slate-700 via-slate-600 to-slate-700'>
        <Navbar
          openModal={openModal}
          setOpenModal={setOpenModal}
          setRenderDetails={setRenderDetails}
        />
        <AboutMe
          openModal={openModal}
          setOpenModal={setOpenModal}
          setRenderDetails={setRenderDetails}
        />
        <Projects
          openModal={openModal}
          setOpenModal={setOpenModal}
          setRenderDetails={setRenderDetails}
        />
        <Skills />

      </div>
      {openModal && (

        <Modal
          setOpenModal={setOpenModal}
        >
          {
      renderDetails ? <CardDetails /> : <Contact />
    }

        </Modal>
      )}

    </>
  )
}

export default App
