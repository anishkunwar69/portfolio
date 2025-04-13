import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <Portfolio />
      <Faq />
      <Footer />
    </>
  );
}
