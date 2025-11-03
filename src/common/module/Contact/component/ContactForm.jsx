"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

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
