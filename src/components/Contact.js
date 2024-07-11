import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./Contact.css";
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

function Contact() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div id="ContactPage"></div>
      <div  className="ContactsPageBG">
        <div style={{ textAlign: "center" }}>
          <h3 data-aos="fade-down ease-in" className="ContactHead">
            LET'S CONNECT!
          </h3>
        </div>

        <div className="ContactPage">
          <div className="ConSep">
            <div data-aos="fade-left" data-aos-easing="linear" className="ConContainer">
              <p
                className="contactText contactText11"
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  color: "lime",
                  paddingTop: "5%",
                }}
              >
                {" "}
                Follow My Work @
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2%",
                  paddingBottom: "5%",
                  height: "8em",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/vimur-s-0a1420308/"
                  target="_blank"
                  className="svgss"
                  style={{color:"#fffb9e"}}
                >
                  <FaLinkedin className="svgss" />
                </a>

                <a
                  href="https://github.com/VimurS/"
                  target="_blank"
                  className="svgss"
                  style={{color:"#aca7ff"}}
                >
                  {" "}
                  <FaGithub />{" "}
                </a>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-easing="linear" className="ConContainer">
              <p
                className="contactText"
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  color: "lime",
                  paddingTop: "5%",
                }}
              >
                {" "}
                Let's Grab a Coffee?
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2%",
                  paddingBottom: "20%",
                  height: "10em",
                }}
              >
                <a
                  href="https://twitter.com/vimur7?t=qsKRtJteBRBS03-iMiMsYw&s=09"
                  target="_blank"
                  className="svgss"
                  style={{color:"#7ad8ff"}}
                >
                  <FaTwitter className="svgss" />
                </a>

                <a
                  href="https://www.instagram.com/vimur.sivakumar?utm_source=qr&r=nametag"
                  target="_blank"
                  className="svgss"
                  style={{color:"#ff8bff"}}
                >
                  <FaInstagram className="svgss" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100009282106685"
                  target="_blank"
                  className="svgss"
                  style={{color:"#62ffb2"}}
                >
                  <FaFacebook className="svgss" />
                </a>

                {/* <a href="mailto:svimur7@gmail.com" className="svgss">
          <FaMailBulk className="svgss" /></a> */}
              </div>
            </div>
          </div>
          <p className="footer">
            {" "}
             ©{currentYear} Vimur Sivakumar
          </p>
          {/* <p className="footer">Developed with ❤️ in Coimbatore </p> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
