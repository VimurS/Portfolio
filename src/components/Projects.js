import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../media/covns.jpg';
import secondImage from '../media/nsitlogo.jpg';
import thirdImage from '../media/VerB.jpg';
import "../components/Projects.css";
import {
  FaLock, FaLink
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='Project'>  
      <div className='projectMain' id='Project'>
        <h2 data-aos="fade-down ease-in" data-aos-duration="2000" >SELECTED WORKS</h2>
        <Carousel className='caro' data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
          <Carousel.Item className='caroItem'>
            <img className="d-block w-100 caroImg" src={firstImage} alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
            <div className='carosText'>
              <p>Covns is an inhouse web product of <a href="https://www.instagram.com/xyzspace.in/" target="_blank" className="aboutTexts">XYZspace.in</a> developed for a dairy startup based out of Coimbatore</p>
            </div>
            <a href="https://vimurs.github.io/Covns/" target='_blank' className="caroLink">
              <FaLink />
            </a>
          </Carousel.Item>
          <Carousel.Item className='caroItem'>
            <img className="d-block w-100 caroImg" src={secondImage} alt="Second slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
            <div className='carosText'>
              <p><a href="https://5elements.digital/" target="_blank" className="aboutTexts">5elements.digital</a> is a GenAI powered Knowledge Engineering SaaS Platform developed under (NDA)</p>
              {/* <span>ROLE: Software Engineer</span><br />
              <span>PROJECT: 5 Elements</span><br /> */}
            </div>
            <a  href="mailto:svimur7@gmail.com?subject=Hi%20,%20I%20Want%20to%20enquire%20about%20the%205%20elements%20project" className="caroLink">
              <FaLink />
            </a>
          </Carousel.Item>
          <Carousel.Item className='caroItem'>
            <img className="d-block w-100 caroImg" src={thirdImage} alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
            <div className='carosText'>
              <p>VerB Health is a prototype Hospital Management System web app developed for fun and learning with a team of 3</p>
            </div>
            <a href="https://github.com/VimurS/VerbHealth" target='_blank' className="caroLink">
              <FaLink />
            </a>
          </Carousel.Item>
        </Carousel>
      </div> 
    </div>
  );
};


export default Projects;
