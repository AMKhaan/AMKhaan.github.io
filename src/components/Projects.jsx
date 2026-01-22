import React from 'react'

const Projects = () => {
  const publications = [
    {
      title: 'Features Selection for Speech Emotion Recognition (SER)',
      description: 'Study on feature selection techniques for Speech Emotion Recognition.',
      date: 'August 2023',
      url: 'https://drive.google.com/file/d/1t6h1bDSRm9mp3-yJLQY47HPn8axHqB75/view?usp=sharing',
    },
    {
      title: 'Federated Learning for Human Activity Recognition',
      description: 'Implementation of federated learning for human activity recognition.',
      date: 'February 2024',
      url: 'https://drive.google.com/file/d/13j1RJrwSWrLqPM3gcJeo8bGBdyGcOLcf/view?usp=sharing',
    },
    {
      title: 'Face Detection using YOLO v3 with Custom Training',
      description: 'Custom trained YOLO v3 for face detection applications.',
      date: 'January 2024',
      url: 'https://drive.google.com/file/d/14dYkYDG7sJyIjOcp_DVBvAUoxF9eNRAa/view?usp=sharing',
    },
    {
      title: 'Comparative Analysis of Image Recognition Methods',
      description:
        'Analysis comparing Single-Layer Networks, Multi-Layer Perceptrons, and Convolutional Neural Networks.',
      date: 'March 2024',
      url: 'https://drive.google.com/file/d/14pPOkAAJVhKLm6U-L-oAXL8xErYntghb/view?usp=sharing',
    },
    {
      title: 'Systematic Literature Review of HAR using Wearable Devices',
      description:
        'Review of HAR methods using wearable devices and deep learning on open datasets (2021-2024).',
      date: 'May 2024',
      url: 'https://drive.google.com/file/d/1amb5MRKS7NcON6uMt5BpODaBtPsUwmkD/view?usp=sharing',
    },
    {
      title: 'Finger Spelling Recognition: From ASL Dataset to PSL Adaptation',
      description: 'Adaptation of ASL dataset for Pakistan Sign Language finger spelling recognition.',
      date: 'April 2024',
      url: 'https://drive.google.com/file/d/1_BU7hLIAemV8W69HpG_nWOkRQ5JXpYRg/view?usp=sharing',
    },
  ]

  const keyProjects = [
    {
      title: 'Clinic Decision Support System',
      description:
        'Built predictive analytics and decision support systems for clinical decision-making, improving operational efficiency.',
      tech: ['Python', 'TensorFlow', 'Healthcare AI'],
    },
    {
      title: 'Staff Timer App',
      description:
        'Led the relaunch of Stafftimerapp.com, a SaaS product for task management, enhancing client satisfaction.',
      tech: ['JavaScript', 'React', 'SaaS'],
    },
    {
      title: 'Sign Language Detection System',
      description:
        'Trained a model with American Sign Language and adapted it to detect Pakistan Sign Language.',
      tech: ['Python', 'Computer Vision', 'Deep Learning'],
    },
    {
      title: 'Google Ads Analytics',
      description:
        'Conducted extensive data preprocessing, feature engineering, and statistical analysis to enhance model performance.',
      tech: ['Python', 'SQL', 'Data Analytics'],
    },
    {
      title: 'DueBooks Management App',
      description:
        'Worked on an integrated management and accounting app for HR and accounts, adapting to new market demands.',
      tech: ['PHP', 'Laravel', 'MySQL'],
    },
    {
      title: 'Exercise Recommendation System',
      description:
        'Enhanced model performance for exercise recommendations through data preprocessing and feature engineering.',
      tech: ['Python', 'TensorFlow', 'ML'],
    },
  ]

  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading text-center">Projects & Publications</h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Publications */}
          <div>
            <h3 className="subheading text-center mb-6">Research Publications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <div key={index} className="card group hover:border-primary border border-transparent">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{pub.date}</p>
                  <p className="text-gray-700 mb-4">{pub.description}</p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium inline-flex items-center"
                  >
                    View Paper →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="subheading text-center mb-6">Key Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyProjects.map((project, index) => (
                <div key={index} className="card hover:border-primary border border-transparent">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
