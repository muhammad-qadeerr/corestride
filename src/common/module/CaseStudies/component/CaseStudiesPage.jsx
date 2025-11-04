import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import React from "react";
import Feedback from "../../Feedback";
import { CaseStudiesAllItem } from "@/common/constant/CardItem";
import CardOffer from "@/common/component/element/CardOffer";

export default function CaseStudiesPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
          Our Case Studies
          </h1>
          <div className=" absolute w-[80%] h-[250px] z-[-99] top-[-70px]">
            <Rails />
            <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
        Real-world success stories showcasing how our solutions transform businesses and drive results.
        </p>
      </div>
      
      <div className="py-10 mt-20 space-y-20">
        {CaseStudiesAllItem?.map((item, index) => (
          <ComponentTransition
            className="w-full bg-neutral-100 dark:bg-neutral-950/50 border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl overflow-hidden"
            key={index}
            delay={index * 0.1}
          >
                         <div className="flex flex-col lg:flex-row">
               {/* Left Side - Screenshot */}
               <div className="lg:w-1/2 p-8">
                 <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden">
                   <div className="bg-neutral-200 dark:bg-neutral-800 p-3 flex items-center space-x-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <Image
                     src={item.img}
                     alt={`${item.title} Screenshot`}
                     width={600}
                     height={400}
                     loading="lazy"
                     className="w-full h-[400px] object-cover"
                   />
                 </div>
               </div>
               
               {/* Right Side - Content */}
               <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                 {/* Website Name - Aligned with image */}
                 <div className="mb-6">
                   <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                     {item.logo}
                   </h2>
                 </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-base text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  {item.content}
                </p>
                
                                 {/* Technologies */}
                 <div className="flex flex-wrap gap-2 mb-4">
                   {item.technologies?.map((tech, techIndex) => (
                     <span
                       key={techIndex}
                       className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full text-sm font-medium"
                     >
                       {tech}
                     </span>
                   ))}
                 </div>
                 
                 {/* View in Detail Link */}
                 <div className="mb-4">
                 <a
                    href={`/case-studies/${item.slug}`}
                    className="text-white underline underline-offset-4 decoration-2 decoration-neutral-500 hover:decoration-white transition-colors"
                  >
                     View in Detail
                   </a>
                 </div>
              </div>
            </div>
          </ComponentTransition>
        ))}
      </div>
      
      <div className="w-full mt-32">
      <Feedback className='!px-0' />
      </div>
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}