import Container from "../components/Container";
import WhoWeWorkWithContent from "../components/whoWeWorkWith/WhoWeWorkWithContent";

function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center border-b-[1px] border-slate-200">
      <Container>
        <WhoWeWorkWithContent />
      </Container>
    </section>
  );
}

export default WhoWeWorkWith; 