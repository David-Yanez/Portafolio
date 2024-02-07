import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'

function App () {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-screen justify-center items-center bg-slate-500'>
        <AboutMe />
        <Projects />
        <Skills />
      </div>

    </>
  )
}

export default App
