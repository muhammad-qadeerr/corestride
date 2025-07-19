import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <WiDayCloudy size={50} />
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Custom Software Development
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
          Tailored Solutions for Your Business!
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
          We build custom software solutions that perfectly align with your business needs, 
          driving efficiency and growth through innovative technology
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img1.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Web & Mobile Apps
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Modern Applications for Modern Businesses
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Create stunning web and mobile applications with cutting-edge technologies, 
          delivering exceptional user experiences across all platforms
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <div className="absolute  glowbg inset-0  left-0 "></div>
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Cloud & DevOps
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Scalable Infrastructure Solutions
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Build robust, scalable cloud infrastructure with modern DevOps practices 
          for reliable and secure software deployment.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          API Development
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Seamless Integration Solutions
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Build robust APIs and integrate third-party services to create 
          a connected software ecosystem for your business
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Data Analytics
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Transform Data into Insights!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Leverage advanced analytics and business intelligence to make data-driven 
        decisions that propel your business forward
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        AI & Machine Learning
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Intelligent Automation Solutions!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Implement AI and machine learning solutions to automate processes, 
        enhance user experiences, and unlock new business opportunities
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Enterprise Solutions
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Scalable Software for Large Organizations!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
  Build enterprise-grade software solutions that scale with your organization&apos;s 
  growth and handle complex business requirements with ease.
</p>

      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Consulting & Strategy
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
         Expert Guidance for Your Digital Journey!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Get expert consultation on technology strategy, digital transformation, 
        and software architecture to ensure your project&apos;s success
        </p>
      </ComponentTransition>
    </div>
  );
};

export default Card;
