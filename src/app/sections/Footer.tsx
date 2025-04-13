import FooterContent from "../components/footer/FooterContent";

function Footer() {
  return (
    <section
      id="footer"
      className="relative overflow-hidden bg-blue-600 text-white"
    >
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 z-0 blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-500 z-0 blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <FooterContent />
      </div>
    </section>
  );
}

export default Footer;
