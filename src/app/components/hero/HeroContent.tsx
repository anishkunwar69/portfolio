"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../../components/Container";

function HeroContent() {
  const words = useMemo(() => ["Websites", "MVPs", "Experiences", "Solutions"], []);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!heroInView) return;

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
  }, [currentText, isTyping, currentIndex, words, heroInView]);

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-white border-b-[1px] border-slate-200"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 2xl:w-3/8 lg:w-1/2 h-full bg-gray-50 z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-50 z-0 blur-3xl opacity-60"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-50 z-0 blur-3xl opacity-60"
      ></motion.div>

      <Container className="flex-1 flex flex-col justify-center z-10 py-8 lg:py-12">
        <div
          ref={contentRef}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative"
        >
          <div className="relative w-full lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ height: 0 }}
              animate={contentInView ? { height: "6rem" } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden lg:block absolute -left-4 top-0 w-1 h-24 bg-blue-500"
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm uppercase tracking-wider text-gray-500 mb-2"
            >
              Web Developer & Designer
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 leading-tight"
            >
              I&apos;m <span className="font-medium">Anish</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:h-14 2xl:h-16 h-10 mb-4 md:mb-6"
            >
              <div className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-light relative overflow-hidden h-full">
                <span>I create captivating </span>
                <span className="inline-block font-serif relative whitespace-nowrap">
                  {currentText}
                  <span className="inline-block w-[2px] h-[1.2em] bg-blue-600 ml-1 align-middle animate-blink"></span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-gray-700 max-w-lg mx-auto lg:mx-0 lg:my-6 my-0"
            >
              I design and develop engaging websites that elevate your brand,
              drive conversions, and give you a competitive edge online. I also
              help startups launch faster with MVPs delivered in weeks, not
              months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 lg:mt-12 mt-8"
            >
              <Link
                href="https://www.instagram.com/anishkunwarr/"
                target="_blank"
                className="group relative px-6 py-3 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
                <span className="relative text-white">Talk with me</span>
              </Link>

              <Link
                href="#portfolio"
                className="group relative px-6 py-3 overflow-hidden border border-gray-200"
              >
                <span className="absolute inset-0 w-0 bg-gray-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative text-gray-800">View My Works</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:order-2 mt-4 lg:mt-0"
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={imageInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="absolute -top-3 -right-3 w-full h-full border-2 border-blue-500 rounded-lg"
              ></motion.div>
              <div className="absolute inset-0 shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/ojfbnh6rcoauwn2rcdk5"
                  alt="Anish"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-8 md:px-12 z-10  gap-4"
      >
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
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Portfolio
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
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroContent;
