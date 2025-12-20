import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import homeImg from "../assets/homeImg.png";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiJson,
} from "react-icons/si";
import { TbApi, TbSeo } from "react-icons/tb";
import { VscChecklist } from "react-icons/vsc";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React Bootstrap", icon: <FaBootstrap /> },
    { name: "Material UI", icon: <SiMui /> },
    { name: "Wordpress", icon: <FaWordpress /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "Restful APIs", icon: <TbApi /> },
    { name: "Context API", icon: <FaReact /> }, // React context
    { name: "Manual Testing", icon: <VscChecklist /> },
    { name: "SEO", icon: <TbSeo /> },
  ];

  const journey = [
    { company: "ShunyaEkai Technologies", years: "2022-2024" },
    { company: "Goignis Technologies", years: "2024-2025" },
    { company: "Aerial Borne", years: "2025-Present" },
  ];

  return (
    <>
      <main className="about-container">
        {/* Sidebar Section */}
        <section className="image-section">
          <div className="profile-circle">
            <img src={homeImg} alt="Profile Photo" />
          </div>

          <div className="contact-sidebar">
            <div className="sidebar-item">
              <span className="label">EMAIL</span>
              <a
                href="mailto:vikrantmulankar389@gmail.com?subject=Contact%20from%20Website&body=Hello%20Vikrant,%0AI%20want%20to%20connect%20with%20you."
                className="about-label"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                vikrantmulankar389@gmail.com
              </a>
            </div>
            <div className="sidebar-item">
              <span className="label">PHONE</span>
              <a
                href="tel:+919650177425"
                className="about-label"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +91 9650177425
              </a>
            </div>
            <div className="sidebar-item">
              <span className="label">ADDRESS</span>
              <p className="about-label">New Delhi, India</p>
            </div>

            <div className="sidebar-item">
              <span className="label">SOCIAL ICONS</span>
              <div className="social-icons about-social-icons">
                {/* Font Awesome icons ko React mein directly use kiya */}
                <a href="https://www.linkedin.com/in/vikrant-mulankar-1228ab179/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://wa.me/919650177425"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:vikrantmulankar389@gmail.com?subject=Contact%20from%20Website&body=Hello%20Vikrant,%0AI%20want%20to%20connect%20with%20you.">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://github.com/vikrant241998">
                  <i className="fab fa-github"></i>
                </a>
                <a href="tel:+919650177425">
                  <i className="fa-solid fa-phone-volume"></i>
                </a>
              </div>
            </div>

            <div className="sidebar-action-block">
              <div className="btn-group">
                <a
                  href="https://drive.google.com/file/d/1SwZ36QqMIEiHMunSBZo1S0bMjDrY-Q__/view?usp=sharing"
                  target="_blank"
                  className="btn"
                >
                  Download CV
                </a>
                {/* <button className="btn-cv">Download CV</button> */}
                 <Link to="/contact">
                  <button className="btn-contact">Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="content-section ">
          <h1 className="main-title">Professional Bio (The Story)</h1>
          <p className="role">
            Frontend Architect | React.js & Next.js Specialist
          </p>
          <p className="description">
            Hi, I’m Vikrant Mulankar, a Frontend Developer driven by the
            challenge of turning complex logic into elegant, high-performance
            web applications. With a deep specialization in the React.js
            ecosystem, I focus on building scalable architectures that are not
            just visually stunning, but also technically robust. <br /> From my
            journey through ShunyaEka and Goignis to my current role at Aerial
            Borne, I have consistently delivered responsive, user-centric
            solutions. I don't just write code; I optimize digital journeys
            ensuring clean architecture, blazing-fast load times, and seamless
            accessibility across all devices'
          </p>

          {/* Skills Section */}
          <div className="skills-block">
            <h3>Skills & Tech Stack</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Section */}
          <div className="journey-block">
            <h3>Professional Journey</h3>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="timeline-items">
                {journey.map((item, index) => (
                  <div key={index} className="t-item">
                    <div className="t-node"></div>
                    <p>
                      {item.company} <br />
                      <span>({item.years})</span>
                    </p>
                  </div>
                ))}
                <div className="t-node-end"></div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bottom-layout">
            <div className="edu-facts">
              <h3>Education & Quick Facts</h3>
              <div className="edu-flex">
                <div className="edu-box">
                  <strong>MCA - Mangalayatan University</strong>
                  <br />
                  <span>(2023-2025)</span>
                </div>
                <div className="edu-box">
                  <strong>BCA - PDM University</strong>
                  <br />
                  <span>(2018-2021)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-sidebar mobile-only-sidebar">
            <div className="sidebar-item">
              <span className="label">EMAIL</span>
              <a
                href="mailto:vikrantmulankar389@gmail.com?subject=Contact%20from%20Website&body=Hello%20Vikrant,%0AI%20want%20to%20connect%20with%20you."
                className="about-label"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                vikrantmulankar389@gmail.com
              </a>
            </div>
            <div className="sidebar-item">
              <span className="label">PHONE</span>
              <a
                href="tel:+919650177425"
                className="about-label"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +91 9650177425
              </a>
            </div>
            <div className="sidebar-item">
              <span className="label">ADDRESS</span>
              <p className="about-label">New Delhi, India</p>
            </div>

            <div className="sidebar-item">
              <span className="label">SOCIAL ICONS</span>
              <div className="social-icons about-social-icons">
                {/* Font Awesome icons ko React mein directly use kiya */}
                <a href="https://www.linkedin.com/in/vikrant-mulankar-1228ab179/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://wa.me/919650177425"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:vikrantmulankar389@gmail.com?subject=Contact%20from%20Website&body=Hello%20Vikrant,%0AI%20want%20to%20connect%20with%20you.">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://github.com/vikrant241998">
                  <i className="fab fa-github"></i>
                </a>
                <a href="tel:+919650177425">
                  <i className="fa-solid fa-phone-volume"></i>
                </a>
              </div>
            </div>

            <div className="sidebar-action-block">
              <div className="btn-group">
                <a
                  href="https://drive.google.com/file/d/1SwZ36QqMIEiHMunSBZo1S0bMjDrY-Q__/view?usp=sharing"
                  target="_blank"
                  className="btn"
                >
                  Download CV
                </a>
                {/* <button className="btn-cv">Download CV</button> */}

                <Link to="/contact">
                  <button className="btn-contact">Contact Me</button>
                </Link>
                {/* <button className="btn-contact">Contact Me</button> */}
              </div>
            </div>
          </div>
        </section>

        <div className="star-deco">✦</div>
      </main>
    </>
  );
};

export default About;
