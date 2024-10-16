import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='roboto-regular appContainer'>
      <Navbar />
      <Hero />
      <Projects />


      {/* <Contact/> */}
      <Form/>
      <Footer/>
    </div>

  )
}

export default App
