import React, { useState } from 'react';

import { validateEmail, validateMessage } from '../../utils/helpers';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setErrorMessage] = useState('');

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email');
      return;
    }

    if (!validateMessage(message && name)) {
      setErrorMessage('Please enter your name and a message');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 id="contact">Get in Touch</h2>
          <p>
            If you want to get in touch to discuss project or collaboration
            opportunities, work opportunities or have any questions about my
            work you can find me at GitHub and LinkedIn. You can also shoot me
            an email or use the contact form on this page.
          </p>
        </div>
        <form id="contact-form">
          <div class="row">
            <div class="twelve columns">
              <label for="your-name">Your Name</label>
              <input
                class="u-max-full-width"
                value={name}
                name="name"
                onChange={handleInputChange}
                type=" text"
                placeholder="Your Name"
                id="name-input"
              />
            </div>
            <div class="twelve columns">
              <label for="email-input">Your Email</label>
              <input
                class="u-max-full-width"
                value={email}
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="youremail@email.com"
                id="email-input"
              />
            </div>
          </div>
          <label for="message">Message</label>
          <textarea
            class="u-full-width"
            value={message}
            name="message"
            type="text"
            onChange={handleInputChange}
            placeholder="Your Message"
            id="example-message"
          ></textarea>
          <button class="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}
      </div>
    </>
  );
}
