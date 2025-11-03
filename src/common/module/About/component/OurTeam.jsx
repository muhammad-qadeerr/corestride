import Image from "@/common/component/element/Image";
import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 lg:px-10 px-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Meet the Team
            </h2>
            <p className="max-w-[900px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            We&rsquo;re a team of designers, developers, and creatives who are passionate about building beautiful products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-content-center place-items-center gap-6 mt-8">
          <div className="group">
            <Image
              alt="Team member"
              className="mx-auto max-w-full aspect-[1/1] h-auto overflow-hidden rounded-full object-cover object-center sm:w-full group-hover:scale-105 transition-transform"
              height={200}
              src="/qadeer.jpeg"
              width={200}
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">Muhammad Qadeer</h3>
              <p className="text-neutral-700 dark:text-neutral-300 ">Founder/CTO</p>
            </div>
          </div>
          <div className="group">
            <Image
              alt="Team member"
              className="mx-auto aspect-[1/1] h-auto overflow-hidden rounded-full object-cover object-center sm:w-full group-hover:scale-105 transition-transform"
              height={200}
              src="/daniel.jpg"
              width={200}
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">Daniel Kibet</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}