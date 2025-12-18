import React from 'react'
import { PiClockAfternoon } from 'react-icons/pi'
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <main className='hero-section main'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <h1 className='heading-xl'>
                Explore the World with WordAtlas,One Country at a Time.
            </h1>
            <p className='paragraph'>
                Discover detailed information about every country, from culture to geography, all in one place.
            </p>
            <NavLink to="/country">
            <button className='btn btn-darken btn-inline bg-white-box'>Get Started <FaLongArrowAltRight /></button>
            </NavLink>
          </div>
        <div className="hero-image" >
            <img src="./images/world.png" alt="world image" className='banner-img' />
        </div>
       
        </div>
        <About/>
    </main>
  )
}
export default Home
