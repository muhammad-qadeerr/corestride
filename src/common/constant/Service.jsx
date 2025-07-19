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
    title: "Is there a free trial available?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I change my plan later?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What is your cancellation policy?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
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

