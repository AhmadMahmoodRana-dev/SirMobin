import React from 'react'
import Hero from '../components/Home/Hero'
import AdvantageSection from '../components/Home/AdvantageSection'
import Services from '../components/Home/Services'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AdvantageSection/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home
