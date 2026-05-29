import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      <CustomCursor />

      {/* Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </div>

    </div>
  );
}

export default App;