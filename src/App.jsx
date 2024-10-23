import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import RocketCursor from './components/RocketCursor'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <RocketCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Achievements/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
