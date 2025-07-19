import Image from "@/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import OurTeam from "./OurTeam";

const CardAbout = () => {
  return (
    <div className="py-10 w-full flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] top-[100px] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition delay={0.1} className="w-full h-[20%]  md:basis-[60%] overflow-hidden rounded-3xl">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1637836375461-197de8876f90?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={400}
          height={400}
          priority
          className="w-full h-auto object-cover rounded-3xl"
          />
          </div>
        <div className="mt-5 py-5 gap-5 h-full ">
          <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <FaBullseye size={50} />
            <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Mission
            </h1>
            <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
  At CoreStride Labs, our mission is to revolutionize the software development
  landscape by delivering innovative, custom solutions that empower businesses
  to achieve their full potential. We strive to create cutting-edge, scalable
  software that solves complex challenges, enabling organizations to thrive
  in the digital age. With a commitment to excellence and technological
  innovation, we aim to be the trusted partner behind our clients&apos; digital
  transformation and success.
</p>

          </div>
        </div>
      </ComponentTransition>
      <ComponentTransition delay={0.1} className=" py-5 md:basis-[35%] gap-5 h-full ">
        <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <TbDeviceVisionPro size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Vision
          </h1>
          <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
            CoreStride Labs envisions a future where technology seamlessly empowers
            businesses to achieve unprecedented growth and innovation. We aim to be
            the leading force in creating adaptable, cutting-edge software solutions
            that drive enterprises towards digital excellence. We envision a world
            where our innovative development services and technological expertise
            revolutionize how organizations operate, enabling them to flourish and
            maintain competitive advantage in an ever-evolving digital landscape.
          </p>
        </div>
        <div className="w-full overflow-hidden h-full mt-10  bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <div className="w-full h-[380px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1637792566284-67454a001370?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={400}
          height={400}
          priority
          className="w-full h-auto object-cover rounded-3xl"
          />
          </div>
        </div>
      </ComponentTransition>
      <OurTeam/>

    </div>
  );
};

export default CardAbout;
