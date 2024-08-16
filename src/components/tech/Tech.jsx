import React from 'react'
import './tech.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
const Tech = () => {
  return (
    <div name='projects' className='carousel-wrapper'>
      <h1>Projects</h1>
      <Carousel>
        <div><img src={img2}/></div>
        <div><img src={img3}/></div>
        <div><img src={img1}/></div>
      </Carousel>
    </div>
  )
}
export default Tech
