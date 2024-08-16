import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Tech from './components/tech/Tech';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Tech/>
      <Skills/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
