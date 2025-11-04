"use client";
import Image from "@/common/component/element/Image";
import { FeedbackItem } from "@/common/constant/Feedback";
import React from "react";
import { motion } from "framer-motion";

export default function FeedbackCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full py-10">
      {FeedbackItem.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * 0.15, 
            duration: 0.6,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="flex bg-neutral-50 dark:bg-neutral-950 border-[1px] relative group z-[9]  hover:lg:border-black overflow-hidden rounded-3xl flex-col items-start text-start p-6"
        >
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <Image className="w-full h-auto object-cover" src={item.img} alt={item.title} width={400} height={400} />
          </div>

          <p className="mt-2 py-2 dark:text-white text-black  transition-all duration-300">
            {item.desc}
          </p>
          <h1 className="text-xl py-2 dark:text-white text-black  transition-all duration-300 font-medium">
            {item.title}
          </h1>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {item.comp}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
