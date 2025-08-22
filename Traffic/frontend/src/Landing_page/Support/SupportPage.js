import React, { useState } from "react";

const SupportPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        console.log(result.message);
      } else {
        console.error('Submission error:', result.message);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setFormData({ name: "", email: "", message: "" });
  };

  const resetForm = () => setSubmitted(false);

  return (
    <div className="container_support">
      <h1 className="heading">Support</h1>
      <p className="description">Please contact us with your questions.</p>
      
      {submitted ? (
        <div className="thankYouMessage">
          <h2>Thank You!</h2>
          <p>Your message has been sent. We'll get back to you soon!</p>
          <button onClick={resetForm} className="resetButton">Send Another Message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="inputGroup">
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Your name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
              placeholder="Your email"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="message" className="label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea"
              placeholder="How can we assist you?"
            />
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SupportPage;