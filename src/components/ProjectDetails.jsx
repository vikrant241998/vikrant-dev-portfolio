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
import plusX_Banner from "../assets/plusX_Banner.png";
import ridez from "../assets/ridez.png";
import aerialBorne_Banner from "../assets/aerialBorne_Banner.png";
import goignisBanner from "../assets/goignisBanner.png";

const projectsData = {
  1: {
    title: `ShunyaEkai Technologies`,
    banner: shunyaEkaiBanner,
    overview: `ShunyaEkai Technologies is a corporate website developed to represent the company’s brand, vision, and services in a clean and professional way.
               I designed and implemented the complete UI with a strong focus on responsiveness, layout consistency, and user-friendly navigation.`,
    role: [
      `Designed the complete UI layout from scratch`,
      `Developed frontend using HTML, CSS, and JavaScript`,
      `Implemented responsive design for all devices`,
      `Used Bootstrap grid and components`,
      `Wrote custom CSS for better visual consistency`,
      `Ensured clean structure and spacing`,
      `Tested UI across browsers`,
    ],

    whatIDid: [
      {
        heading: "Frontend Structure Development",
        desc: `Designed and implemented a clean, well-structured UI layout to represent the company’s brand, services, 
            and vision. Carefully arranged banners, sections, and footers to ensure clarity and professional aesthetics.`,
      },
      {
        heading: "Responsive UI Optimization",
        desc: `Ensured the website looks and functions perfectly on desktops, tablets, and mobile devices.
               Used flexible layouts, media queries, and Bootstrap grid for seamless responsiveness.`,
      },
      {
        heading: "Visual Consistency",
        desc: `Customized Bootstrap components and wrote additional CSS to maintain consistent colors, fonts, 
            and spacing, reflecting the corporate identity and enhancing user perception.`,
      },
      {
        heading: "Usability & Navigation",
        desc: `Improved user navigation flow by logically grouping content, optimizing menus, 
            and making interactions intuitive, resulting in a user-friendly and accessible experience.`,
      },
    ],

    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://shunyaekai.tech/",
  },

  2: {
    title: "PlusX Electric",
    banner: plusX_Banner,
    overview: `PlusX Electric is a corporate website created for an electric mobility brand to showcase its products, vision, and innovation in a modern and professional manner.
                The objective of this project was to design and develop a clean, responsive, and user-friendly UI that reflects the brand’s focus on sustainability and future-ready electric solutions.`,
    role: [
      `Created structured sections such as banners, content blocks, and footers to clearly present brand information`,
      `Ensured the website adapts seamlessly across different screen sizes using Bootstrap and custom media queries.`,
      `Enhanced the default Bootstrap components with custom CSS to maintain a unique and professional brand identity.`,
      `Focused on readability, consistent colors, and intuitive layout flow to improve user engagement.`,
    ],

    whatIDid: [
      {
        heading: "Structured Product & Service Sections",
        desc: `Developed organized sections to showcase the company’s electric products and services.
            Each page highlights key information in a clear and visually appealing manner.`,
      },
      {
        heading: "Mobile-First Responsive Design",
        desc: `Focused on a mobile-first approach to ensure all content is readable and functional on small screens, 
            while maintaining consistency across tablets and desktops.`,
      },
      {
        heading: "Custom Styling & Brand Alignment",
        desc: `Extended default Bootstrap styling with custom CSS to achieve a modern, sleek, and brand-aligned visual design. 
            Paid attention to typography, spacing, and component appearance.`,
      },
      {
        heading: "Enhanced User Experience",
        desc: `Streamlined navigation, improved readability, and ensured interactive elements respond intuitively, 
          providing a smooth journey through the website for potential customers.`,
      },
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
    banner: ridez,
    overview: `Ridez is a technology-driven mobility platform designed to present transportation solutions in a clean, modern, and accessible way.
            The primary focus of this project was to create a visually appealing and responsive user interface that clearly communicates the brand’s services while ensuring smooth navigation and usability across all devices.`,
    role: [
      `Planned and structured the complete frontend layout for the website`,
      `Converted design ideas into fully functional web pages using HTML and CSS`,
      `Implemented responsive behavior to ensure consistency across different screen sizes`,
      `Integrated JavaScript for basic UI interactions and page behavior`,
      `Customized Bootstrap components to align with the brand’s visual identity`,
      `Improved UI flow by organizing content sections logically`,
      `Ensured consistent styling, spacing, and typography throughout the site`,
    ],

    whatIDid: [
      {
        heading: "Page Layout & Section Planning",
        desc: `Structured all pages to clearly present transportation solutions and platform features.
          Each section was designed to communicate key services efficiently without clutter.`,
      },
      {
        heading: "Cross-Device Responsiveness",
        desc: `Ensured layouts and content adapt perfectly on all screen sizes. Used CSS flex, media queries, 
            and Bootstrap utilities to provide consistent experience across devices.`,
      },
      {
        heading: "Consistent UI & Visual Language",
        desc: `Maintained uniform color schemes, fonts, spacing, and element styling to create a cohesive and professional brand experience.`,
      },
      {
        heading: "Optimized Navigation & Interactions",
        desc: "Simplified menus, improved content hierarchy, and enhanced interactive elements to ensure users can easily navigate the platform and access information quickly.",
      },
    ],

    tech: ["HTML", "CSS", "Bootstrap"],
    link: "#",
  },

  4: {
    title: "Aerial Borne",
    banner: aerialBorne_Banner,
    overview: `Aerial Borne is a modern aviation solutions platform designed to present complex aerospace services and products in a clean, professional, 
              and interactive manner. The main objective was to develop a highly responsive and visually engaging user interface that allows users 
              to explore aviation services efficiently while maintaining a sleek, brand-aligned aesthetic.`,
    role: [
      `Planned and implemented the complete frontend UI using HTML, CSS, Next.js, TypeScript, Bootstrap, and Tailwind CSS.`,
      `Converted complex design mockups into fully functional and responsive web pages.`,
      `Structured content sections for services, solutions, and case studies for intuitive readability.`,
      `Implemented cross-device responsiveness to ensure seamless experience on desktop, tablet, and mobile screens.`,
      `Integrated interactive UI elements and animations using CSS and Next.js features.`,
      `Optimized layout consistency and visual hierarchy throughout the website.`,
      `Conducted cross-browser testing to maintain compatibility and performance.`,
    ],

    whatIDid: [
      {
        heading: "Frontend Architecture & Layout Design",
        desc: `Designed and developed a modular, reusable UI structure for all pages, ensuring that each section was visually clear 
            and aligned with the brand’s professional identity.`,
      },
      {
        heading: "Responsive & Adaptive Design",
        desc: `Ensured seamless adaptation across all devices by combining Tailwind CSS utilities, Bootstrap grids, 
              and custom CSS rules, maintaining readability and aesthetics.`,
      },
      {
        heading: "Visual Consistency & Styling",
        desc: `Maintained a cohesive visual language using brand-specific colors, typography, spacing, and UI elements. 
            Tailwind and Bootstrap were customized to provide a polished, modern look.`,
      },
      {
        heading: "Interactive Elements & User Engagement",
        desc: `Added smooth transitions, hover effects, and responsive components to enhance user experience 
            and keep the interface engaging without compromising performance.`,
      },
      {
        heading: "Navigation & UX Optimization",
        desc: `Improved overall user navigation by logically arranging menus, content sections, 
            and interactive elements, allowing users to quickly understand the services and offerings.`,
      },
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Responsive & cross-browser optimization",
      "Tailwind CSS",
      "Bootstrap",
    ],
    link: "https://aerialborne.com/",
  },

  5: {
    title: "Goignis Technologies",
    banner: goignisBanner,
    overview: `Goignis Technologies is a corporate and technology-focused website created to present the company’s digital services, solutions, 
              and brand identity in a modern and structured manner. The objective of this project was to design a clean, scalable, 
              and visually engaging user interface that clearly communicates the company’s offerings while maintaining performance 
              and responsiveness across all devices.`,
    role: [
      `Designed and developed the complete frontend UI of the website`,
      `Created structured and well-organized layouts for all pages and sections`,
      `Ensured visual consistency across the site using proper spacing, typography, and color balance`,
      `Implemented fully responsive designs for desktop, tablet, and mobile devices`,
      `Focused on usability and smooth user experience throughout the website`,
      `Maintained a clean and professional UI aligned with the brand identity`,
    ],

    whatIDid: [
      {
        heading: "UI Architecture & Layout Design",
        desc: `Designed the overall page structure and section flow to present services, content, and call-to-actions in a clear and organized manner.`,
      },
      {
        heading: "Responsive Design Implementation",
        desc: `Developed responsive layouts that adapt smoothly across desktops, tablets, and mobile devices without breaking the visual hierarchy.`,
      },
      {
        heading: "Styling & Visual Enhancement",
        desc: `Used a combination of custom CSS, Bootstrap, and Tailwind CSS to create a modern look while maintaining consistency in spacing, typography, and color usage.`,
      },
      {
        heading: "Component Customization",
        desc: `Customized Bootstrap and Tailwind components to match the brand identity instead of relying on default styles.`,
      },
      {
        heading: "User Experience Optimization",
        desc: `Focused on readable content, proper alignment, and intuitive navigation to improve user engagement and accessibility.`,
      },
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive & cross-browser optimization",
      "Tailwind CSS",
      "Bootstrap",
    ],
    link: "https://www.goignis.com/",
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
                <h4 style={{ fontWeight: "bold" }}>• {item.heading}</h4>
                <p style={{ paddingLeft: "12px" }}> {item.desc}</p>
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
