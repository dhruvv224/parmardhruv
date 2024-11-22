import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Create a scrolling marquee effect
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none", duration: 10 },
    });

    tl.to(marquee, {
      xPercent: -100, // Move the marquee to the left
    });

    // Reverse direction on scroll
    ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom", // Trigger when the top of the marquee enters the viewport
      end: "bottom top", // Trigger until the bottom leaves the viewport
      onUpdate: (self) => {
        tl.timeScale(self.direction === 1 ? 1 : -1); // Forward or reverse timeline
      },
    });

    return () => {
      tl.kill(); // Cleanup the animation on unmount
      ScrollTrigger.kill(); // Cleanup the ScrollTrigger
    };
  }, []);

  return (
    <div className="overflow-hidden mt-7 px-4 lg:py-[60px] py-8 relative">
      <div className="max-w-[1200px] mx-auto relative" ref={marqueeRef}>
        <div className="flex space-x-12">
          <h1 className="font-joyride text-3xl text-white font-medium">
            Featured Projects
          </h1>
          <h1 className="font-joyride text-3xl text-white font-medium">
            Exciting Innovations
          </h1>
          <h1 className="font-joyride text-3xl text-white font-medium">
            Cutting-Edge Technology
          </h1>
          <h1 className="font-joyride text-3xl text-white font-medium">
            Inspiring Ideas
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
