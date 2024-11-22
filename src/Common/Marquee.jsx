import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({marqueeText}) => {
  const marqueeRef = useRef(null);
console.log(marqueeText)
  useEffect(() => {
    const marquee = marqueeRef.current;

    // Set up GSAP timeline for seamless infinite scrolling
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    const marqueeWidth = marquee.scrollWidth / 2; // Calculate half the width for seamless loop
    const duration = 15; // Control the speed of the marquee

    // Animate the marquee content to scroll left continuously
    tl.to(marquee, {
      x: -marqueeWidth, // Move the content to the left
      duration: duration,
    }).to(
      marquee,
      {
        x: 0, // Reset to the original position
        duration: 0, // Instantly reset
      },
      `+=0` // Immediately after the first animation ends
    );

    // Reverse direction when scrolling up or down
    ScrollTrigger.create({
      trigger: marqueeRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        tl.timeScale(self.direction === 1 ? 1 : -1); // Change animation direction
      },
    });
  }, []);

  return (
    <div className="mt-[45px] overflow-hidden border-t border-b border-white ">
      {/* Marquee Content */}
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-8 items-center"
      >
        {/* Repeating Content */}
        <h1 className="font-joyride md:text-[70px] text-[50px] lg:text-[90px] text-white font-medium ml-5 leading-none">
        {marqueeText}

        </h1>
        <h1 className="font-joyride md:text-[70px] text-[50px] lg:text-[90px] text-white font-medium ml-5 leading-none">
        {marqueeText}
        </h1>
        <h1 className="font-joyride md:text-[70px] text-[50px] lg:text-[90px] text-white font-medium ml-5 leading-none">
        {marqueeText}
        </h1>
        <h1 className="font-joyride md:text-[70px] text-[50px] lg:text-[90px] text-white font-medium ml-5 leading-none">
        {marqueeText}
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
