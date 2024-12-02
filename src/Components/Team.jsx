import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Styles/Team.css";
import image1 from "../images/yamin.jpg";
import image2 from "../images/syed.jpg";
import image3 from "../images/prathiksha.jpg";

function Team() {
  const teamMembers = [
    {
      name: "Prthiksha Jain",
      role: "Founder",
      image: image3,
      linkdin: "https://www.linkedin.com/in/prathiksha-jain-7bb495226/",
      github: "https://github.com/Prathiksha-jain/",
      email: "prathikshajain0007@gmail.com",
    },
    {
      name: "Muhammed Yamin",
      role: "Co-Founder",
      image: image1,
      linkdin: "https://www.linkedin.com/in/m-yamin/",
      github: "https://github.com/MuhammedYamin",
      email: "muhammedyamin003@gmail.com",
    },
    {
      name: "Syed Saleha",
      role: "Co-Founder",
      image: image2,
      linkdin: "https://www.linkedin.com/in/syed-saleha-305735249/",
      github: "https://github.com/syedsaleha",
      email: "25syedsaleha@gmail.com",
    },
  ];

  return (
    <Container>
      <h2 className="text-center pb-5 heading">
        Meet Our Team<div className="light"></div>
      </h2>
      <p className="team-text">
        "Our dedicated team of passionate professionals is committed to
        excellence, innovation, and collaboration, driving success in everything
        we do."
      </p>
      <Row className="pt-5">
        {teamMembers.map((member, index) => (
          <Col
            key={index}
            xs={12}
            md={4}
            lg={4}
            className={`team-col ${index >= 3 ? "mt-4 offset-md-2" : ""}`}
          >
            <Card className="team-card">
              <div className="image-overlay-container">
                <Card.Img variant="top" src={member.image} alt={member.name} />
                <div className="overlay"></div>
              </div>
              <Card.Body>
                <Card.Title className="text-center">{member.name}</Card.Title>
                <Card.Text className="text-center">{member.role}</Card.Text>
                <div className="social-icons text-center">
                  <a
                    href={member.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={30}
                      style={{ margin: "0 10px", color: "#b9b9b9" }}
                    />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={30}
                      style={{ margin: "0 10px", color: "#b9b9b9" }}
                    />
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <FaEnvelope
                      size={30}
                      style={{ margin: "0 10px", color: "#b9b9b9" }}
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;
