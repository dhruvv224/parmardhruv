import React from 'react'
import Navbar from './Common/Navbar'
import Hero from './Common/Hero'
import Projects from './Common/Projects'
import Project from './Common/Project'
import About from './Common/About'
import Accordion from './Common/Accordian'
import ContactMe from './Common/ContactMe'
const Main = () => {
  return (
    <div className='bg-errie-black min-h-screen'>
        <Navbar/>
        <Hero/>
        <Projects/>
        {/* <Project/> 
        */}
        <About/>
        <Accordion/>
        <ContactMe/>
    </div>
  )
}

export default Main