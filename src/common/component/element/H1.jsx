"use client";
import { motion } from "framer-motion";
import React from "react";

export default function H1({ title, className, shouldAnimate = true }) {
  return (
    <div className="overflow-hidden relative flex justify-center ">
      <motion.h1
        initial={{ y: "50%" }}
        animate={shouldAnimate ? { y: "0%" } : { y: "50%" }}
        transition={{
        type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className={`${className} relative`}
      >
        {title}
      </motion.h1>
    </div>
  );
}
