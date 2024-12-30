import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/FeedBackPage.css"; 

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    feedback: "",
  });

  const [feedbackList, setFeedbackList] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("http://13.49.243.246/api/feedbackList");
      if (response.ok) {
        const data = await response.json();
        setFeedbackList(data);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await fetch("http://13.49.243.246/api/feedbackForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your feedback!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          feedback: "",
        });
        fetchFeedback();
      } else {
        alert("Failed to submit feedback. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    } finally {
      setLoader(false);
    }
  };


  return (
      <div className="feedback pt-5">
        <h2 className="text-center pt-4 heading">
          Feedback Form<div className="light"></div>
        </h2>
        <div className="feedback-page-container d-flex pt-5">
          <div className="feedback-testimonials">
            <h3 className="pb-4">What Others Are Saying 🤔</h3>
            <Carousel className="card_outer">
              {feedbackList.length === 0 ? (
                <Carousel.Item className="card_inner">
                  <div className="card p-3 no-feedback-message">
                    <h2>
                      🌟 This could be the most beautiful feedback ever! 🌟
                    </h2>
                    <p>
                      We would love to hear your thoughts and experiences. Your
                      feedback can help us grow!
                    </p>
                  </div>
                </Carousel.Item>
              ) : (
                feedbackList.map((item, index) => (
                  <Carousel.Item key={index} className="card_inner">
                    <div className="card p-3">
                      <p className="text-center feedback-text pb-3">
                        <i>"{item.feedback}"</i>
                      </p>
                      <h6 className="text-center">- {item.Name}</h6>
                    </div>
                  </Carousel.Item>
                ))
              )}
            </Carousel>
          </div>

          <div className="feedback-form-container">
            <h2>Leave Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your feedback"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Your feedback"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn loader"
                disabled={loader}
              >
                {loader ? "Submiting.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default FeedbackPage;
