import React from 'react'
import '../index.css'
import { Navbar } from './Navbar'
import { Pricing } from './Pricing'
import { Galary } from './Galary'
import {Contact} from './Contact'
import {Footer} from './Footer'

export const LandingPage = () => {
  
  return (
    <div className="scrollable-container">
    <div className='gallery-container'>
    <Navbar/>
    <Galary/>
    </div>
    <Pricing/>
    <Contact/>
    <Footer/>
    </div>
  )
}
