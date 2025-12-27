import {
  FaCode,
  FaMobileAlt,
  FaReact,
  FaRocket,
  FaRedo,
  FaPlug,
} from "react-icons/fa";

import serviceImg from "../assets/serviceImg.png";

import "../styles/services.css";

const Services = () => {
  const serviceList = [
    {
      icon: <FaCode />,
      title: "UI Development",
      desc: "Pixel-perfect user interfaces using HTML, CSS, and modern JavaScript.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Mobile-first, fully responsive layouts that work on all devices.",
    },
    {
      icon: <FaReact />,
      title: "React.js Development",
      desc: "Dynamic, scalable, and component-based frontend applications.",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      desc: "Fast loading pages with optimized assets and clean code.",
    },
    {
      icon: <FaRedo />,
      title: "Website Redesign",
      desc: "Modern UI revamp for existing websites to improve UX and look.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      desc: "Connecting frontend with REST APIs for real-time data handling.",
    },
  ];

  return (
    <>
      {/* Section One */}
      <div className="service-wrapper">
        <section className="service-hero">
          <div className="service-text">
            <h1 className="service-heading">Design & Development Services</h1>
            <p className="description">
              Vicky I craft seamless and engaging digital experiences that
              transform ideas into high-performing web solutions. With expertise
              in responsive web design, React-based frontend development, and
              intuitive UI/UX design, I deliver digital products that are
              visually compelling, functionally robust, and optimized for
              performance and scalability.
            </p>
            <button className="btn">View My Work</button>
          </div>

          <div className="service-illustration">
            <img src={serviceImg} alt="Developer Illustration" />
          </div>
        </section>

        {/* Section Two */}
        <section className="service-section">
          <div className="service-container">
            <h2 className="service-title">Professional Frontend Services</h2>
            <p className="service-subtitle">
              Building high-performance, scalable, and user-focused web
              interfaces <br /> with a strong emphasis on clean code, intuitive
              user experience, and modern web standards.
            </p>

            <div className="service-grid">
              {serviceList.map((item, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{item.icon}</div>
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
