import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: 'video4',
      title: 'SolPower',
      image: './assets/solpower.png',
      description: 'A web-based dashboard that maps solar power potential across the U.S. using AI to help policymakers identify optimal locations for solar energy infrastructure.',
      technologies: 'React.js, Python, Flask, Scikit-learn, XGBoost, Groq API, D3.js',
      github: 'https://devpost.com/software/solpower',
      videoId: '',
      inProgress: false,
      achievement: 'Datathon 2025: DataOrbit - Winner Best Overall'
    },
    {
      id: 'video3',
      title: 'Red Wine Quality Calculator',
      image: './assets/winecalculator.png',
      description: 'An application that helps amateur winemakers craft exceptional red wine at home by simplifying the process and guiding them to refine key variables for producing high-quality wine.',
      technologies: 'Python, React, JavaScript, SingleStore',
      github: 'https://github.com/simony05/hackathon',
      videoId: '5BdGLMO1mQs?si=zcw5iwbM5oDumj4-&start=158',
      inProgress: false,
      achievement: 'SingleStore & Data Science UCSB Datathon 2nd Place Winner'
    },
    {
      id: 'video1',
      title: 'Worldly Bites',
      image: './assets/worldlybites.png',
      description: 'A mobile app that uses AI to share global cultures by finding recipes from different regions. Input text or scan ingredients, and the app suggests recipes for you to try!',
      technologies: 'Python, Tensorflow, Flask, React, Javascript',
      github: 'https://github.com/simony05/worldlybites',
      videoId: 'Ya9FqpGUGQ0?si=fihCw89DTBi1b-5L',
      inProgress: false
    },
    {
      id: 'video2',
      title: 'Brainwave',
      image: './assets/brainwave.png',
      description: 'A social media platform that connects students seeking study buddies, allowing users to post, message in real-time, and securely create accounts.',
      technologies: 'Dart, Flutter, Firebase',
      github: 'https://github.com/simony05/study_group',
      videoId: 'H6BRfTwE9zc?si=GgK8jFPvEItorMdM',
      inProgress: false
    },
  ];

  const openVideoModal = (videoId) => {
    if (videoId) {
      setSelectedVideo(videoId);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="projects">
      <h1 className="title">My Projects</h1>
      <div className="projects-container">
        <div className="projects-wrapper">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">
                  {project.title}
                  {project.inProgress && (
                    <span className="in-progress">in progress</span>
                  )}
                </h3>
                {project.achievement && (
                  <p className="achievement">{project.achievement}</p>
                )}
                <div className="project-buttons">
                  <button
                    className="project-btn github-btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    {project.github.includes('devpost.com') ? 'Devpost' : 'GitHub'}
                  </button>
                  {project.videoId && (
                    <button 
                      className="project-btn video-btn"
                      onClick={() => openVideoModal(project.videoId)}
                    >
                      Video Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="modal-video" onClick={closeVideoModal}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
