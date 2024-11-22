import React from 'react'
import Marquee from './Marquee'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'
const ContactMe = () => {
    const marqueeText='CONTACT ME'
  return (
    <div className='lg:mt-[80px] mt-[60px] py-4 '>
<Marquee marqueeText={marqueeText} />
<div className="flex flex-col justify-center items-center p-[150px]">
  <h1 className="text-[55px] font-montserrat text-white  text-center">
    LET'S WORK TOGETHER
    <br />
  </h1>
  <span className="text-white text-[18px]  font-montserrat">dhruvparmar2204@gmail.com</span>
  <div className='flex gap-4 py-3'>
    <Link>
    <FaLinkedin  size={25} className='text-blue-600'/></Link>
    <Link><FaXTwitter size={25} className='text-gray-100'/></Link>
    <Link><FaGithub size={25} className='text-white'/></Link>
    </div>
</div>


    </div>
  )
}

export default ContactMe