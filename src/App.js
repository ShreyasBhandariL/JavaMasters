import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Team from "./Components/Team";
import "./Styles/App.css";
import logo from "./images/logo1.png";
import CTAForm from "./Components/CTAForm";
import FeedbackPage from "./Components/FeedBackPage";
import Footer from "./Components/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrollPosition <650 ? "navbar-home" : "navbar-solid";

  return (
    <div className="App">
      <nav className={`navbar ${navbarClass}`}>
        <h1>
          <img src={logo} alt="" width={45} height={40} /> TheJavaMasters
        </h1>
        <button
          className="navbar-toggler"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#courses" onClick={() => setIsMenuOpen(false)}>
              Courses
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" className="section home">
        <Home />
      </section>

      <section id="about" className="section about">
        <About />
      </section>

      <section id="courses" className="section courses">
        <Courses />
      </section>

      <section id="team" className="section team">
        <Team />
      </section>

      <section id="contact" className="section contact">
        <FeedbackPage />
      </section>
      <Footer />
      <CTAForm />
    </div>
  );
}

export default App;
