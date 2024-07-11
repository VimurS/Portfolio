import React, { useEffect } from "react";
import Contact from '../components/Contact';
import Navbar from '../components/Navbars';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import AOS from "aos";
import "aos/dist/aos.css";
// import "./AllPges.css";

function AllPages() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='allPage'>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default AllPages;
