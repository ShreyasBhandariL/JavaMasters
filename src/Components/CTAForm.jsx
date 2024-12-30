import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Styles/CTAForm.css";
import { FaComments } from "react-icons/fa";

function CTAForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clgName: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await fetch(`http://13.49.243.246/api/requestForm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.status === 200)
      {
        alert("Data Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          clgName: "",
          message: "",
        });
        setShow(false);
      }
      else if (response.status === 403)
      {
        alert(result.message);
      }
    } catch (error) {
      alert("An error occurred while sending the message.");
      console.error("Error sending contact details:", error);
    } finally {
      setLoader(false);
    }
    
  };

  return (
    <>
      <Button
        className="cta-button"
        onClick={handleShow}
        style={{
          border: "2px solid white",
          background: "transparent",
          outline: "none",
        }}
      >
        <FaComments size={28} style={{ color: "white" }} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal"
        backdropClassName="modal-backdrop"
        style={{
          backdropFilter: "blur(5px)",
        }}
        centered
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Request Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>
            If you want us to teach the students, please fill out the form
            below:
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formCollegeName" className="mt-3">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please mention your college name?"
                name="clgName"
                value={formData.clgName}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Why do you need help?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="d-flex mt-3 loader"
              style={{
                background: "black",
                alignItems: "center",
                margin: "auto",
                justifyContent: "center",
              }}
              disabled={loader}
            >
              {loader ? "Submiting.." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CTAForm;
