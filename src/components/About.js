import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    { src: './assets/linkedin_headshot.jpg', alt: 'LinkedIn headshot' },
    { src: './assets/chicago.jpg', alt: 'Me in Chicago' },
    { src: './assets/profile.png', alt: 'Me in Japan' },
    { src: './assets/hackathon.jpg', alt: 'Hackathon win' },
  ];

  const skills = [
    { name: 'Python', icon: './assets/python.png' },
    { name: 'C++', icon: './assets/c-.png' },
    { name: 'JavaScript', icon: './assets/js.png' },
    { name: 'TypeScript', icon: './assets/ts.png' },
    { name: 'React', icon: './assets/physics.png' },
    { name: 'TensorFlow', icon: './assets/tensorflow.png' },
    { name: 'PyTorch', icon: './assets/pytorch.png' },
    { name: 'LangChain', icon: './assets/langchain.png' },
    { name: 'Golang', icon: './assets/go.png' },
    { name: 'Java', icon: './assets/java.png' },
    { name: 'SQL', icon: './assets/sql.png' },
    { name: 'Git', icon: './assets/git.png' },
    { name: 'AWS', icon: './assets/aws.png' },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="about-container">
        {/* Left side - Image Carousel with outer container */}
        <div className="carousel-outer-container">
          <div className="carousel-container">
            <div className="carousel">
              <button className="carousel-button prev" onClick={prevImage}>
                ‹
              </button>
              <div className="carousel-image-container">
                <img
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  className="carousel-image"
                />
              </div>
              <button className="carousel-button next" onClick={nextImage}>
                ›
              </button>
            </div>          
          </div>
          
          {/* Carousel indicators inside outer container */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Right side - About Me Text */}
        <div className="about-text-container">
          <div className="about-text">
            <p>
              Hello! I'm Simon Yan, a third-year undergraduate computer science student at
              the University of California, Santa Barbara with a passion for software engineering.
              My main interests are in AL/ML (artificial intelligence, machine learning, deep learning, generative AI),
              and front-end development! I have previous experience through internships, clubs, personal projects, and
              classwork, which you can check out in the sections below! I love exploring new things, not just in technology,
              but also through my hobbies in cooking and playing music!
            </p>
          </div>
        </div>
      </div>

      {/* Skills section below */}
      <div className="skills-section">
        <h3>Skills & Technologies</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="skill-icon"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
