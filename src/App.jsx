import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'

function App () {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-screen justify-center items-center bg-slate-500'>
        <AboutMe />
        <Skills />
      </div>

    </>
  )
}

export default App
