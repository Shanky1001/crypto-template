import About from "../../components/about/About";
import Facts from "../../components/facts/Facts";
import Faq from "../../components/faq/Faq";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import RoadMap from "../../components/roadmap/RoadMap";
import Services from "../../components/services/Services";

function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Facts />
      <Features />
      <Services />
      <RoadMap />
      <Faq />
    </main>
  );
}

export default Home;
