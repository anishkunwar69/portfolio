import ContactContent from "../components/contact/ContactContent";
import Container from "../components/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-secondary)]"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 border-b-4 border-[var(--color-primary)] opacity-20 rounded"></div>

      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-5"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[var(--color-primary)] opacity-5"></div>
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 rounded-full bg-[var(--color-tertiary)] opacity-5"></div>
      <div className="hidden md:block absolute top-1/3 left-10 w-20 h-20 transform rotate-45 bg-[var(--color-primary)] opacity-10"></div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary)] opacity-5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/2 -left-20 w-60 h-60 bg-[var(--color-tertiary)] opacity-5 rounded-full blur-xl"></div>

      <div className="absolute -left-4 top-32 text-6xl text-[var(--color-primary)] opacity-10 font-bold hidden lg:block">
        &lt;
      </div>
      <div className="absolute -right-4 bottom-32 text-6xl text-[var(--color-primary)] opacity-10 font-bold hidden lg:block">
        /&gt;
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

      <Container>
        <ContactContent />
      </Container>
    </section>
  );
}

export default Contact;
