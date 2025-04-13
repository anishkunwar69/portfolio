import Container from "../components/Container";
import PortfolioContent from "../components/portfolio/PortfolioContent";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center border-b-[1px] border-slate-200 max-lg:pl-4"
    >
      <div className="absolute top-0 left-0 2xl:w-3/8 lg:w-1/2 h-full bg-gray-50 z-0"></div>

      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-50 z-0 blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-50 z-0 blur-3xl opacity-60"></div>

      <Container className="relative z-10">
        <PortfolioContent />
      </Container>
    </section>
  );
}

export default Portfolio;
