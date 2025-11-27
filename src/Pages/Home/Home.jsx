import React from 'react'
import Hero from './Hero/Hero.jsx'
import Category from './Category/Category.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import OurMission from "./OurMission/OurMission.jsx"
import About from "./About/OurStory.jsx"

export default function HomePage() {
  return (
    <>
    <Hero/>
    <Category/>
    <OurMission/>
    <About/>
    <Footer/>
    </>
  )
}
