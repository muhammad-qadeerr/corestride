import ComponentTransition from '@/common/component/element/ComponentTransition'
import PricingCard from '@/common/component/element/PricingCard'
import SectionHeading from '@/common/component/element/SectionHeading'
import React from 'react'
import { AiFillSliders } from 'react-icons/ai'

export default function Pricing() {
  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
    <ComponentTransition className="flex justify-center py-5">
      <SectionHeading title="Our Pricing" icon={<AiFillSliders size={30} />} />
    </ComponentTransition>
    <ComponentTransition
      delay={0.1}
      className="flex justify-center items-center flex-col"
    >
      <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
      Choose Your Plan
      </h1>
      <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
      Select the plan that best fits your needs.
      </p>
    </ComponentTransition>

      <PricingCard />

      <ComponentTransition delay={0.2} className="flex justify-center items-center mt-8">
        <p className="text-base md:text-lg text-center text-neutral-600 dark:text-neutral-400 italic">
          * All pricing is negotiable based on project requirements and scope. Contact us to discuss your specific needs.
        </p>
      </ComponentTransition>
  </div>
  )
}
