import React from 'react'
import OurWork from '../components/OurWork'
import WoodDetails from '../components/WoodDetails'
import AnyQuestions from '../components/AnyQuestions'

const Gallery = () => {
  return (
    <div className=''>
      <OurWork padding={20}/>
      <WoodDetails/>
      <AnyQuestions/>
    </div>
  )
}

export default Gallery
