import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroPic from "../Assets/WhatsApp Image 2024-11-19 at 21.03.44_cda1aaac.jpg";

const Hero = () => {
  return (
    <div className="mt-12 md:mt-24 px-4 max-w-[1200px] mx-auto relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-8">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* Animated Text */}
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-white text-2xl md:text-4xl lg:text-5xl italic mb-4 font-stinger_light"
          />
          {/* Hero Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-3xl md:text-5xl lg:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="font-stinger_light gradi-theme-text">
              Dhruv Parmar
            </span>
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={heroPic}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="p-4 max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default Hero;
