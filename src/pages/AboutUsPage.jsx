import React from 'react'
import AboutUs from '../components/AboutUs'
import OurWork from '../components/OurWork'
import AnyQuestions from '../components/AnyQuestions'

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs padding={16}/>
      <OurWork/>
      <AnyQuestions/>
    </div>
  )
}

export default AboutUsPage
