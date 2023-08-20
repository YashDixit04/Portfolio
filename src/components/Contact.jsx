import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact main-section">
        <div className="main-container">
          <h2 className="heading-secondary">
            <span className="heading-secondary__sm"> Contact 📞</span>
            <span className="heading-secondary__main">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </span>
          </h2>
          <div className="main-section__content">
            <div className="contact__form-cont">
              <form
                className="contact__form"
                action="https://formspree.io/f/xwkdkvaz"
                method="POST"
              >
                <div className="contact__form-field">
                  <label for="name" className="contact__form-field-label">
                    Name
                  </label>
                  <input
                    placeholder="Enter Your Name"
                    type="text"
                    className="contact__form-field-input"
                    required
                  />
                </div>
                <div className="contact__form-field">
                  <label for="name" className="contact__form-field-label">
                    Email
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    type="text"
                    required
                    className="contact__form-field-input"
                  />
                </div>
                <div className="contact__form-field">
                  <label for="name" className="contact__form-field-label">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className="contact__form-field-input"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__form-submit">
                  Submit
                </button>
              </form>
              <div className="contact__form-visual"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
