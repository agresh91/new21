import React from 'react'
import './skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'
const Skills = () => {
  return (
    <div className='s'>
      <h1>Expertise</h1>
      <div className="s-list">
        <div className="sl"><img src={html} alt="??" width={80}/></div>
        <div className="sl"><img src={css} alt="??" width={80} /></div>
        <div className="sl"><img src={react} alt="??" width={80} /></div>
        <div className="sl"><img src={python} alt="??" width={80} /></div>
      </div>
    </div>
  )
}

export default Skills
