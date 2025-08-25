import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: './assets/email.png',
      text: 'simonry30@gmail.com',
      link: 'mailto:simonry30@gmail.com',
      isEmail: true
    },
    {
      icon: './assets/linkedin.png',
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/simon-yan/',
      isEmail: false
    },
    {
      icon: './assets/github.png',
      text: 'Github',
      link: 'https://github.com/simony05',
      isEmail: false
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.isEmail) {
      window.location.href = contact.link;
    } else {
      window.open(contact.link, '_blank');
    }
  };

  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {contactInfo.map((contact, index) => (
          <div key={index} className="contact-info-container">
            <img
              src={contact.icon}
              alt={`${contact.text} icon`}
              className={`icon contact-icon ${contact.isEmail ? 'email-icon' : ''}`}
            />
            <p>
              <a onClick={() => handleContactClick(contact)}>
                {contact.text}
              </a>
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
