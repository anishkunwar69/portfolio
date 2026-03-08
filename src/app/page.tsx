import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import WhoWeWorkWith from "./sections/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/* <Services /> */}
      <WhoWeWorkWith />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
