'use client'
import React from "react";
import { translateInViewVariant } from "./Transition";
import { motion } from "framer-motion";

const ComponentTransition = ({ children, className, delay, shouldAnimate = true }) => {
  return (
    <motion.div
      initial="initial"
      animate={shouldAnimate ? "whileInview" : "initial"}
      variants={translateInViewVariant}
      transition={{
        delay: shouldAnimate ? delay : 0,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.6,
      }}
      className={className}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
};

export default ComponentTransition;
