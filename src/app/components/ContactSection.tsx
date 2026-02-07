"use client";

import emailjs from "@emailjs/browser";
import type React from "react";
import { useRef } from "react";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
        formRef.current,
        String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        () => toast.error("Failed to send message 😢"),
      );
  };

  return (
    <section>
      <h2 className="title-halo text-3xl mb-10">Contact</h2>

      <form ref={formRef} onSubmit={sendEmail} className="max-w-xl space-y-6">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none resize-none"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-lg border border-purple-500/50 text-purple-400
              hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]
              transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
