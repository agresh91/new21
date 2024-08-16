import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [ismobile,setIsmobile]=useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className='n'>
      <a href='#'><img src={logo} width={50} alt='??' /></a>
         <ul className={ismobile?'m-list':'mn-list-hidden'}>
         {links.map(({ id, link }) => (
            <li key={id}><Link to={link} smooth offset={-70} duration={600} onClick={()=>setIsmobile(false)}>{link}</Link></li>
          ))}
         </ul>
         <ul className={ismobile?'n-list':'mn-list-hidden'}>
          {links.map(({ id, link }) => (
            <li key={id}><Link to={link} smooth offset={-70} duration={600}>{link}</Link></li>
          ))}
         </ul>
      {ismobile?<i className='bx bx-x' onClick={()=>setIsmobile(!ismobile)}></i>:<i className='bx bx-menu' onClick={()=>setIsmobile(!ismobile)}></i>}
    </div>
  )
}

export default Navbar
