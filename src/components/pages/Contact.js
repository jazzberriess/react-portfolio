import React from 'react';

export default function Contact() {
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
        <form>
          <div class="row">
            <div class="six columns">
              <label for="your-name">Your Name</label>
              <input
                class="u-max-full-width"
                type=" input"
                placeholder="Your Name"
                id="name-input"
              />
            </div>
            <div class="six columns">
              <label for="email-input">Your Email</label>
              <input
                class="u-max-full-width"
                type="email"
                placeholder="youremail@email.com"
                id="email-input"
              />
            </div>
          </div>
          <label for="message">Message</label>
          <textarea
            class="u-full-width"
            placeholder="Your Message"
            id="example-message"
          ></textarea>
          <input class="button" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
