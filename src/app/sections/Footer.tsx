import FooterContent from "../components/footer/FooterContent";

function Footer() {
  return (
    <section
      id="footer"
      className="relative overflow-hidden bg-blue-600 text-white"
    >

      <div className="relative z-10">
        <FooterContent />
      </div>
    </section>
  );
}

export default Footer;