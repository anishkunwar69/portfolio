"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const floatingElements = useRef<HTMLDivElement>(null);

  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElements.current) return;

      const elements =
        floatingElements.current.querySelectorAll(".floating-element");
      elements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute("data-speed") || "0.05");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/anishkunwar",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      url: "https://linkedin.com/in/anishkunwar",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      url: "https://twitter.com/anishkunwar",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com/anishkunwar",
    },
  ];

  return (
    <div className="py-17 md:py-25">
      <div
        ref={floatingElements}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="floating-element" data-speed="0.03">
          <div className="absolute top-20 left-10 w-16 h-16 bg-[var(--color-primary)] opacity-10 rounded-full blur-lg"></div>
        </div>
        <div className="floating-element" data-speed="0.05">
          <div className="absolute top-40 right-20 w-24 h-24 bg-[var(--color-tertiary)] opacity-10 rounded-full blur-lg"></div>
        </div>
        <div className="floating-element" data-speed="0.02">
          <div className="absolute bottom-20 left-[20%] w-20 h-20 bg-[var(--color-primary)] opacity-10 rounded-full blur-lg"></div>
        </div>
        <div className="floating-element" data-speed="0.06">
          <div className="absolute bottom-40 right-[30%] w-12 h-12 bg-[var(--color-tertiary)] opacity-10 rounded-full blur-lg"></div>
        </div>

        <div className="floating-element" data-speed="0.01">
          <div className="absolute top-1/4 left-[5%] text-3xl text-[var(--color-primary)] opacity-10 font-bold hidden lg:block">
            {"{"}
          </div>
        </div>
        <div className="floating-element" data-speed="0.01">
          <div className="absolute bottom-1/4 right-[5%] text-3xl text-[var(--color-primary)] opacity-10 font-bold hidden lg:block">
            {"}"}
          </div>
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16 relative z-10">
        <div className="inline-block mb-3 px-4 py-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full text-sm font-semibold tracking-wide uppercase">
          Let's Connect
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-[var(--color-tertiary)] mb-6 max-w-3xl mx-auto leading-tight">
          Ready to{" "}
          <span className="text-[var(--color-primary)]">Transform</span> Your
          Digital Presence?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 font-lato">
          Connect with me to discuss your project, schedule a consultation, or
          just say hello. Let's create something amazing together.
        </p>
      </div>

      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-[40%] flex">
            <div className="bg-gradient-to-br from-[var(--color-tertiary)] to-[var(--color-primary)] rounded-2xl overflow-hidden shadow-xl w-full flex flex-col justify-between">
              <div className="relative p-12 md:p-14 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>

                <h3 className="text-2xl font-bold font-montserrat text-white mb-6 relative z-10">
                  Contact Information
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1">
                        Email Me
                      </div>
                      <a
                        href="mailto:hello@anishkunwar.com"
                        className="text-white font-medium hover:underline transition-all"
                      >
                        hello@anishkunwar.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1">
                        Call Me
                      </div>
                      <a
                        href="tel:+9779800000000"
                        className="text-white font-medium hover:underline transition-all"
                      >
                        +977 9800000000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1">
                        Location
                      </div>
                      <p className="text-white font-medium">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20 relative z-10">
                  <h4 className="text-white font-medium mb-6">
                    Connect With Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <div
                          className={`h-12 w-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${
                            hoveredSocial === social.name
                              ? "bg-white transform -translate-y-2 shadow-lg"
                              : ""
                          }`}
                        >
                          <div
                            className={`text-white transition-colors duration-300 ${
                              hoveredSocial === social.name
                                ? "text-[var(--color-primary)]"
                                : ""
                            }`}
                          >
                            {social.icon}
                          </div>
                        </div>
                        {hoveredSocial === social.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-lg text-xs font-medium text-gray-700 whitespace-nowrap"
                          >
                            {social.name}
                          </motion.div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] relative flex">
            <div className="bg-white/90 rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8 w-full">
              <h3 className="font-montserrat font-bold text-xl text-[var(--color-tertiary)] mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-gradient-to-r from-[var(--color-tertiary)] to-[var(--color-primary)] text-white font-montserrat font-semibold rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-tertiary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>

                    {submitStatus && (
                      <div
                        className={`mt-4 p-3 rounded-lg ${
                          submitStatus === "success"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {submitStatus === "success"
                          ? "Your message has been sent successfully! I will get back to you soon."
                          : "There was an error sending your message. Please try again."}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
