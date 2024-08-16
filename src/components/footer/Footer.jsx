import React from 'react';
import './footer.css';
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import address from '../../assets/address.png' 
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare} from 'react-icons/ai'
import {IoLogoPinterest} from 'react-icons/io'
import {RiInstagramFill} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-wrapper">
        <div className="footer-left">
          <p className='p-1'>Copyright &#169; 2023. All rights reserved</p>
          <p className='p-2'>Made with <span id='p2'>&#10084;</span> from <a href="https://www.facebook.com/agresh.raghuwanshi.58">Agresh</a></p>
        </div>
        <div className="footer-center">
            <div className='f-c'><img src={address} alt='??' width={30}/><p>Mandideep <strong>Bhopal</strong></p></div>
            <div className='f-c'><img src={phone} alt='??' width={30}/><p>+91 9131215501</p></div>
            <div className='f-c'><img src={email} alt='??' width={30}/><a href='mailto:agreshraghuwanshi91@gmail.com'>agreshraghuwanshi91@gmail.com</a></div>
        </div>
        <div className="footer-right">
            <p>Feel free to connect</p>
            <div className='footer-icons'>
            <a href='https://www.instagram.com/agresh92'><RiInstagramFill size={30}/></a>
            <a href="https://www.facebook.com/agresh.raghuwanshi.58"><AiFillFacebook size={30}/></a>
            <a href="https://www.linkedin.com/in/agresh-raghuwanshi-311962215/"><AiFillLinkedin size={30}/></a>
            <a href="https://www.twitter.com/AgreshR1"><AiFillTwitterSquare size={30}/></a>
            <a href="https://pin.it/41u0mVb"><IoLogoPinterest size={30}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
