import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>

    <Header /> 
      
      {/* Main content area */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>

      </main>
    </>
  );
}

export default App;
