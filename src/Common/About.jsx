import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const About = () => {
const fetchData=()=>{
  
}
useEffect(()=>{
  fetchData()
})

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:py-8 md:py-6 py-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Left Section: Creative Web Developer */}
        <motion.div
          className="lg:text-[80px] md:text-[60px] text-[40px]"
          initial={{ opacity: 0, y: 120, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.02, ease: easeInOut }}
        >
          <h1 className="text-white leading-tight">
            <span className="font-stinger_light font-thin">Creative</span> <br />
            <span className="font-source-sans m-0 p-0">WEB</span>
            <br />
            <div className="flex flex-wrap gap-2">
              <span className="font-stinger_light font-thin">Developer</span>
              <span className="ml-2">&</span>
            </div>
            <span className="font-stinger_light font-thin">
              Frontend Developer
            </span>
          </h1>
        </motion.div>

        {/* Right Section: About Us */}
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.02, ease: easeInOut }}
        >
          <h1 className="text-[35px] md:text-[45px] font-joyride text-white border-b mb-4">
            About Me
          </h1>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed py-4">
            Hi, I'm Dhruv, and I'm passionate about web development,
            programming, designing, and innovative software development. With
            over two years of hands-on experience in JavaScript web development,
            I excel in HTML5, CSS, JavaScript, Next.js, and Node.js. My aim is
            to create digital experiences that not only captivate and inspire
            but also deliver measurable results for clients. When developing
            websites, I focus on designing unique layouts, engaging
            interactions, and thoughtful typography. By integrating these
            elements, I strive to craft seamless user experiences that make a
            lasting impact.
          </p>
          <span className="text-2xl md:text-3xl font-stinger_light text-white">
            Skills
          </span>
          <div className="flex flex-wrap gap-6 mt-5 lg:overflow-auto md:overflow-hidden sm:overflow-hidden">
            <DiHtml5 size={30} className="text-orange-500" />
            <DiCss3 size={30} className="text-blue-700" />
            <DiJavascript1 size={30} className="text-yellow-400" />
            <DiReact size={30} className="text-blue-500" />
            <DiBootstrap size={30} className="text-purple-500" />
            <RiTailwindCssFill size={30} className="text-blue-500" />
            <SiRedux size={30} className="text-purple-500" />
            <DiMongodb size={30} className="text-green-500" />
            <DiSass size={30} className="text-pink-500" />
            <DiGithubBadge size={30} className="text-white" />
            <SiExpress size={30} className="text-white" />
            <FaPython size={30} className="text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
