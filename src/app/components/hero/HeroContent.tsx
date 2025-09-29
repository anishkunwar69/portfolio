"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Container from "../../components/Container";

function HeroContent() {
  const d = new Date();
  let month = d.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = d.getFullYear();
  const words = useMemo(
    () => ["7 days", "2 weeks", "record time", "with confidence"],
    []
  );
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const word = words[currentIndex];

    const typeTimer = setTimeout(
      () => {
        if (isTyping) {
          if (currentText.length < word.length) {
            setCurrentText(word.substring(0, currentText.length + 1));
          } else {
            setIsTyping(false);
            return;
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            setIsTyping(true);
            setCurrentIndex((prev) => (prev + 1) % words.length);
            return;
          }
        }
      },
      isTyping ? 120 : currentText.length === word.length ? 1500 : 50
    );

    return () => clearTimeout(typeTimer);
  }, [currentText, isTyping, currentIndex, words]);

  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-white border-b-[1px] border-slate-200">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-50 z-0"></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-50 z-0 blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-50 z-0 blur-3xl opacity-60"></div>

      <Container className="flex-1 flex flex-col justify-center z-10 py-16 xl:py-12">
        <style jsx>{`
          @media (min-width: 1230px) {
            .hero-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 3rem;
              align-items: center;
            }
            .hero-content {
              order: 1;
              text-align: left;
            }
            .hero-content .left-bar {
              display: block;
            }
            .hero-content .hero-paragraph {
              margin-left: 0;
              margin-right: 0;
              margin-top: 1rem;
              margin-bottom: 1rem;
            }
            .hero-content .button-group {
              justify-content: flex-start;
              margin-top: 2rem;
            }
            .hero-image {
              order: 2;
              margin-top: 0;
            }
            .hero-image .image-container {
              max-width: none;
            }
          }
        `}</style>

        <div className="hero-container flex flex-col gap-8 md:gap-12 items-center relative">
          <div className="hero-content relative w-full text-center">
            <div className="left-bar hidden absolute -left-4 top-0 w-1 h-24 bg-blue-500"></div>
            <h2 className="text-sm uppercase tracking-wider text-blue-600 mb-1 font-medium">
              Web Development Agency
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-serif mb-3 leading-tight">
              We build <span className="font-medium">high-converting</span>{" "}
              Websites & MVPs
            </h1>

            <div className="h-10 mb-2 md:mb-3 md:h-12 2xl:h-14">
              <div className="text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light relative overflow-hidden h-full 2xl:mt-6 mt-4">
                <span>Launch your business in </span>
                <span className="inline-block font-serif relative whitespace-nowrap">
                  {currentText}
                  <span className="inline-block w-[2px] h-[1.2em] bg-blue-600 ml-1 align-middle animate-blink"></span>
                </span>
              </div>
            </div>

            <p className="hero-paragraph text-gray-700 max-w-lg mx-auto my-0 max-sm:text-sm">
              We help founders & creators launch fast, sell better, and grow
              online — with high-converting websites and MVPs, built in weeks,
              not months. From idea to live product that drives real business
              results.
            </p>

            <div className="button-group flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
              <Link
                href="https://www.instagram.com/anishkunwar_21/"
                target="_blank"
                className="group relative sm:px-6 sm:py-3 px-4 py-2 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
                <span className="relative text-white">
                  Book a Free Discovery Call
                </span>
              </Link>

              <Link
                href="#portfolio"
                className="group relative sm:px-6 sm:py-3 px-4 py-2 overflow-hidden border border-gray-200"
              >
                <span className="absolute inset-0 w-0 bg-gray-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative text-gray-800">
                  See How We Help Founders
                </span>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-500 max-sm:text-xs">
              <p>
                Limited slots available for {months[month]}, {year} — Book now
                to secure your project
              </p>
            </div>
          </div>

          <div className="hero-image w-full max-sm:mt-2 sm:-mt-[6px]">
            <div className="image-container relative w-full aspect-[1/1] max-w-sm sm:max-w-md mx-auto">
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-blue-500 rounded-lg"></div>
              <div className="absolute inset-0 shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dmq5tx0bd/image/upload/v1751122048/ChatGPT_Image_Jun_28_2025_08_31_19_PM_b6ghjp.png"
                  alt="Anish"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-8 md:px-12 z-10 border-t-[1px] border-slate-200 gap-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Link
            href="#testimonials"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#services"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#portfolio"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Our Works
          </Link>
          <Link
            href="#faqs"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            FAQs
          </Link>
        </div>

        <div className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
          <span>See More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
