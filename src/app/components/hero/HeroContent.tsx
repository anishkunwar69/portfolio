"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "../../components/Container";

const PORTFOLIO_IMAGES = [
  "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1772946548/Screenshot_2026-03-08_at_10.54.00_AM_d92gva.png",
  "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1772946265/Screenshot_2026-03-08_at_10.49.17_AM_wggrq6.png",
  "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1772952924/Screenshot_2026-03-08_at_12.39.46_PM_edzcnr.png",
];

const HeroProjectShowcase = ({ images }: { images: string[] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number, stopAuto = false) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollWidth = container.clientWidth;
    container.scrollTo({
      left: scrollWidth * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
    if (stopAuto) setAutoPlay(false);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const { scrollLeft, clientWidth } = container;
      setActiveSlide(Math.round(scrollLeft / clientWidth));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const nextSlide = (prev + 1) % images.length;
        scrollToSlide(nextSlide, false);
        return nextSlide;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, images.length, scrollToSlide]);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-20 md:mb-32 relative flex-row items-center justify-center gap-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium tracking-wide uppercase whitespace-nowrap"
        >
          Our most recent works
        </motion.p>
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 20, rotate: -10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
          whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[45%] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-[2px] border-white/50 absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 cursor-pointer"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[1]}
              alt="Project 2"
              fill
              sizes="(max-width: 1024px) 0vw, 45vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20, rotate: 10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
          whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-[45%] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-[2px] border-white/50 absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 cursor-pointer"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[2]}
              alt="Project 3"
              fill
              sizes="(max-width: 1024px) 0vw, 45vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-[55%] lg:w-[60%] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-[3px] border-white/80 relative z-20 bg-gray-100 cursor-pointer"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[0]}
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 0vw, 60vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll-Snap Carousel (below lg) */}
      <div className="lg:hidden w-full flex flex-col items-center mt-2 sm:mt-4 mb-18 sm:mb-20 md:mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide uppercase mb-3 px-4"
        >
          Our most recent works
        </motion.p>

        <div
          ref={scrollRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingInline: "1rem",
            scrollPaddingInline: "1rem",
          }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="flex-none w-[calc(100%-2rem)] sm:w-[70%] md:w-[60%] snap-start aspect-[16/10] rounded-xl overflow-hidden border-[2px] border-white/60 bg-gray-100"
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Project ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 60vw"
                  className="select-none object-cover object-top"
                  draggable={false}
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */} 
        <div className="flex items-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx, true)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? "w-5 h-1.5 bg-blue-600"
                  : "w-1.5 h-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function HeroContent() {
  const words = useMemo(
    () => ["7 days", "2 weeks", "record time", "with confidence"],
    [],
  );
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => setIsScrolled(window.scrollY > 50));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      isTyping ? 120 : currentText.length === word.length ? 1500 : 50,
    );

    return () => clearTimeout(typeTimer);
  }, [currentText, isTyping, currentIndex, words]);

  const navItems = useMemo(
    () => [
      { name: "Testimonials", href: "#testimonials" },
      { name: "Our Works", href: "#portfolio" },
      { name: "FAQs", href: "#faqs" },
    ],
    [],
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <section className="relative flex flex-col items-center w-full h-auto lg:min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 border-b border-gray-200">
      {/* Background Elements */}

      {/* Navbar implementation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "mt-2 sm:mt-4 mx-4 sm:mx-6 lg:mx-auto max-w-4xl px-6 sm:px-8 bg-white/80 backdrop-blur-md rounded-sm border border-gray-200 shadow-sm py-4"
              : "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-transparent border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-serif text-xl sm:text-2xl text-gray-900 leading-none"
            >
              <span className="text-blue-600">AK</span> Studio
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="https://cal.com/anish-kunwar-7lyj6e/quick-consultation"
                target="_blank"
                className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-sm text-sm font-medium transition-colors shadow-md shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-sm shadow-xl border border-gray-100 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-gray-700 font-medium py-2 px-2 hover:bg-gray-50 rounded-sm"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://cal.com/anish-kunwar-7lyj6e/quick-consultation"
                target="_blank"
                onClick={closeMenu}
                className="bg-blue-600 text-white text-center py-3 rounded-sm font-medium mt-2 shadow-md shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center lg:flex-1 mt-8 sm:mt-10 w-full mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[8.5vw] sm:text-[7.5vw] md:text-6xl lg:text-7xl xl:text-[5rem] font-serif text-gray-900 leading-[1.1] mb-6 max-w-5xl px-0 tracking-tight whitespace-nowrap md:whitespace-normal"
        >
          We build <span className="text-blue-600">high-converting</span>
          <br className="block" /> Websites & MVPs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-[90%] sm:max-w-2xl lg:max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12"
        >
          We help founders & businesses launch fast, sell better, and grow
          online — with high converting websites and MVPs, built in weeks, not
          months. From idea to live product that drives real business results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 mb-4 sm:mb-6 lg:mb-8 max-sm:mt-4"
        >
          <Link
            href="https://cal.com/anish-kunwar-7lyj6e/quick-consultation"
            target="_blank"
            className="w-full sm:w-auto px-8 lg:px-10 py-3.5 lg:py-4 bg-blue-600 text-white rounded-none text-sm lg:text-base font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Building
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 lg:px-10 py-3.5 lg:py-4 bg-white text-gray-700 border border-gray-200 rounded-none text-sm lg:text-base font-medium hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
          View Our Works
          </Link>
        </motion.div>
      </Container>

      {/* Project Showcase */}
      <div className="w-full px-0 sm:px-4 md:px-6 lg:px-8 mt-0 sm:mt-2 lg:mt-6 mb-0 max-w-full sm:max-w-[95%] md:max-w-[1400px] lg:max-w-[1500px] xl:max-w-[1600px] mx-auto">
        <HeroProjectShowcase images={PORTFOLIO_IMAGES} />
      </div>
    </section>
  );
}

export default HeroContent;
