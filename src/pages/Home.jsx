import React from 'react'
import Hero from '../components/Home/Hero'
import AdvantageSection from '../components/Home/AdvantageSection'
import Services from '../components/Home/Services'
import Footer from '../layout/Footer'
import ExperienceSection from '../components/Home/ExperienceSection'
import ProjectSlider from '../components/Home/ProjectSlider'
import Reviews from '../components/Home/Reviews'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AdvantageSection/>
      <Services/>
      <ExperienceSection/>
      <ProjectSlider/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
