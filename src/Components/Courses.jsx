/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Styles/Courses.css";
import logo from "../images/logo2.png";
import Java from "../images/Java.png";
import mern from "../images/mern.png";
import SocialNetwork from "../images/SocialNetwork.png";
import Canva from "../images/Canva.png";
import SoftSkills from "../images/SoftSkills.png";

const programsData = [
  {
    title: "Java Mastery Program",
    shortInfo: "Brief info about Java Mastery Program",
    image: Java,
    fullInfo:
      "Dive deep into Java with our complete training, starting from the basics to mastering advanced topics. We focus on building a solid coding foundation, developing logical thinking, and tackling real-world challenges.",
  },
  {
    title: "Full-Stack MERN Development",
    shortInfo: "Brief info about Full-Stack MERN Development",
    image: mern,
    fullInfo:
      " Learn to build modern, scalable web applications from the ground up with the MERN stack (MongoDB, Express, React, Node.js). This course covers both frontend and backend, giving you the skills to design, develop, and deploy full-fledged applications.",
  },
  {
    title: "Professional Networking and LinkedIn Optimization",
    shortInfo:
      "Brief info about Professional Networking and LinkedIn Optimization",
    image: SocialNetwork,
    fullInfo:
      "Elevate your professional presence with our LinkedIn and networking course. Learn how to craft an impactful LinkedIn profile, expand your network, and build a career-ready personal brand.",
  },
  {
    title: "Canva & Presentation Excellence",
    shortInfo: "Brief info about Canva & Presentation Excellence",
    image: Canva,
    fullInfo:
      "Beyond technical skills, it’s essential to communicate your ideas effectively. This course covers Canva design principles and presentation techniques, enabling you to create visually stunning and impactful presentations.",
  },
  {
    title: "Soft Skills and Career Development",
    shortInfo: "Brief info about Soft Skills and Career Development",
    image: SoftSkills,
    fullInfo:
      "Cover essential soft skills like communication, teamwork, time management, and career development strategies.",
  },
];

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % programsData.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="programs-section">
      <h2 className="text-center text-light heading">
        Courses/Programs<div class="light"></div>
      </h2>

      <Row className="courses-row">
        <Col
          md={6}
          className="program-details"
        >
          <img
            src={programsData[activeIndex].image}
            alt="Programs"
            className="animated-img"
          />
          <div className="program-data">
            <h3>{programsData[activeIndex].title}</h3>
            <p>{programsData[activeIndex].fullInfo}</p>
          </div>
        </Col>

        <Col md={6} className="position-relative">
          <div className="cards-container circle-container">
            <img src={logo} alt="center image" className="center-image" />
            {programsData.map((program, index) => (
              <Card
                key={index}
                className={`program-card ${
                  index === activeIndex ? "active" : ""
                }`}
                style={{
                  transform: `rotate(${
                    (index - activeIndex) * (360 / programsData.length)
                  }deg) translateX(180px)`,
                }}
              >
                <Card.Body className="text-center">
                  <Card.Text
                    className="text-center"
                    style={{ transform: `rotate(180deg)`, color: "white" }}
                  >
                    {program.shortInfo}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
