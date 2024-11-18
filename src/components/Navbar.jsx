import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoMenu } from "react-icons/io5";
import { LINKS } from '../constants/index'
import { motion } from 'framer-motion'



const openLinkedIn = () => {
  window.open(LINKS.linkedin, '_blank', 'noopener,noreferrer');
};
const openGithub = () => {
  window.open(LINKS.github, '_blank', 'noopener,noreferrer');
};
const openX = () => {
  window.open(LINKS.X, '_blank', 'noopener,noreferrer');
};



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="md:mb-20 flex items-center justify-betweeen py-6">
        <div className="flex flex-shrink-0 items-center">
          <p className='text-4xl mx-2 text-center text-white font-semibold' >AN</p>
        </div>
        <div className=' ml-auto flex items-center justify-center gap-4 text-2xl'>
          <div className='hidden  md:flex items-center justify-center gap-4 text-sm '>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#about'>About Me</motion.a>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#technologies'>Technologies</motion.a>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#project'>Project</motion.a>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#education'>Education</motion.a>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#experience'>Experience</motion.a>
            <motion.a whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }} className='hover:border-b hover:border-neutral-300' href='#contact'>Contact Me</motion.a>

          </div>

          <button onClick={openLinkedIn}><FaLinkedin /></button>
          <button onClick={openGithub}><FaGithub /></button>
          <button className=' font-semibold text-3xl' onClick={openX}>X</button>
          <button
            onClick={handleToggle}
            className="md:hidden">
            <IoMenu />
          </button>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} items-end py-6`}>
        <motion.a whileHover={{ scale: 1.1 / 1 }}
          transition={{ duration: 0.3 }} className='block hover:border-b hover:border-neutral-300' href='#about'>About Me</motion.a>
        <motion.a whileHover={{ scale: 1.1 / 1 }}
          transition={{ duration: 0.3 }} className='block hover:border-b hover:border-neutral-300' href='#technologies'>Technologies</motion.a>
        <motion.a whileHover={{ scale: 1.1 / 1 }}
          transition={{ duration: 0.3 }} className='block hover:border-b hover:border-neutral-300' href='#project'>Project</motion.a>
        <motion.a whileHover={{ scale: 1.1 / 1 }}
          transition={{ duration: 0.3 }} className='block hover:border-b hover:border-neutral-300' href='#education'>Education</motion.a>
        <motion.a whileHover={{ scale: 1.1 / 1 }}
          transition={{ duration: 0.3 }} className='block hover:border-b hover:border-neutral-300' href='#contact'>Contact Me</motion.a>
      </motion.div>
    </>
  )
}

export default Navbar;
