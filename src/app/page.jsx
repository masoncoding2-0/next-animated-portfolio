"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{ y:"-200vh" }} 
      animate={{ y:"0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experiences, Designing Tomorrow.</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital portfolio,
            where innovation and creativity converge.
            With a keen eye for aestheric and a mastery of code,
            my portfolio showcase a diverse collection of projects
            in differents programming languages reflect my expertise
            and my commitment to excellence.
          </p>
          <div className='flex gap-4'>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Download My CV</button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
