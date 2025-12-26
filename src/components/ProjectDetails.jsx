// import React from "react";
// import "../styles/projectDetails.css";

// const ProjectDetails = () => {
//   return (
//     <div className="project-details">
//       {/* Banner */}
//       <div className="project-banner">
//         <img
//           src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//           alt="Project Banner"
//         />
//       </div>

//       {/* Content */}
//       <div className="project-content">
//         {/* Heading */}
//         <h1 className="project-title">Healthcare Dashboard Web App</h1>

//         {/* Description */}
//         <p className="project-description">
//           This project is a modern healthcare dashboard designed to visualize
//           patient data, analytics, and reports in a clean and user-friendly
//           interface. The dashboard focuses on performance, scalability, and
//           responsive design for real-world usage.
//         </p>

//         {/* Technologies */}
//         <div className="tech-section">
//           <h3>Technologies Used</h3>
//           <div className="tech-list">
//             <span>React JS</span>
//             <span>JavaScript</span>
//             <span>CSS3</span>
//             <span>REST API</span>
//             <span>Chart.js</span>
//           </div>
//         </div>

//         {/* Project Link */}
//         <div className="project-link">
//           <a
//             href="https://your-project-link.com"
//             target="_blank"
//             rel="noreferrer"
//           >
//             View Live Project →
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

// ====================
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/projectDetails.css";
import shunyaEkaiBanner from "../assets/shunyaEkaiBanner.png";
import plusX from "../assets/plusX.png";

const projectsData = {
  1: {
    title: "ShunyaEkai Technologies",
    banner: shunyaEkaiBanner,
    overview: `ShunyaEkai Technologies is a corporate website developed to represent the company’s brand, vision, and services in a clean and professional way.
               I designed and implemented the complete UI with a strong focus on responsiveness, layout consistency, and user-friendly navigation.`,
    role: [
      "Designed the complete UI layout from scratch",
      "Developed frontend using HTML, CSS, and JavaScript",
      "Implemented responsive design for all devices",
      "Used Bootstrap grid and components",
      "Wrote custom CSS for better visual consistency",
      "Ensured clean structure and spacing",
      "Tested UI across browsers",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://shunyaekai.tech/",
  },

  2: {
    title: "PlusX Electric",
    banner: plusX,
    overview: `PlusX Electric is a corporate website created for an electric mobility brand to showcase its products, vision, and innovation in a modern and professional manner.
                The objective of this project was to design and develop a clean, responsive, and user-friendly UI that reflects the brand’s focus on sustainability and future-ready electric solutions.`,
    role: [
      "Created structured sections such as banners, content blocks, and footers to clearly present brand information",
      "Ensured the website adapts seamlessly across different screen sizes using Bootstrap and custom media queries.",
      "Enhanced the default Bootstrap components with custom CSS to maintain a unique and professional brand identity.",
      "Focused on readability, consistent colors, and intuitive layout flow to improve user engagement.",
    ],
    tech: [
      "HTML",
      "CSS",
      "React JS",
      "React Bootstrap",
      "Tailwind CSS",
      "Material UI",
    ],
    link: "https://plusxelectric.com/",
  },

  3: {
    title: "Ridez",
    banner: "https://picsum.photos/1200/400?bike",
    overview: `Ridez is a technology-driven mobility platform designed to present transportation solutions in a clean, modern, and accessible way.
            The primary focus of this project was to create a visually appealing and responsive user interface that clearly communicates the brand’s services while ensuring smooth navigation and usability across all devices.`,
    role: [
      "Planned and structured the complete frontend layout for the website",
      "Converted design ideas into fully functional web pages using HTML and CSS",
      "Implemented responsive behavior to ensure consistency across different screen sizes",
      "Integrated JavaScript for basic UI interactions and page behavior",
      "Customized Bootstrap components to align with the brand’s visual identity",
      "Improved UI flow by organizing content sections logically",
      "Ensured consistent styling, spacing, and typography throughout the site",
    ],

    whatIDid: [
      {
        heading: "Frontend Structure Development",
        desc: "Built clear and well-organized page sections to highlight services and platform features effectively.",
      },
      {
        heading: "Responsive UI Optimization",
        desc: "Ensured seamless layout adjustments for mobile, tablet, and desktop views.",
      },
      {
        heading: "Visual Consistency",
        desc: "Maintained uniform color schemes, font usage, and spacing to strengthen brand presentation.",
      },
      {
        heading: "Usability & Navigation",
        desc: "Focused on intuitive navigation to improve user experience and accessibility.",
      },
    ],

    tech: ["HTML", "CSS", "Bootstrap"],
    link: "#",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div className="project-page">
      {/* Banner */}
      <div className="project-hero">
        <img src={project.banner} alt={project.title} />
      </div>

      <div className="project-card">
        <h1 className="project-heading">{project.title}</h1>

        {/* Overview */}
        <section className="section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section>

        {/* Role */}
        <section className="section">
          <h2>My Role in This Project</h2>
          {project.role.map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </section>

        {/* What I Contributed */}
        {project.whatIDid && project.whatIDid.length > 0 && (
          <section className="section">
            <h2>What I Contributed</h2>
            {project.whatIDid.map((item, index) => (
              <div key={index}>
                <h4>{item.heading}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Tech */}
        <section className="section">
          <h2>Technologies Used</h2>
          <div className="tech-badges">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </section>

        {/* Link */}
        <section className="section center">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="live-btn"
          >
            View Live Project
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
