"use client";
import Link from "next/link";
import React, { useState } from "react";

const FooterContent = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<
    null | "success" | "error"
  >(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus("success");
      setEmail("");

      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    }, 1500);
  };

  const navItems = [
    { name: "Testimonials", path: "#testimonials" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/anishkunwarr/",
      target: "_blank",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/anish-kunwar-a20b68301/",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      url: "https://twitter.com/anishkunwar69",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
        <div className="md:col-span-5">
          <div className="mb-8">
            <h2 className="text-3xl font-serif mb-4">Anish Kunwar</h2>
            <div className="w-12 h-1 bg-blue-400 mb-6"></div>
            <p className="text-blue-100 max-w-md mb-8">
              Crafting engaging digital experiences with a focus on performance,
              accessibility, and design excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors duration-300 text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm uppercase tracking-wider text-blue-200 mb-4">
              Navigation
            </h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-blue-200 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-medium mb-4">
              Subscribe to my newsletter
            </h3>
            <p className="text-blue-100 mb-6">
              Get the latest articles, resources and updates directly to your
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-36 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-all duration-300 disabled:opacity-70"
              >
                {isSubscribing ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600"
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
                    Subscribing
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            {subscribeStatus && (
              <div
                className={`mt-3 text-sm ${
                  subscribeStatus === "success"
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                {subscribeStatus === "success"
                  ? "✓ Successfully subscribed! Thank you."
                  : "× There was an error. Please try again."}
              </div>
            )}
          </div>

          <div className="mt-8">
            <Link
              href="https://www.instagram.com/anishkunwarr/"
              target="_blank"
              className="inline-flex items-center group"
            >
              <span className="mr-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium transition-transform duration-300 group-hover:-translate-y-1">
                Start a Project
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500/30 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-blue-200 mb-4 md:mb-0">
          © {new Date().getFullYear()} Anish Kunwar. All rights reserved.
        </div>

        <div className="text-xs bg-blue-700/50 px-3 py-1.5 rounded-full text-blue-100">
          Made with ❤️
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
