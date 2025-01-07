import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="text-white relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-8 h-20 relative">
        {/* Left Section: Logo */}
        <Link to="/" className="font-joyride text-white text-[22px]">
          Dhruv Parmar
        </Link>

        {/* Center Section: Navigation Links */}
        <nav
            className="bg-errie-black lg:bg-transparent lg:relative "
          >
        <ul className="hidden md:flex gap-8 font-montserrat font-[450] text-[16px]">
          <li>
            <Link to="/home" className="hover:text-gray-300 transition transform scale-100 hover:scale-105 duration-300 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition transform scale-100 hover:scale-105 duration-300 hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300 transition transform scale-100 hover:scale-105 duration-300 hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/socials" className="hover:text-gray-300 ">
              Socials
            </Link>
          </li>
        </ul>
</nav>
        {/* Right Section: Get in Touch Button */}
        <div className="hidden md:flex">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-full font-normal hover:bg-blue-500 transition font-montserrat">
            Get in Touch
          </button>
        </div>

       {/* Mobile Menu: Hamburger Menu */}
<div className="md:hidden z-50">
  <div
    onClick={() => setToggleNav(!toggleNav)}
    className="cursor-pointer"
  >
    {!toggleNav && <AiOutlineMenu size={30} />}
  </div>

  {/* Mobile Menu Animation */}
  <motion.div
    initial={false}
    animate={toggleNav ? "open" : "closed"}
    variants={menuVariants}
    className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 flex flex-col"
  >
    {/* Close Button */}
    <div
      className="absolute top-5 right-5 cursor-pointer z-50"
      onClick={() => setToggleNav(false)}
    >
      <AiOutlineClose size={30} className="text-white" />
    </div>

    {/* Menu Items */}
    <ul className="font-semibold text-white text-xl space-y-8 mt-24 text-center font-joyride">
      <li>
        <Link
          to="/home"
          onClick={() => setToggleNav(false)}
          className="hover:text-gray-400 transition"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          onClick={() => setToggleNav(false)}
          className="hover:text-gray-400 transition"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          onClick={() => setToggleNav(false)}
          className="hover:text-gray-400 transition"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/socials"
          onClick={() => setToggleNav(false)}
          className="hover:text-gray-400 transition"
        >
          Socials
        </Link>
      </li>
    </ul>
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
