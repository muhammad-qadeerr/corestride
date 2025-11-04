"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import { ButtonSpot } from "../element/ButtonSpot";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import { useLoading } from "@/common/context/LoadingContext";
// const Logos = dynamic(() => import('./Logo'), {
//   ssr: false
// })

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { startNavigation } = useLoading();

  // Map section IDs to navigation paths
  const sectionToPathMap = {
    home: "/",
    services: "/services",
    solution: "/solution",
    blog: "/blog",
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  // Scroll-based active navigation
  useEffect(() => {
    // Only run on home page
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "services", "solution", "blog"];
    
    // Function to find the most visible section
    const findActiveSection = () => {
      let currentSection = "home";
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      let closestDistance = Infinity;

      // If we're near the top, default to home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const sectionCenter = (sectionTop + sectionBottom) / 2;

        // Check if viewport center is within this section
        if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
          // Viewport center is in this section - this is the active one
          const distance = Math.abs(viewportCenter - sectionCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = sectionId;
          }
        } else {
          // Calculate distance from viewport center to section center
          const distance = Math.abs(viewportCenter - sectionCenter);
          if (distance < closestDistance && sectionTop < windowHeight && sectionBottom > 0) {
            closestDistance = distance;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Throttle scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          findActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check after a delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      findActiveSection();
    }, 100);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm" : "",
        `w-full transition-all duration-300 mx-auto bg-[#ffffffd0] dark:bg-[#000000d0]  max-w-[1500px]  border-b-[1px] border-neutral-300 dark:border-neutral-800 py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex  z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-start"
            onClick={() => startNavigation()}
          >
            {/* <Logos /> */}
            <h1
              className={`${
                open ? "text-white" : ""
              }  text-3xl tracking-[-0.09em] font-bold`}
            >
              CoreStride Labs
            </h1>
          </Link>
        </div>
        <div className="lg:flex hidden justify-center gap-10 items-center w-full">
          {NavigationItem.map((item, index) => {
            // Determine if this nav item should be active
            const isActive =
              pathname === "/"
                ? sectionToPathMap[activeSection] === item.src
                : pathname === item.src;

            return (
              <Link
                href={item.src}
                className="group  flex justify-center gap-5 items-center  relative"
                key={index}
                onClick={() => startNavigation()}
              >
                <h1 className="text-base font-medium text-black dark:text-white line-clamp-1">
                  {item.title}
                </h1>
                <div
                  className={clsx(
                    isActive
                      ? "absolute top-[23px] h-[2px] flex items-center w-[50%]  bg-[#000] dark:bg-white  transition-transform duration-300 "
                      : "absolute top-[23px] h-[2px] w-[0%]  bg-[#000] dark:bg-white  transition-all duration-300 group-hover:w-[50%]"
                  )}
                ></div>
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden flex  items-center">
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden w-[35%] items-center justify-end">
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
          <Link href="https://calendar.app.google/vUGja5MThknGhY5A7" target="_blank" rel="noopener noreferrer">
            <ButtonSpot title="Let's Talk" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
