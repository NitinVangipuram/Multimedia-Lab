import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import News from '../components/News'
import Annoucements from '../components/Annoucements'
import Media from '../components/Media'
import DigitalTwin from './DigitalTwin'
const Main = () => {
  return (
    <div>
    <Hero  />
     <About  />
     <Annoucements />
     <DigitalTwin />
     <Media />
     <News />
    </div>
  )
}

export default Main