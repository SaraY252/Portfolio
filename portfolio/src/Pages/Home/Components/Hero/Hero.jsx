import React from 'react'
import './Hero.css'
import HeroImage from '../../../../assests/HeroSection/HeroSec1.png'
import Signature from '../../../../assests/HeroSection/signature.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Hero = () => {
    return (
      <div className='main-Hero-container'>
          <div className='banner-shape shape1'>
          </div>
          <div className='banner-shape shape2'>
          </div>
          <div className='banner-shape shape3'>
          </div>
          <div className='banner-shape shape4'>
          </div>
          <div className='banner-shape shape5'>
          </div>
          <div className='banner-shape shape6'>
          </div>
      <div className='main-Hero' id='hero'>
        <div className='hero-section1-container'>
        <div className='hero-section1'>
        <div className='texts'>
        <h1 className='hero-text1'>
          I AM 
        </h1>
        <h1 className='hero-text'>
          ROBANDO
        </h1>
        <h1 className='hero-text'>
          KAL
        </h1>
        </div>
        <img className='hero-signature' src={Signature}/>
        
        <button className='career-btn'>
          MY CAREER
        </button>
        </div>
        <img className='hero-image' src={HeroImage}/>
        </div>
        <div className='hero-info'>
        <div className='place-of-birth'>
        <LocationOnIcon  />
        </div>
        <div className='date-of-birth'>

        </div>
        <div className='weight'>

        </div>
        <div className='height'>

        </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default Hero;