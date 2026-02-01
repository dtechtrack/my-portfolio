import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_kon5lig',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_l54puhr',
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '2dBRYMzyXb91ElJvO'
    )
      .then(() => {
        setMessage('Message sent successfully!');
        setMessageType('success');
        setTimeout(() => setMessage(''), 5000);
      })
      .catch(() => {
        setMessage('Failed to send message.');
        setMessageType('error');
        setTimeout(() => setMessage(''), 5000);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      
      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}
      
      {/* Optional: Add contact info section */}
      <div className="contact-info">
        <a href="mailto:topiya.dhruvi@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="icon">📧</span>
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/dhruvi-topiya/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="icon">💼</span>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/dtechtrack" target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="icon">🐙</span>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;