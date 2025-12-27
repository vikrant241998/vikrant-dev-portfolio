import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";

    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone is required";
    } else if (formData.phone.length < 10) {
      tempErrors.phone = "Enter 10-digit number";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Alert Show karein
      setAlert({
        show: true,
        message: "Message sent successfully! We will contact you soon.",
        type: "success",
      });

      console.log("Form Data:", formData);

      // Form reset karein
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // 4 seconds baad alert hide karein
      setTimeout(() => {
        setAlert({ show: false, message: "", type: "" });
      }, 4000);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Get in touch</h1>
        <p>
          I’m always open to new opportunities, exciting projects, and
          meaningful collaborations. Whether you’re a recruiter looking for a
          dedicated developer or a client with a project in mind, I’d love to
          connect. Feel free to reach out — let’s discuss how we can work
          together and create something impactful.
        </p>
      </div>

      <div className="contact-main">
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
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {/* --- Alert Message Box --- */}
          {alert.show && (
            <div className={`form-alert ${alert.type}`}>
              {alert.message}
              <button
                className="close-alert"
                onClick={() => setAlert({ ...alert, show: false })}
              >
                ×
              </button>
            </div>
          )}

          <h2>Leave a message</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="input-row">
              <div className="input-group">
                <label>
                  Your name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="error-msg">{errors.name}</span>
                )}
              </div>
              <div className="input-group">
                <label>
                  Email address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && (
                  <span className="error-msg">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  Your phone <span>*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Number"
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && (
                  <span className="error-msg">{errors.phone}</span>
                )}
              </div>
              <div className="input-group">
                <label>
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="I want to contact for..."
                  className={errors.subject ? "input-error" : ""}
                />
                {errors.subject && (
                  <span className="error-msg">{errors.subject}</span>
                )}
              </div>
            </div>

            <div className="input-group full-width">
              <label>
                Message <span>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here...."
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && (
                <span className="error-msg">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="send-btn">
              Send Message ↗
            </button>
          </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
