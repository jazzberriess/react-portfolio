//import react
import React, { useState } from 'react';

//import validation helpers
import { validateEmail, validateMessage } from '../../utils/helpers';

//function to render Form details
export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setErrorMessage] = useState('');

  //function to handle input changes on contact form
  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //function to handle changes on contact form when submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();

    //error message handling
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email');
      return;
    }

    //error message handling
    if (!validateMessage(message && name)) {
      setErrorMessage('Please enter your name and a message');
      return;
    }

    //after form submission, set the name, email message and error message to be blank
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  //return html content
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2>Get in Touch</h2>
          <p>
            If you want to get in touch to discuss project or collaboration
            opportunities, work opportunities or have any questions about my
            work you can find me at GitHub and LinkedIn. You can also shoot me
            an email or use the contact form on this page.
          </p>
        </div>
        <form id="contact-form">
          <div className="row">
            <div className="twelve columns">
              <label htmlFor="your-name">Your Name</label>
              <input
                className="u-max-full-width"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Your Name"
                id="name-input"
              />
            </div>
            <div className="twelve columns">
              <label htmlFor="email-input">Your Email</label>
              <input
                className="u-max-full-width"
                value={email}
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="youremail@email.com"
                id="email-input"
              />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            className="u-full-width"
            value={message}
            name="message"
            type="text"
            onChange={handleInputChange}
            placeholder="Your Message"
            id="example-message"
          ></textarea>
          <button className="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
}
