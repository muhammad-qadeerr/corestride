import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import React from "react";
import { CaseStudiesAllItem } from "@/common/constant/CardItem";
import { notFound } from "next/navigation";

export default function CaseStudyDetail({ slug }) {
  const caseStudy = CaseStudiesAllItem.find(item => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 mt-20">
        {/* Left Side - Project Details */}
        <div className="lg:w-1/2 space-y-8">
          {/* Logo and Title */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <span className="text-purple-500 font-semibold text-lg">{caseStudy.title.toLowerCase()}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {caseStudy.logo}
            </h1>
          </div>

                     {/* Challenge */}
           <div>
             <h3 className="text-gray-800 font-semibold text-lg mb-2">CHALLENGE</h3>
             <p className="text-gray-600">{caseStudy.challenge}</p>
           </div>

           {/* Solution */}
           <div>
             <h3 className="text-gray-800 font-semibold text-lg mb-2">SOLUTION</h3>
             <p className="text-gray-600">{caseStudy.solution}</p>
           </div>

           {/* Results */}
           <div>
             <h3 className="text-gray-800 font-semibold text-lg mb-3">RESULTS</h3>
             <ul className="space-y-2">
               {caseStudy.results?.map((result, index) => (
                 <li key={index} className="flex items-start gap-2">
                   <span className="text-green-600 font-bold mt-1">•</span>
                   <span className="text-gray-600">{result}</span>
                 </li>
               ))}
             </ul>
           </div>

           {/* Description */}
           <div>
             <p className="text-gray-600 text-lg leading-relaxed">
               {caseStudy.content}
             </p>
           </div>

           {/* Project Details */}
           <div className="space-y-6">
             {/* Industry */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-2">INDUSTRY</h3>
               <p className="text-gray-600">{caseStudy.industry}</p>
             </div>

             {/* Technology */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-2">TECHNOLOGY</h3>
               <p className="text-gray-600">{caseStudy.technology}</p>
             </div>

             {/* Tools & Technologies */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-3">TOOLS & TECHNOLOGIES</h3>
               <div className="flex flex-wrap gap-2">
                 {caseStudy.technologies?.map((tech, index) => (
                   <span
                     key={index}
                     className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* Services Provided */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-3">SERVICES PROVIDED</h3>
               <div className="flex flex-wrap gap-2">
                 {caseStudy.services?.map((service, index) => (
                   <span
                     key={index}
                     className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm"
                   >
                     {service}
                   </span>
                 ))}
               </div>
             </div>

             {/* Location */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-2">LOCATION</h3>
               <p className="text-gray-600">{caseStudy.location}</p>
             </div>

             {/* Available At */}
             <div>
               <h3 className="text-gray-800 font-semibold text-lg mb-2">AVAILABLE AT</h3>
               <p className="text-green-600 font-medium">{caseStudy.available}</p>
             </div>
           </div>
       </div>

        {/* Right Side - Web Page Mockups */}
        <div className="lg:w-1/2 space-y-8">
          {/* Main Page Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Header */}
            <div className="bg-gray-200 p-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Main Content */}
            <div className="p-6 bg-white">
                             {/* Navigation */}
               <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center">
                   <div className="w-6 h-6 bg-purple-500 rounded mr-2 flex items-center justify-center">
                     <span className="text-white text-xs font-bold">$</span>
                   </div>
                   <span className="text-purple-500 font-semibold">{caseStudy.title.toLowerCase()}</span>
                 </div>
                 <div className="flex space-x-4 text-sm">
                   <span>Home</span>
                   <span>Features</span>
                   <span>About</span>
                   <span>Contact</span>
                   <span>Resources</span>
                   <span>Login</span>
                   <span className="bg-purple-500 text-white px-3 py-1 rounded">Get Started</span>
                 </div>
               </div>

               {/* Hero Section */}
               <div className="flex items-center mb-8">
                 <div className="w-1/2">
                   <h2 className="text-2xl font-bold text-gray-800 mb-4">
                     {caseStudy.title} - {caseStudy.industry} Solution
                   </h2>
                   <p className="text-gray-600 mb-4">
                     {caseStudy.content.substring(0, 120)}...
                   </p>
                   <button className="bg-purple-500 text-white px-4 py-2 rounded">Learn More</button>
                 </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">📈</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-100 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-gray-800">30000+</div>
                  <div className="text-gray-600">Investors</div>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-gray-800">500+ Million</div>
                  <div className="text-gray-600">Invested</div>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-gray-600">Performance</div>
                </div>
              </div>

              {/* Who we are */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Who we are</h3>
                <p className="text-gray-600">
                  We are a group of individuals who are passionate about making a difference in the world of startups and investments.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Mockup - Two Browser Windows */}
          <div className="flex gap-4">
            {/* Left Browser Window */}
            <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gray-200 p-2 flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
                             <div className="p-4">
                 <h3 className="text-lg font-bold text-gray-800 mb-2">{caseStudy.title} Dashboard</h3>
                 <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                   <span className="text-white text-xl">📊</span>
                 </div>
                 <div className="space-y-1">
                   <div className="bg-gray-100 h-2 rounded"></div>
                   <div className="bg-gray-100 h-2 rounded w-3/4"></div>
                   <div className="bg-gray-100 h-2 rounded w-1/2"></div>
                 </div>
               </div>
            </div>

            {/* Right Browser Window */}
            <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gray-200 p-2 flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
                             <div className="p-4">
                 <h3 className="text-lg font-bold text-gray-800 mb-2">Unlock The Power Of {caseStudy.title}</h3>
                 <div className="space-y-2">
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                       <span className="text-white text-xs">$</span>
                     </div>
                     <span className="text-sm text-gray-600">{caseStudy.title.toLowerCase()}</span>
                   </div>
                   <div className="text-xs text-gray-500">{caseStudy.technologies?.length || 0}</div>
                   <div className="text-xs text-gray-500">Technologies</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentTransition>
  );
} 