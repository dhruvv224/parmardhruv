import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import project1 from '../Assets/WhatsApp Image 2024-11-20 at 14.44.42_df5cae2b.jpg';
import zomato from '../Assets/zomato.jpg'
import  dreamNest from '../Assets/dreamNest.jpg'
import saas from '../Assets/saas landing page.jpg'
import job_hunter from '../Assets/job-hunter.jpg'
import swiggy from '../Assets/WhatsApp Image 2024-11-20 at 17.39.36_e0f2f6d6.jpg'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const marqueeRef = useRef(null);
const marqueeText='FEATURED - PROJECTS'
 

  return (
    <div className="border-none overflow-hidden">
        <div className="marquee py-5 ">
        <Marquee marqueeText={marqueeText}/>     

        </div>
        <div className="max-w-[1200px] mx-auto mt-5 py-7">
        <div className="mt-[50px] grid p-4 lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-center gap-y-[40px] lg:gap-y-[100px]">
            <motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
            <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">

                    <img src={project1} alt="" className="hover:rounded-sm duration-300" />


                </div>

            </motion.div>
            <motion.div className="description" initial={{opacity:0 ,y:180}} whileInView={{opacity:1,y:0}} transition={{duration:1.01}}>
                <h3 className="lg:text-3xl md:text-2xl text-xl font-joyride text-white">
                    WOW E-COMMERCE 

                </h3>
                <p className="lg:text-xl text-lg text-white font-stinger_light">
                    An e-commerce platform with various of filter options
                </p>
                <p className="text-base text-gray-300 font-source-sans mt-6 mb-4">
                Developing a notion like editor with ai features, with the aim on minimal designs and features with higher productivity, which will allow the users to stay focused and not distracted.

                </p>
                <span className="text-base  font-joyride text-white ">
                    Tech Stack

                </span>
                <p className="text-white font-source-sans text-base">
                Next.js (frontend)<br/>
Node Ts, Redis, Websockets, Block chain (Backend)<br/>
Mongodb and Sanity (database).
                </p>

            </motion.div>
           
            <motion.div
  className="description"
  initial={{ opacity: 0, y: 180 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.01 }}
>
  <h3 className="lg:text-3xl md:text-2xl text-xl font-joyride text-white">
    Zomato Clone
  </h3>
  <p className="lg:text-xl text-lg text-white font-stinger_light">
    A frontend UI for a Zomato-like food delivery platform
  </p>
  <p className="text-base text-gray-300 font-source-sans mt-6 mb-4">
    This project focuses on designing an intuitive and visually appealing user
    interface for a Zomato-like application. It includes key features such as
    restaurant listings, search functionality, and dynamic filtering.
  </p>
  <span className="text-base font-joyride text-white">Tech Stack</span>
  <p className="text-white font-source-sans text-base">
    React.js (Frontend)
    <br />
    Tailwind CSS (Styling)
  </p>
</motion.div>

<motion.div
  className="img div"
  initial={{ opacity: 0, y: 150, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 1.02 }}
>
  <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">
    <img
      src={zomato}
      alt="Zomato Clone"
      className="hover:rounded-sm duration-300"
    />
  </div>
</motion.div>
<motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >             
  <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">                      
    <img src={job_hunter} alt="Job Hunter Portal" className="hover:rounded-sm duration-300" />                   
  </div>              
</motion.div>             
<motion.div className="description" initial={{opacity:0 ,y:180}} whileInView={{opacity:1,y:0}} transition={{duration:1.01}}>                 
  <h3 className="lg:text-3xl md:text-2xl text-xl font-joyride text-white">                     
    Job Hunter Portal                   
  </h3>                 
  <p className="lg:text-xl text-lg text-white font-stinger_light">                     
    A platform to search, filter, and apply for jobs with ease.                 
  </p>                 
  <p className="text-base text-gray-300 font-source-sans mt-6 mb-4">                 
    Users can build professional profiles, create resumes by adding skills, and receive tailored job recommendations. The portal simplifies the hiring process and offers a seamless experience for job seekers.                  
  </p>                 
  <span className="text-base font-joyride text-white ">                     
    Tech Stack                 
  </span>                 
  <p className="text-white font-source-sans text-base">                 
    React.js, Material UI (MUI), Tailwind CSS (Frontend) <br/> 
    Express.js (Backend) <br/> 
    MongoDB (Database).                 
  </p>              
</motion.div>

<motion.div className="description" initial={{opacity:0 ,y:180}} whileInView={{opacity:1,y:0}} transition={{duration:1.01}}>
  <h3 className="lg:text-3xl md:text-2xl text-xl font-joyride text-white">
    Swiggy Clone
  </h3>
  <p className="lg:text-xl text-lg text-white font-stinger_light">
    A UI-focused clone of Swiggy to explore modern design and functionality.
  </p>
  <p className="text-base text-gray-300 font-source-sans mt-6 mb-4">
    Built to replicate the core user interface of Swiggy, providing a responsive and visually appealing layout using modern frontend technologies.
  </p>
  <span className="text-base font-joyride text-white ">
    Tech Stack
  </span>
  <p className="text-white font-source-sans text-base">
    React.js <br />
    Tailwind CSS
  </p>
</motion.div>
<motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}}>
  <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">
    <img src={swiggy} alt="Swiggy Clone UI" className="hover:rounded-sm duration-300" />
  </div>
</motion.div>

<motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
  <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-lg hover:shadow-md hover:shadow-gray-500">
    <img src={saas} alt="SaaS Demo Project" className="hover:rounded-sm duration-300" />
  </div>
</motion.div>
<motion.div className="description" initial={{opacity:0 ,y:180}} whileInView={{opacity:1,y:0}} transition={{duration:1.01}}>
  <h3 className="lg:text-3xl md:text-2xl text-xl font-joyride text-white">
    SaaS Demo Project
  </h3>
  <p className="lg:text-xl text-lg text-white font-stinger_light">
    A visually appealing landing page for showcasing SaaS products and services.
  </p>
  <p className="text-base text-gray-300 font-source-sans mt-6 mb-4">
    This project focuses on creating an attractive and responsive UI using Framer Motion to bring life to the design with smooth animations. It’s perfect for highlighting the key features and benefits of a SaaS platform.
  </p>
  <span className="text-base font-joyride text-white ">
    Tech Stack
  </span>
  <p className="text-white font-source-sans text-base">
    Vite (Build Tool) <br />
    Tailwind CSS (Styling) <br />
    Framer Motion (Animations)
  </p>
</motion.div>

        </div>
        </div>
    </div>
  );
};
export default Projects