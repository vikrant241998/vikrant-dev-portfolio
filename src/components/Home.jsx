import React, { useState, useEffect } from "react";
import homeImg from "../assets/homeImg.png";
import "../styles/home.css";

/**
 * Hero/Home Section Component
 */
function Home() {
  const roles = ["Frontend Developer", "Software Developer", "Web Developer"];

  const typingSpeed = 200; // Har character type hone ka time (ms)
  const erasingSpeed = 50; // Har character erase hone ka time (ms)
  const delayBetweenRoles = 4000; // Role change hone se pehle ka wait time (ms)

  const [displayText, setDisplayText] = useState(""); // Jo text screen par dikhega
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // useEffect hook component mount hone par chalta hai aur cleanup function return karta hai
  useEffect(() => {
    let timeoutId;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        if (charIndex < currentRole.length) {
          setDisplayText((prev) => prev + currentRole.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
          timeoutId = setTimeout(handleTyping, typingSpeed);
        } else {
          // Typing complete, ab erasing start karo
          timeoutId = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        }
      } else {
        // Erasing logic
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          timeoutId = setTimeout(handleTyping, erasingSpeed);
        } else {
          // Erasing complete, next role par jao
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length); // Loop through roles
          // setCharIndex already 0 hai
          timeoutId = setTimeout(handleTyping, typingSpeed); // Start typing next role
        }
      }
    };

    timeoutId = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    // Cleanup function (component unmount hone par timeout clear karta hai)
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, roleIndex]); // Dependencies

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="text-content">
          <h1>Vikrant Mulankar</h1>

          <p>
            I'm a &nbsp;
            <span id="dynamic-text" className="highlight">
              {displayText}
            </span>
          </p>

          <p className="description">
            Hi, I’m Vikrant Mulankar, a passionate Frontend Developer dedicated
            to crafting fast, responsive, and user-friendly web applications. I
            specialize in React, JavaScript, HTML, CSS, and modern web
            technologies to turn ideas into interactive digital experiences. I
            focus on writing clean, efficient code while creating visually
            appealing interfaces that deliver real value.
          </p>

          {/* Link Component use kar sakte hain agar yeh internal page hai */}
          <a
            href="https://drive.google.com/file/d/1SwZ36QqMIEiHMunSBZo1S0bMjDrY-Q__/view?usp=sharing"
            target="_blank"
            className="btn"
          >
            Download CV
          </a>

          <div className="social-icons ">
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
        <div className="image-content">
          <img
            src={homeImg}
            // src="https://images.unsplash.com/flagged/photo-1567514650496-be446ae38bdb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

            alt="Developer Profile Picture"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
