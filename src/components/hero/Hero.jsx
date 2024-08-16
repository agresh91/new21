import React from 'react'
import './hero.css'
import hero3 from '../../assets/hero3.png'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
const hero = () => {
  return (
    <div name='home' className='h'>
      <div className="h-left">
        <div className="h-left-wrapper">
            <p className='h-intro1'>Welcome to my personal website!</p>
            <h1 className='h-intro2'>Hey folks, I'm </h1>
            <div className='text'>
              <Typewriter
              options={{
                strings:['Agresh','Developer'],
                autoStart:true,
                loop:true,
              }}
              />
            </div>
            <p className="h-desc">Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
            <Link to='contact' smooth offset={-60} duration={600} ><button>Contact Me</button></Link>
        </div>
      </div>
      <div className="h-right">
        <img src={hero3} alt='??'/>
      </div>
    </div>
  )
}

export default hero
