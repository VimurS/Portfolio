import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./About.css";
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
import arrow from '../media/arrowline.png';


function About() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{backgroundColor:"black"}}>
          <div className="scrollings-container">
        <h1 className="scrollings-text"> I AM BATMAN</h1>
      </div>
   <div id="About" className="AboutMain">
   <span className="about" data-aos="fade-in ease-in" data-aos-duration="2000" >ABOUT</span>
   <span className="aboutText" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
  I've gained extensive experience in Product Design and Development through collabs with diverse organizations, from startups to MNC's.Currently, I'm also working on my clothing line, <a href="" className="aboutTexts">CRISP</a>, aiming to revolutionize men's fashion.<br></br><br></br>
  In 2023, I Started <a href="https://www.instagram.com/xyzspace.in/" target="_blank" className="aboutTexts">XYZspace.in</a>, a platform offering comprehensive digital design solutions and soon venturing into the tech space.<br></br><br></br>
  I love exploring new destinations with friends, and I share those experiences on our social handle, <a href="https://www.instagram.com/streetdogsz/" target="_blank" className="aboutTexts">street dogsz</a> I enjoy engaging with people and their stories, finding comfort in late-night conversations over tea or coffee.<br></br><br></br>
  By day, I am just another face in the crowd, seamlessly blending into the hustle and bustle of everyday life. But when the sun sets and darkness envelops the city, something within me awakens—a call to a higher purpose, a drive to seek justice and protect those who cannot protect themselves.<br></br><br></br>
  In this twilight world, I find my true self. The line between myth and reality blurs, and I embrace the legend I have become. I am the protector, the watchful eye, the silent guardian.<br></br><br></br>
  <a href="" className="aboutTextss">I am Batman</a>
</span>


   </div>
   <img className="arrowImg" src={arrow}></img>
    </div>
  );
}

export default About;
