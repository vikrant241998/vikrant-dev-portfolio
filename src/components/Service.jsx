import React from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaRocket, 
  FaBug, 
  FaDatabase, 
  FaSearch, 
  FaServer, 
  FaPalette 
} from 'react-icons/fa';

import serviceImg from '../assets/serviceImg.png'

import "../styles/services.css";


const Services = () => {
//   const servicesData = [
//   { id: 1, title: 'Web Design', desc: 'Modern, pixel-perfect, and responsive designs for all screens.', icon: <FaCode /> },
//   { id: 2, title: 'Web Development', desc: 'Building high-performance web apps using React and Next.js.', icon: <FaServer /> },
//   { id: 3, title: 'App Development', desc: 'Cross-platform mobile apps with a native user experience.', icon: <FaMobileAlt /> },
//   { id: 4, title: 'Deployment', desc: 'Deploying apps to Vercel, Netlify, and AWS cloud platforms.', icon: <FaRocket /> },
//   { id: 5, title: 'API Integration', desc: 'Connecting your frontend with robust REST and GraphQL APIs.', icon: <FaDatabase /> },
//   { id: 6, title: 'SEO Optimization', desc: 'Improving your website ranking and speed for better visibility.', icon: <FaSearch /> },
//   { id: 7, title: 'Bug Fixing', desc: 'Identifying and resolving complex code issues and UI glitches.', icon: <FaBug /> },
//   { id: 8, title: 'UI/UX Design', desc: 'Crafting intuitive user journeys and beautiful interfaces.', icon: <FaPalette /> },
// ];


  return (
    <>
  <div className="portfolio-wrapper">
      {/* --- HERO SECTION (Same as Image) --- */}
      <section className="hero-container">
        <div className="hero-text">
          <h1 className="name">Vikrant Mulankar</h1>
          <h2 className="role">FrontEnd Developer</h2>
          <p className="tagline">Building digital experiences that matter.</p>
          <button className="btn">View My Work</button>
        </div>
        
        <div className="hero-illustration">
          {/* Ye aapki image wala SVG style illustration hai */}
          <img src={serviceImg} alt="Developer Illustration" />
        </div>
      </section>

      {/* --- SERVICES SECTION (Same as Image) --- */}
      <section className="services-section">
        <div className="section-header">
          <h3 className="section-title">SERVICES</h3>
        </div>
        
        <div className="services-grid">
          {/* {servicesData.map((service) => (
            <div key={service.id} className="service-box">
              <div className="icon-row">
                <span className="icon-style">{service.icon}</span>
                <h4 className="box-title">{service.title}</h4>
              </div>
              <p className="box-desc">{service.desc}</p>
            </div>
          ))} */}
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
