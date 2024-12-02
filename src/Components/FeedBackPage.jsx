import React, { useState, useEffect } from "react";
import "../Styles/FeedBackPage.css"; // Include a CSS file for custom styles

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
      const response = await fetch("http://localhost:2000/feedbackList");
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
      const response = await fetch("http://localhost:2000/feedbackForm", {
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
      <h2 className="text-center heading">
        Feedback Form<div className="light"></div>
      </h2>
      <div className="feedback-page-container d-flex pt-5">
        <div className="feedback-testimonials">
          <h3>What Others Are Saying</h3>
          <div className="carousel-class">
            {feedbackList.length === 0 ? (
              <div className="no-feedback-message">
                <h2>🌟 This could be the most beautiful feedback ever! 🌟</h2>
                <p>
                  We would love to hear your thoughts and experiences. Your
                  feedback can help us grow!
                </p>
              </div>
            ) : (
              feedbackList.map((item, index) => (
                <div key={index} className="testimonial">
                  <p>"{item.feedback}"</p>
                  <h4>- {item.name}</h4>
                </div>
              ))
            )}
          </div>
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
            <button type="submit" className="submit-btn loader" disabled={loader}>
              {loader ? "Submiting.." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
