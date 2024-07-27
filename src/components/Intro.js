import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./Intro.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import vimur from "../media/meatcafe.jpg"

function Intro() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init();
  }, []);

  const words = [
    'ENGINEER @ NEURAL SCHEMA',
    'DESIGNER @ XYZspace',
    'ENTREPRENEUR @ CRISP',
    'CRICKETER',
    'ART & CINEMA AFICIONADO',
    'DIGITAL CONTENT CREATOR',
    'SWE @ 5Elements Digital'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 80; // milliseconds per character
  const delayBetweenWords = 4000; // milliseconds

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, delayBetweenWords);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, eraseSpeed);
      } else {
        setTyping(true);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing]);

  return (
    <>
   <div className="HomeMain">
    <span data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2000" className="NmaeSpan">
        <p className="helloPara">01 / HELLO THERE!, I AM</p>
        <p className="namePara">VIMUR SIVAKUMAR</p>
        {/* <p>SIVAKUMAR</p> */}
    </span>
    <div className="typing-container">
      <span data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" className="typing-text">
        {words[wordIndex].substring(0, charIndex)}
      </span>
    </div>

    {/* <span><img src={vimur}></img></span> */}
   </div>
   <div class="container">
        <img src={vimur} alt="me sitting in a cafe scrolling through my phone" class="meatcafe"></img>
        <img src="https://uploads-ssl.webflow.com/60b66a1b6d1ae1400be975fe/60ee0076704792afc0991790_Icon_Badge_1.svg" class="spinwheel"></img>
        <div class="text-circle">
          <span>C</span><span>O</span><span>I</span><span>M</span><span>B</span><span>A</span><span>T</span><span>O</span><span>R</span><span>E</span><span>TN</span><span style={{fontFamily:"benzin"}}>@</span>
        </div>
    </div>
  </>
  );
}

export default Intro;
