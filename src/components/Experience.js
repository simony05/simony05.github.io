import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
        year: 'Dec 2021 - May 2022',
        title: 'Machine Learning Research Intern',
        company: 'University of California, Santa Cruz',
        description: 'Researched electric demand prediction modeling for power grids using machine learning algorithms'
      },
    {
      year: 'Sep 2023 - Present',
      title: 'Undergraduate Student',
      company: 'University of California, Santa Barbara',
      description: 'Pursuing B.S. in Computer Science with focus on software development, artificial intelligence, and machine learning, as well as a certificate in Technology Management'
    },
    {
      year: 'Nov 2024 - Mar 2025',
      title: 'Entrepreneur',
      company: 'SteadiGlove',
      description: 'Marketed a Parkinson\'s glove and conducted stakeholder interviews in UC Santa Barbara\'s New Venture Program'
    },
    {
      year: 'Mar 2025 - Jun 2025',
      title: 'Software Developer and Outreach Lead',
      company: 'ACM Industry',
      description: 'Designed AI-powered financial analysis platform for PwC and coordinated directly with company representative'
    },
    {
      year: 'Jun 2025 - Sep 2025',
      title: 'AI/ML Software Engineer Intern',
      company: 'Censys',
      description: 'Architected AI agents to automate workflows and enhanced user experience through front-end development on Censys\'s platform'
    },
    {
        year: 'Sep 2025',
        title: 'Project Executive',
        company: 'ACM Industry',
        description: 'Leading student project groups to develop industry experience through building software projects for clients'
      },
  ];

  const relevantCourses = [
    {
      class: 'CS190I: Deep Learning',
      description: 'A programming-focused introduction to some of the latest state-of-the-art techniques in the field of deep learning like CNNs, RNNs, LLMs, and transformers'
    },
    {
      class: 'CS190I: Generative AI',
      description: 'A research-focused introduction to generative AI techniques like CNN, RCNN, YOLO, transformers, Elmo, Bert, GPT, Autoencoders, VAE, diffusion models, GANs, and flow-based generation',
      pdfs: [
        {
          name: 'Project 1',
          link: './assets/CS190I Programming Assignment 1.pdf'
        },
        {
          name: 'Project 2',
          link: './assets/CS190I Programming Assignment 2.pdf'
        },
        {
          name: 'Final Project',
          link: './assets/CS190i Final Project Report.pdf'
        },
      ]
    },
    {
      class: 'CS 174A: Database Systems',
      description: 'Fundamentals of database systems, including architectures, data models, query languages, and database design principles, with a practical final project on designing a CLI database management system',
      pdfs: [
        {
          name: 'Final Project',
          link: 'https://github.com/k-nn-tht/IVC_DB'
        }
      ]
    },
    {
      class: 'CS 156: Software Development',
      description: 'Fundamentals of industry-standard software development practices, including version control, testing, and documentation, with a focus on team collaboration and projects'
    },
    {
      class: 'CS 130A+B: Data Structures and Algorithms',
      description: 'Design and analysis of computer algorithms including graph and tree algorithms, sorting, greedy, divide and conquer, dynamic programming, and more'
    },
  ];

  return (
    <section id="experience">
      <h1 className="title">Experience</h1>
      <div className="timeline-container">
        <div className="timeline-wrapper">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-block">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{experience.year}</div>
                <h3 className="timeline-title">{experience.title}</h3>
                <div className="timeline-company">
                {experience.company === 'Censys' ? (
                  <a href="https://censys.com/" target="_blank" rel="noopener noreferrer">
                    {experience.company}
                  </a>
                ) : experience.company === 'ACM Industry' ? (
                  <a href="https://acmindustry.org/" target="_blank" rel="noopener noreferrer">
                    {experience.company}
                  </a>
                ) : (
                  experience.company
                )}
              </div>
                <p className="timeline-description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Relevant Courses Section */}
      <div className="courses-section">
        <h2 className="courses-title">Relevant Courses</h2>
        <div className="courses-container">
          {relevantCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3 className="course-class">
                {course.link ? (
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    {course.class}
                  </a>
                ) : (
                  course.class
                )}
              </h3>
              <p className="course-description">{course.description}</p>
              {course.pdfs && (
                <div className="course-pdfs">
                  <div className="pdf-links">
                    {course.pdfs.map((pdf, pdfIndex) => (
                      <React.Fragment key={pdfIndex}>
                        <a 
                          href={pdf.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="pdf-link"
                        >
                          {pdf.name}
                        </a>
                        {pdfIndex < course.pdfs.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
