import Image from "@/common/component/element/Image";
import React from "react";
import ContactForm from "./ContactForm";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const CardContact = () => {
  return (
    <>
      <div className="py-10 mt-10 w-full h-auto flex gap-10 justify-center flex-row flex-wrap relative">
        <ComponentTransition delay={0.1} className="w-full md:px-10 py-5 md:basis-[40%] ">
          <h1 className="text-xl py-2 font-bold uppercase">
            We&rsquo;re Ready!
          </h1>
          <h1 className="text-4xl py2 font-bold ">Get In Touch</h1>

          <h1 className="mt-10 text-lg">Head-quarters:</h1>
          <h2 className="text-neutral-500">Lahore, Pakistan</h2>
          <h2 className="text-neutral-500">Email: muhammadqadeerr456@gmail.com</h2>
        </ComponentTransition>
        <div className="w-full h-auto md:h-[300px] md:basis-[55%] ">
          <ContactForm />
        </div>

        <ComponentTransition delay={0.2} className="w-full h-auto overflow-hidden rounded-3xl  md:basis-[47%] ">
        <iframe
          src="https://www.google.com/maps?q=Lahore,+Pakistan&hl=en&z=12&output=embed"
          width="100%"
          height="100%"
          className="border-none h-[350px] px-0 rounded-3xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </ComponentTransition>
        <ComponentTransition delay={0.3} className="w-full h-[350px] overflow-hidden rounded-3xl  md:basis-[47%]">
          <Image 
          src="https://images.unsplash.com/photo-1653745289778-bacf6d8a96e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover scale-110"
          />
        </ComponentTransition>
      </div>
    </>
  );
};

export default CardContact;
