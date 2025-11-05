import ComponentTransition from "@/common/component/element/ComponentTransition";
import Rails from "@/common/component/element/Rails";
import React from "react";
import Feedback from "../../Feedback";
import CardOffer from "@/common/component/element/CardOffer";
import Card from "./Card";
import { FaCheckCircle, FaCode, FaServer, FaMobileAlt, FaShieldAlt, FaRocket, FaTools } from 'react-icons/fa';
import Button from "@/common/component/element/Button";
import Link from "next/link";

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Service & Expertise
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
          Custom Development / Web Apps / Mobile Apps / Cloud Solutions / AI & ML
        </p>
      </div>
      <Card />

      {/* Who We Work With Section */}
      <div className="py-20">
        <ComponentTransition className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text text-transparent">
            Who We Work With
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
            We partner with businesses across various industries to deliver exceptional digital solutions.
          </p>
        </ComponentTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Startups",
              description: "Helping innovative startups turn their ideas into scalable digital products."
            },
            {
              title: "SMEs",
              description: "Empowering small and medium businesses with custom technology solutions."
            },
            {
              title: "Enterprises",
              description: "Delivering enterprise-grade solutions for complex business challenges."
            },
            {
              title: "E-commerce",
              description: "Building high-performance online stores and marketplaces."
            },
            {
              title: "Healthcare",
              description: "Creating secure and compliant healthcare technology solutions."
            },
            {
              title: "Fintech",
              description: "Developing innovative financial technology applications and platforms."
            }
          ].map((item, index) => (
            <ComponentTransition
              key={index}
              delay={index * 0.1}
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-white">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{item.description}</p>
              </div>
            </ComponentTransition>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <ComponentTransition>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto"
            >
              <Button
                title="Get a Quote"
                className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full sm:w-auto px-8 py-4 text-lg"
              />
            </Link>
          </div>
        </ComponentTransition>
      </div>

      <Feedback className='!px-0' />
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
