import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='quantico'>
      <Navbar />
      <Hero />
      <div className='divider'></div>
      <Projects />
      <div className='divider'></div>

      <About/>
      <div className='divider'></div>

      {/* <Contact/> */}
      <Form/>
    </div>

  )
}

export default App
