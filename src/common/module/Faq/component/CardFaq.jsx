import ComponentTransition from "@/common/component/element/ComponentTransition";
import FaqAccordian from "@/common/component/element/FaqAccordian";
import React from "react";

const CardFaq = () => {
  return (
    <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      <FaqAccordian />
    </div>
  );
};

export default CardFaq;
