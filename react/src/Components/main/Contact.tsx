import React, { useState } from 'react';
import './css/contact.css'; // Link to the CSS file

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to an API endpoint.
    console.log('Form Data Submitted:', formData);
    alert('Message sent! (Check console for data)');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container"> {/* Use a container for centering and max-width */}
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          Have a question or want to work together? Fill out the form below or reach out using the contact details.
        </p>

        <div className="contact-content">
          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>If you prefer, you can also reach us via:</p>
            <p><strong>Email:</strong> info@yourblog.com</p>
            <p><strong>Phone:</strong> +212 456-7890</p>
            <p><strong>Address:</strong> 123 Blog Street, Cityville, Country</p>
            {/* Add other contact details or a map embed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;