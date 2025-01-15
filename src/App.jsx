import Bio from "./components/Bio";
import Certification from "./components/Certification";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Particles from "@/components/magicui/particles";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 h-screen bg-fixed bg-center bg-cover bg-img ">
          {/* <Meteors number={30} className="h-screen" />
          <div className="relative top-[50%]">
            <Meteors number={30} className="relative " />
          </div> */}
          <div className="relative w-full h-full ">
            <Particles
              className="absolute inset-0"
              quantity={250}
              ease={80}
              refresh
            />
            <Particles
              className="absolute inset-0 top-[50%]"
              quantity={250}
              ease={80}
              refresh
            />
          </div>
        </div>
        <div className="container relative z-10 flex flex-col items-center p-4 mx-auto space-y-8">
          <Hero />
          <NavBar />
          <Bio />
          <Education />
          <Projects />
          <WorkExperience />
          <Skills />
          <Certification/>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
