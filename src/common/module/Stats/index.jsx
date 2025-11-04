"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Link from "next/link";
import { FaUsers, FaProjectDiagram, FaCode, FaIndustry } from "react-icons/fa";

const Counter = ({ end, duration = 2000, suffix = "+", isVisible }) => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const start = 0;
    const increment = end / (duration / 16);
    let current = start;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span className="inline-block">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: <FaUsers size={40} />,
      value: 10,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered solutions",
    },
    {
      icon: <FaCode size={40} />,
      value: 5,
      suffix: "+",
      label: "Expert Developers",
      description: "Skilled team members",
    },
    {
      icon: <FaIndustry size={40} />,
      value: 8,
      suffix: "+",
      label: "Industries Served",
      description: "Diverse industry expertise",
    },
  ];

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading title="Our Stats" icon={<FaProjectDiagram size={30} />} />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col mb-10"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
          Numbers That Speak for Our Excellence
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          Delivering excellence through innovation and dedication
        </p>
      </ComponentTransition>

      <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {stats.map((stat, index) => (
          <ComponentTransition
            key={index}
            delay={0.1 + index * 0.1}
            className="group relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative h-full px-6 py-8 bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-neutral-800 dark:text-neutral-200 mb-4">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold bg-clip-text dark:bg-gradient-to-r from-white to-[#8f8f8f] bg-text text-transparent">
                  <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.description}
              </p>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/0 to-neutral-200/0 dark:from-neutral-800/0 dark:to-neutral-800/0 group-hover:from-neutral-200/10 group-hover:to-neutral-200/5 dark:group-hover:from-neutral-800/10 dark:group-hover:to-neutral-800/5 transition-all duration-300 rounded-3xl pointer-events-none" />
            </motion.div>
          </ComponentTransition>
        ))}
      </div>

      {/* Call to Action Button */}
      <ComponentTransition delay={0.3} className="flex justify-center items-center mt-12">
        <Link 
          href="https://calendar.app.google/vUGja5MThknGhY5A7" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ButtonSpot title="Let's Update Some Stats" />
        </Link>
      </ComponentTransition>
    </div>
  );
};

export default Stats;

