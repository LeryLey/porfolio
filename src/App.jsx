import Navbar from "./components/Navbar";
import About from "/src/Pages/About/About";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/projects/Project";
const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* main  */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
