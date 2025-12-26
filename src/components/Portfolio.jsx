import React from "react";
import "../styles/portfolio.css"; // CSS file link
import shunyaEkai from "../assets/shunyaEkai.png";
import plusX from "../assets/plusX.png";
import ridez from "../assets/ridez.png";
import aerialBorne from "../assets/aerialBorne.png";
import goignis from "../assets/goignis.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ShunyaEkai Technologies",
      desc: "Built a professional tech platform focusing on AI and future-ready solutions with a modern UI.",
      img: shunyaEkai,
    },
    {
      id: 2,
      title: "PlusX Electric",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem harum id incidunt..",
      img: plusX,
    },
    {
      id: 3,
      title: "Ridez",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem harum id incidunt..",
      img: ridez,
    },
    
    {
      id: 4,
      title: "Aerial Borne",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem harum id incidunt..",
      img: aerialBorne,
    },

    {
      id: 5,
      title: "Goignis Technologies",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem harum id incidunt..",
      img: goignis,
    },

    {
      id: 6,
      title: "Design Studio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem harum id incidunt..",
      img: "https://images.unsplash.com/photo-1766155072316-7e3aa18710ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Aap yahan aur cards add kar sakte hain
  ];

  return (
    <div className="port-container">
      {/* New Heading Section */}
      <div className="section-header">
        <h2 className="port-title">
          My <span>Projects</span>
        </h2>
        <p className="port-subtitle">A showcase of my latest work.</p>
      </div>
      <div className="port-wrapper">
        {projects.map((project) => (
          <div className="port-card" key={project.id}>
            <div className="port-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="port-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button className="read-more">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
