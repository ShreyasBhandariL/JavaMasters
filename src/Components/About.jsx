import React from "react";
import "../Styles/About.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import image from "../images/Programming.png";

const About = () => {
  return (
    <div className="about">
      <h2 className="text-center heading">
        About The Java Master's<div className="light"></div>
      </h2>
      <div className="about_java d-flex">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={image}
            alt="Programming"
            className="animated-img img-fluid"
          />
        </div>

        <div className="col-md-6 about-text-description">
          <p className="about-description">
            Welcome to The Java Master's – your ultimate training hub dedicated
            to empowering the next generation of tech professionals! Our mission
            goes beyond imparting technical skills; we are here to build
            confidence in every student, equipping them to tackle any challenge
            the industry throws their way. With us, students don’t just
            learn—they become resilient, innovative problem-solvers who are
            career-ready.
          </p>

          <h3 className="pb-4 pt-3 text-center">Why Choose Us?</h3>

          <Carousel className="card_outer">
            <Carousel.Item className="card_inner">
              <div className="card p-3">
                <p className="text-center">
                  <strong>Experienced Faculty:</strong>
                  <br />
                  Our instructors are industry veterans with deep expertise in
                  Java, problem-solving, full-stack development, and more.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>In-Depth Java Training:</strong>
                  <br />
                  We start with the basics and guide students through advanced
                  Java topics, ensuring a thorough grasp of Java concepts.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>
                    Building Confidence and Problem-Solving Skills:
                  </strong>
                  <br />
                  We empower students to develop problem-solving skills through
                  hands-on practice.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>LinkedIn Profile Building:</strong>
                  <br />
                  Crafting a strong digital presence is crucial, and we guide
                  students in creating job-ready LinkedIn profiles.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>Canva & Presentation Skills:</strong>
                  <br />
                  We teach students to create compelling visuals on Canva and
                  deliver impactful presentations.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>Comprehensive MERN Stack Training:</strong>
                  <br />
                  From MongoDB to Node.js, we dive deep into full-stack
                  development with the MERN stack.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>Flexible Training Programs:</strong>
                  <br />
                  Whether it’s on-site or online, we adapt to your schedule!
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>Certification and Professional Recognition:</strong>
                  <br />
                  Students receive a certificate of achievement upon completion.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card p-3">
                <p className="text-center">
                  <strong>Satisfaction Guarantee:</strong>
                  <br />
                  Our training is backed by a satisfaction guarantee.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>

          <div className="text-center">
            <button className="cta-btn mt-5">Start Your Journey</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
