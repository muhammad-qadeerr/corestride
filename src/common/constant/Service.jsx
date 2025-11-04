import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "What services does CoreStride Labs offer?",
    desc: "CoreStride Labs provides comprehensive software development services including custom software development, web and mobile applications, cloud infrastructure & DevOps, API development & integration, data analytics & business intelligence, and AI & machine learning solutions. We offer end-to-end solutions tailored to your business needs.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How long does a typical software development project take?",
    desc: "Project timelines vary based on complexity, scope, and requirements. A simple web application might take 2-4 months, while enterprise-level solutions can take 6-12 months or longer. We provide detailed project timelines during our initial consultation and break down projects into manageable phases with clear milestones.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Do you provide ongoing support and maintenance after project completion?",
    desc: "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We offer flexible maintenance packages to ensure your software remains up-to-date and performs optimally.",
  },
  {
    icon: (
      <FaPager
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What technologies and frameworks do you use?",
    desc: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Java, .NET, Flutter, React Native, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks. We choose the best technology stack based on your project requirements, scalability needs, and business objectives.",
  },
  {
    icon: (
      <FaPiedPiper
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How do you ensure the security and quality of the software you develop?",
    desc: "Security and quality are top priorities. We follow industry best practices including secure coding standards, regular security audits, automated testing (unit, integration, e2e), code reviews, and compliance with relevant standards (GDPR, SOC 2, etc.). We also conduct thorough QA testing and provide detailed documentation for all deliverables.",
  },
];

export const ServiceItem = [
  {
    title: 'Custom Software Development',
    desc: 'Tailored software solutions designed to meet your specific business requirements and drive operational efficiency',
    icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Web & Mobile Applications',
    desc: 'Modern, responsive web applications and mobile apps built with cutting-edge technologies for optimal user experience.',
    icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Scalable cloud solutions and DevOps practices to ensure reliable, secure, and efficient software deployment',
    icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'API Development & Integration',
    desc: 'Robust API development and seamless third-party integrations to enhance your software ecosystem',
    icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Data Analytics & Business Intelligence',
    desc: 'Advanced analytics solutions to transform your data into actionable insights for informed decision-making',
    icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'AI & Machine Learning Solutions',
    desc: 'Intelligent automation and AI-powered features to streamline processes and unlock new business opportunities.',
    icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  },

];

