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
            <motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
            <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">

                    <img src={zomato} alt="" className="hover:rounded-sm duration-300" />


                </div>

            </motion.div>
            <motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
            <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">

                    <img src={job_hunter} alt="" className="hover:rounded-sm duration-300" />


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
            <motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
            <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-xl hover:shadow-lg hover:shadow-gray-500">

                    <img src={swiggy} alt="" className="hover:rounded-sm duration-300" />


                </div>

            </motion.div>
            <motion.div className="img div" initial={{opacity:0,y:150,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.02}} >
            <div className="img-container border-[12px] border-gray-400 border-solid lg:max-w-[550px] max-w-[400px] transition-all duration-300 shadow-gray-500 shadow-lg hover:shadow-md hover:shadow-gray-500">

                    <img src={saas} alt="" className="hover:rounded-sm duration-300" />


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
        </div>
        </div>
    </div>
  );
};
export default Projects