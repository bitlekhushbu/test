import React, { useState } from "react";
import "./stylepage/ContactForm.css"; 
import customerServiceImage from './images/customer-service.png'; 

const ContactForm = () => {
  // State for handling form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending the data to an API
    console.log(formData);
  };

  return (
    <div className="contact-form" id="contact">
      <div className="page-width">
        <div className="contact-form-wrap">
          <div className="img-text">
            <h2>Get in touch with us today</h2>
            <p>
              Get in touch by contacting us directly using the information
              below or send us a message by filling out the form and we’ll get
              back to you as soon as possible.
            </p>
            <div className="contact-img">
              <img src={customerServiceImage} alt="Customer Service" />
            </div>
          </div>

          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-heading">Send a Message</h2>
              <a href="mailto:contact@adexlabs.com">
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.7476 7.35745L0.0246639 1.74039C0.00971651 1.74801 0.0149474 1.74534 0 1.75295V10.253C0 11.1918 0.761116 11.953 1.7 11.953H15.3C16.2389 11.953 17 11.1918 17 10.253V1.7326C16.9973 1.7312 16.9982 1.73169 16.9955 1.73029L9.25259 7.35771C8.80389 7.68382 8.19618 7.68371 7.7476 7.35745Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M9.25275 5.25845L16.1116 0.270562C15.8713 0.139095 15.5948 0.0574951 15.3001 0.0574951H1.70014C1.40547 0.0574951 1.13347 0.139095 0.888672 0.270562L7.74753 5.25845C8.19622 5.58475 8.80406 5.58475 9.25275 5.25845Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <span>contact@adexlabs.com</span>
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="name-field field-block">
                <div className="user-name">
                  <label htmlFor="fname">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                </div>
                <div className="user-last">
                  <label htmlFor="lname">Last name:</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="email-field field-block">
                <label htmlFor="email">Enter your email:</label>
                <input
                  className="email-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="textarea-field field-block">
                <label htmlFor="textarea">Message</label>
                <textarea
                  className="textarea"
                  id="w3review"
                  name="message"
                  rows="4"
                  cols="50"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <input
                type="submit"
                value="Submit"
                className="submit-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
