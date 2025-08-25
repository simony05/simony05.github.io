import React from 'react';
import './Profile.css';

const Profile = () => {
  const handleResumeDownload = () => {
    window.open('./assets/simon_swe_resume.pdf');
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="profile">
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Simon Yan</h1>
        <p className="section__text__p2">Software Engineer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={handleResumeDownload}
          >
            Download Resume
          </button>
          <button className="btn btn-color-1" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
