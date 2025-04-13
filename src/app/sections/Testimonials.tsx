import Container from "../components/Container";
import TestimonialContent from "../components/testimonials/TestimonialContent";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center border-b-[1px] border-slate-200 max-lg:pl-4"
    >
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-50 z-0 blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-50 z-0 blur-3xl opacity-60"></div>

      <Container className="relative z-10">
        <TestimonialContent />
      </Container>
    </section>
  );
}

export default Testimonials;
