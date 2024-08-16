import React from 'react'
import './qualification.css'
import udemy from '../../assets/udemy.png'
import sca from '../../assets/sca.png'
import hack from '../../assets/hack.jpg'
import {TbFileCertificate} from 'react-icons/tb'
import {HiAcademicCap} from 'react-icons/hi'
const Qualification = () => {
  return (
    <div name='about' className='q'>
      <div className="q-left">
        <h1>Education <HiAcademicCap/></h1>
        <div className="q-element">
        <div className='q-circle'><p>2023</p><div className="q-line"></div></div>
        <div className="q-data">
            <h2>Bachelor's in Electronics & Communication</h2>
            <p>LNCT, Bhopal, Madhya Pradesh</p>
        </div>
        </div>
        <div className="q-line"></div>
        <div className="q-element">
        <div className='q-circle'><p>2018</p></div>
        <div className="q-data">
            <h2>Senior Secondary</h2>
            <p>Raj Heights The Global School, Mandideep, Madhya Pradesh</p>
        </div>
        </div>
        <div className="q-line"></div>
        <div className="q-element">
        <div className='q-circle'><p>2016</p></div>
        <div className="q-data">
            <h2>Higher Secondary</h2>
            <p>Raj Heights The Global School, Mandideep, Madhya Pradesh</p>
        </div>
        </div>
      </div>
      <div className="q-right">
          <h1>Certifications <TbFileCertificate/></h1>
          <div className="q-element">
        <div className='q-circle q-circle-img'><img src={udemy} alt='??'width={100}/><div className="q-line"></div></div>
        <div className="q-data">
            <h2>Web Development Bootcamp</h2>
            <p>LEARNING PLATFORM UDEMY</p>
        </div>
        </div>
        <div className="q-line q-line2"></div>
        <div className="q-element">
        <div className='q-circle q-circle-img'><img src={sca} alt='??' width={100}/></div>
        <div className="q-data">
            <h2>Python Programming</h2>
            <p>FROM SCA BHOPAL</p>
        </div>
        </div>
        <div className="q-line q-line2"></div>
        <div className="q-element">
        <div className='q-circle q-circle-img'><img src={hack} alt='??' width={100}/></div>
        <div className="q-data">
            <h2>SQL(Basics)</h2>
            <p>LEARNING PLATFORM HACKERRANK</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
