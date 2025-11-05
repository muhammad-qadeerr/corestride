import React from 'react';
import Link from 'next/link';
import Button from '@/common/component/element/Button';
import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaRocket, 
  FaTools, 
  FaUsers,
  FaExchangeAlt,
  FaHandsHelping,
  FaChartLine
} from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiCheckCircle } from 'react-icons/fi';
import CardOffer from '@/common/component/element/CardOffer';
import ComponentTransition from '@/common/component/element/ComponentTransition';

export const metadata = {
  title: 'Distinct Offerings - Corestride Labs',
  description: 'Explore our unique and tailored solutions for your business needs',
};

const DistinctOfferings = () => {
  const offerings = [
    {
      icon: <FaCode className="w-12 h-12 text-blue-500 mb-4" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and challenges.'
    },
    {
      icon: <FaServer className="w-12 h-12 text-green-500 mb-4" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to power your business growth.'
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-purple-500 mb-4" />,
      title: 'Mobile App Development',
      description: 'Engaging mobile applications for iOS and Android platforms.'
    },
    {
      icon: <HiOutlineLightBulb className="w-12 h-12 text-yellow-500 mb-4" />,
      title: 'AI & Machine Learning',
      description: 'Leverage the power of AI to gain insights and automate processes.'
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-red-500 mb-4" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: <FaTools className="w-12 h-12 text-pink-500 mb-4" />,
      title: 'IT Consulting',
      description: 'Expert guidance to align technology with your business goals.'
    }
  ];

  const whyChooseUs = [
    'Proven track record of successful projects',
    'Experienced and certified professionals',
    'Customer-centric approach',
    'Agile development methodology',
    '24/7 support and maintenance',
    'Competitive pricing models'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <ComponentTransition className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text text-transparent">
            Distinct Offerings
          </h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto mb-10">
            Discover our comprehensive range of services tailored to meet your unique business needs and drive growth.
          </p>
           <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto"
            >
              <Button
                title="Get Started"
                className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full sm:w-auto px-8 py-4 text-lg"
              />
            </Link>
          </div>
        </ComponentTransition>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <ComponentTransition className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-white to-[#8f8f8f] text-transparent">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </ComponentTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <ComponentTransition 
                key={index}
                delay={index * 0.1}
                className="flex items-start space-x-3 p-6 bg-neutral-900/80 hover:bg-neutral-800/80 rounded-xl transition-colors duration-300 border border-neutral-800/50"
              >
                <FiCheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-neutral-300">{item}</p>
              </ComponentTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <ComponentTransition className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-white to-[#8f8f8f] text-transparent">
              Partner With Us
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Join our network of partners and unlock new opportunities for growth and collaboration.
            </p>
          </ComponentTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SEAMLESS COLLABORATION",
                description: "Effortlessly integrate with our team and systems.",
                icon: <FaUsers className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
              },
              {
                title: "MUTUAL BENEFITS",
                description: "Gain access to shared resources and exclusive opportunities.",
                icon: <FaExchangeAlt className="w-10 h-10 text-green-500 mb-4 mx-auto" />
              },
              {
                title: "COMPREHENSIVE SUPPORT",
                description: "Receive thorough assistance and expertise every step of the way.",
                icon: <FaHandsHelping className="w-10 h-10 text-purple-500 mb-4 mx-auto" />
              },
              {
                title: "GROWTH OPPORTUNITIES",
                description: "Expand your business potential through our partnership network.",
                icon: <FaRocket className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />
              }
            ].map((item, index) => (
              <ComponentTransition 
                key={index}
                delay={index * 0.1}
                className="p-8 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors duration-300 border border-neutral-800/50"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
              </ComponentTransition>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <CardOffer title="Ready to Transform Your Business?" />
      </section>
    </div>
  );
};

export default DistinctOfferings;
