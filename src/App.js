import "./App.scss";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Portfolio /> */}
        {/* <Testimonial /> */}
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
