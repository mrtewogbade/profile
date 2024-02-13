import Navbar from "./components/Navbar"
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Docs from "./components/Docs";


function App(){
  return (
    <div>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Docs />

      <Experience />
      <Contact />



      <SocialLinks />
    </div>
  );
}

export default App
