"use client";
import Buttons from "@/common/component/element/Buttons";
import ImgScale from "@/common/module/Hero/component/ImgScale";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HeroImage } from "@/common/constant/HeroImage";
import { Parallax } from "@/common/constant/Parallax";
import H1 from "@/common/component/element/H1";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import { useLoading } from "@/common/context/LoadingContext";

export const translateVariantText = {
  initial: {
    opacity: 0,
    y: 50,
    height: "10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "250px",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 0.8,
    },
  },
};

export const tranlateVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 0.6,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t, y } = Parallax(scrollY);
  const { isLoading, isNavigating } = useLoading();

  // Don't start animations until loading is complete
  const shouldAnimate = !isLoading && !isNavigating;

  return (
    <div className="h-auto md:mb-20 max-w-[1500px] px-5 lg:px-10 mt-20 relative overflow-hidden">
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36  items-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="border-[1px] rounded-full border-[#5515df] py-2 px-5"
          >
            <h1>Innovative Software Solutions 🚀 </h1>
          </motion.div>
          
          <H1
            className=" xl:w-[80%] 2xl:w-[80%] !leading-[0.85em] items-center flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-center text-4xl sm:text-5xl md:text-7xl w-full  font-bold pb-1"
            title="Welcome to CoreStride Labs Building Tomorrow's Software Solutions"
            shouldAnimate={shouldAnimate}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:w-[70%] text-center  lg:text-2xl mt-2 dark:text-neutral-300 text-neutral-700"
          >
            We craft cutting-edge software solutions that drive innovation and transform businesses. 
            From web applications to enterprise systems, we bring your vision to life with precision and excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex max-md:flex-col w-full items-center justify-center gap-5 py-5"
          >
            <ButtonSpot
              title="Get Started"
              className="!rounded-md !w-auto !py-2"
            />
          </motion.div>
        </div>

        <div className=" absolute w-[90%] top-[20%] h-[300px] z-[-99] ">
          <Rails />
          <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
        </div>

        <motion.div
          className="w-[100%] h-full xl:mt-10 mt-32 sm:mt-28 flex gap-1 lg:px-10 overflow-hidden "
          style={{
            translateY: t,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {HeroImage.map((item, index) => (
            <ComponentTransition
              delay={shouldAnimate ? index * 0.05 : 0}
              key={index}
              className=" overflow-hidden rounded-xl w-full"
              shouldAnimate={shouldAnimate}
            >
              <Image
                alt="Hero"
                className="overflow-hidden w-full h-auto"
                height={550}
                src={item.img}
                width={550}
                priority
              />
            </ComponentTransition>
          ))}
        </motion.div>

        {/* <ImgScale /> */}
      </div>
    </div>
  );
};

export default Hero;
