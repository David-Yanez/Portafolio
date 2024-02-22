import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'

function App () {
  //
  return (
    <>
      <div className='flex flex-col h-auto w-screen justify-center items-center bg-slate-500'>
        <Navbar />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </>
  )
}

export default App
