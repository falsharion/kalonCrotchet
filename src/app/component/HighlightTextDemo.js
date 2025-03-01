"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  RxStitchesLogo,
  GiPirateHook,
  SiReacthookform,
  FiCodepen,
  TfiPinAlt,
  PiYarnFill,
  VscSparkleFilled,
  VscTerminalLinux,
  VscOctoface,
  SiAirtransat,
  GiYarn,
  FiFeather,
  SiAdafruit,
  TfiWand,
  FiPenTool,
} from '../constants/iconsImports'; 


const CONSTANTS = {
  TRANSITION_INTERVAL: 3500,
  DELAY_BEFORE_SWITCH: 3000,
  SECTIONS: ['customDesigns', 'accessories', 'Stitches']
};


const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delay * 0.2,
      ease: "easeOut"
    }
  })
};


const ICON_CONFIGS = {
  customDesigns: [
    {
      Icon: RxStitchesLogo,
      position: "top-8 left-4",
      className: "w-8 h-8 text-red-600",
      glowColor: "bg-orange-400"
    },
    {
      Icon: GiPirateHook,
      position: "top-4 right-4 lg:top-[-1rem]",
      className: "w-8 h-8 lg:w-12 lg:h-12 text-amber-900",
      glowColor: "bg-orange-400"
    },
    {
      Icon: SiReacthookform,
      position: "bottom-4 left-4 md:top-[17rem] md:left-[10rem]",
      className: "w-8 h-8 md:w-12 md:h-12 text-amber-900",
      glowColor: "bg-amber-500"
    },
    {
      Icon: FiCodepen,
      position: "bottom-4 right-4 md:bottom-[1rem] md:right-[10rem]",
      className: "w-8 h-8 text-amber-600",
      glowColor: "bg-orange-400"
    },
    {
      Icon: TfiPinAlt,
      position: "top-16 right-16 md:top-[1rem] md:right-[15rem]",
      className: "w-8 h-8 md:w-11 md:h-11 text-amber-500",
      glowColor: "bg-amber-500"
    }
  ],
  accessories: [
    { Icon: PiYarnFill, position: "top-10 left-4", className: "w-8 h-8 md:w-[3rem] md:h-[3rem] text-yellow-500" },
    { Icon: VscSparkleFilled, position: "top-4 right-4 md:right-8", className: "w-8 h-8 text-yellow-500" },
    { Icon: VscTerminalLinux, position: "bottom-[20rem] left-[8rem]", className: "w-11 h-11 text-yellow-500" },
    { Icon: VscOctoface, position: "top-4 right-[12rem] md:right-[25rem] md:top-[-2rem]", className: "w-8 h-8 md:w-[4rem] md:h-[4rem] text-yellow-500" },
    { Icon: SiAirtransat, position: "top-16 right-16 md:right-[15rem] md:top-[-2rem]", className: "w-11 h-11 text-yellow-500" }
  ],
  Stitches: [
    { Icon: GiYarn, position: "top-4 left-4 lg:left-[-3rem]", className: "w-8 h-8 md:w-12 md:h-12 text-amber-950 bg-white rounded-xl shadow-lg p-1" },
    { Icon: FiFeather, position: "top-4 right-4 lg:right-[-2rem]", className: "w-8 h-8 md:w-12 md:h-12 text-amber-900 bg-white rounded-xl shadow-lg p-1" },
    { Icon: SiAdafruit, position: "bottom-4 left-4", className: "w-8 h-8 md:w-12 md:h-12 text-amber-900 bg-white rounded-xl shadow-lg p-1" },
    { Icon: TfiWand, position: "bottom-4 right-4 lg:right-[-3rem] md:right-[19rem]", className: "w-8 h-8 md:w-12 md:h-12 text-amber-900 bg-white rounded-xl shadow-lg p-1" },
    { Icon: FiPenTool, position: "bottom-16 right-16 md:bottom-[2rem]", className: "w-8 h-8 md:w-12 md:h-12 text-amber-950 bg-white rounded-xl shadow-lg p-1" }
  ]
};


const HoverableText = ({ children, isActive, onHover }) => (
  <span
    className="relative inline-block cursor-pointer"
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <span className={`transition-colors duration-300 ${isActive ? "text-amber-500" : "text-amber-950/30"}`}>
      {children}
    </span>
  </span>
);

const IconBox = ({ Icon, delay, className, hasGlow, glowColor }) => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    custom={delay}
    className="relative"
  >
    {hasGlow && (
      <div className={`absolute -inset-2 ${glowColor} opacity-75 blur-xl rounded-full`} />
    )}
    <div className="relative">
      <Icon className={className} />
    </div>
  </motion.div>
);

const IconGroup = ({ activeSection }) => (
  <div className="absolute inset-0 pointer-events-none">
    <AnimatePresence mode="wait">
      {activeSection && (
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative w-full h-full"
        >
          {ICON_CONFIGS[activeSection].map((item, idx) => (
            <div key={idx} className={`absolute ${item.position}`}>
              <IconBox
                {...item}
                delay={idx}
                hasGlow={activeSection === 'customDesigns'}
              />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const CrochetShowcase = () => {
  const [activeSection, setActiveSection] = useState(CONSTANTS.SECTIONS[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSection = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CONSTANTS.SECTIONS.length);
    }, CONSTANTS.DELAY_BEFORE_SWITCH);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      setActiveSection(CONSTANTS.SECTIONS[currentIndex]);
      const intervalId = setInterval(nextSection, CONSTANTS.TRANSITION_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [isHovered, currentIndex, nextSection]);

  const handleHover = (section, hovering) => {
    setIsHovered(hovering);
    setActiveSection(hovering ? section : CONSTANTS.SECTIONS[currentIndex]);
  };

  return (
    <div className="min-h-[35rem] flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto py-24 px-8">
        <IconGroup activeSection={activeSection} />
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-amber-950 font-bold text-center">
          Discover crochet{' '}
          {CONSTANTS.SECTIONS.map((section, index) => (
            <React.Fragment key={section}>
              <HoverableText
                isActive={activeSection === section}
                onHover={(hovering) => handleHover(section, hovering)}
              >
                {section === 'customDesigns' ? 'custom designs' :
                 section === 'Stitches' ? 'Stitches🧵' : section}
              </HoverableText>
              {index < CONSTANTS.SECTIONS.length - 1 && ', '}
            </React.Fragment>
          ))}
          {' '}and more
        </h1>
      </div>
    </div>
  );
};

export default CrochetShowcase;
