"use client";
import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Pricing details for message generation
const pricingDetails = {
  Starter: {
    price: "$1K-$2K",
    duration: "2-4 weeks",
    description: "Small projects, website redesign, API integration"
  },
  Pro: {
    price: "$5K-$10K",
    duration: "8-12 weeks",
    description: "Custom web apps, mobile apps, AI features"
  },
  Enterprise: {
    price: "$11K-$20K+",
    duration: "12-24 weeks",
    description: "Full-scale solutions, DevOps, ongoing support"
  }
};

const ContactForm = () => {
  const formRef = useRef(null);
  const messageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  
  // Get plan from URL params and populate message
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const selectedPlan = params.get("plan");

      // Generate message when plan is selected
      if (selectedPlan && messageRef.current && pricingDetails[selectedPlan]) {
        const plan = pricingDetails[selectedPlan];
        const message = `Hi,

I'm interested in the ${selectedPlan} plan and would like to discuss this further.

Plan Details:
- Plan: ${selectedPlan}
- Price Range: ${plan.price} (negotiable based on project scope)
- Timeline: ${plan.duration}
- Description: ${plan.description}

I understand that pricing is negotiable based on project requirements and scope. I would like to discuss how this plan can help meet my project requirements and explore the pricing options that work best for my budget.

Looking forward to hearing from you!`;
        
        messageRef.current.value = message;
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars missing");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatusMessage("Thanks! Your message has been sent.");
      formRef.current?.reset();
    } catch (err) {
      const detail = err?.text || err?.message || "Unknown error";
      setStatusMessage(`Sorry, something went wrong. Please try again. ${detail}`);
      console.error("EmailJS error:", detail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-col flex-grow gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="w-full py-2 px-3 dark:bg-neutral-900 bg-neutral-200 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-800"
            type="text"
            placeholder="Name"
            name="from_name"
            required
          />
          <input
            className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 dark:border-neutral-700 focus:outline-none"
            type="email"
            placeholder="Email"
            name="from_email"
            required
          />
        </div>
        <textarea
          ref={messageRef}
          className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 focus:outline-none dark:border-neutral-700"
          rows={5}
          placeholder="Message"
          name="message"
          required
        />
        <button
          className={clsx(
            "py-2.5 bg-neutral-900 text-neutral-300 dark:bg-neutral-50 dark:text-neutral-950 flex justify-center hover:dark:bg-neutral-50 hover:bg-neutral-900 hover:scale-[101%] duration-300 transition-all"
          )}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send The Message"}
        </button>
        {statusMessage && (
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{statusMessage}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
