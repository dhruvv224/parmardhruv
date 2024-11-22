import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Front-End Development",
    description: "Building responsive and user-friendly web interfaces.",
  },
  {
    id: 2,
    title: "Digital Design",
    description: "Creating modern and innovative digital designs.",
  },
  {
    id: 3,
    title: "Back-End Development",
    description: "Developing robust server-side logic and APIs.",
  },
  {
    id: 4,
    title: "Video Editing",
    description: "Editing and producing high-quality video content.",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div initial={{opacity:0,y:-120}} whileInView={{opacity:1,y:0}} transition={{ease:easeInOut,duration:1.02}} className="max-w-[1200px] mx-auto p-4 lg:mt-[80px]">
      <h1 className="text-4xl font-bold mb-2 text-white font-source-sans border-b border-white">
        Services
      </h1>


      {/* Grid Layout for Two Sections */}
      <div className="grid grid-cols-10 gap-4">
        {/* Smaller Section */}
        <div className="col-span-3  p-4 rounded-md">
          {/* <p className="text-white font-medium">This is the smaller section.</p> */}
        </div>

        {/* Larger Section */}
        <div className="col-span-7  rounded-md">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-300 py-4">
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(service.id)}
              >
                <div>
                  <span className="text-white mr-2 font-montserrat">{`0${service.id}.`}</span>
                  <span className="font-semibold text-[35px] text-white font-stinger_light tracking-wider">
                    {service.title}
                  </span>
                </div>
                <span className="text-2xl font-bold text-white font-stinger_light">
                  {openId === service.id ? "-" : "+"}
                </span>
              </div>

              {/* Accordion Content with Framer Motion */}
              <motion.div
                initial={{ height: 0, filter: "blur(20px)" }}
                animate={{
                  height: openId === service.id ? "auto" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                whileInView={{ filter: "blur(0px)" }}
              >
                <p className="mt-2 text-white px-4">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Accordion;
