import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Features from "../components/Features.jsx";
import ProblemStatements from "../components/ProblemStatements.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Sponsors from "../components/Sponsors.jsx";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.jsx";
import Timeline from "../components/Timeline.jsx";
import Prizes from "../components/Prizes.jsx";

const MainPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ProblemStatements />
      <Prizes />
      <Timeline />
      {/* <Sponsors /> */}
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
    </main>
  );
};

export default MainPage;
