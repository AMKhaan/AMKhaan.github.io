import React from 'react'
import { FaExternalLinkAlt, FaFileAlt, FaLightbulb } from 'react-icons/fa'

const Projects = () => {
  const publications = [
    {
      title: 'Features Selection for Speech Emotion Recognition (SER)',
      description: 'Study on feature selection techniques for Speech Emotion Recognition.',
      date: 'August 2023',
      url: 'https://drive.google.com/file/d/1t6h1bDSRm9mp3-yJLQY47HPn8axHqB75/view?usp=sharing',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Federated Learning for Human Activity Recognition',
      description: 'Implementation of federated learning for human activity recognition.',
      date: 'February 2024',
      url: 'https://drive.google.com/file/d/13j1RJrwSWrLqPM3gcJeo8bGBdyGcOLcf/view?usp=sharing',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Face Detection using YOLO v3 with Custom Training',
      description: 'Custom trained YOLO v3 for face detection applications.',
      date: 'January 2024',
      url: 'https://drive.google.com/file/d/14dYkYDG7sJyIjOcp_DVBvAUoxF9eNRAa/view?usp=sharing',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Comparative Analysis of Image Recognition Methods',
      description:
        'Analysis comparing Single-Layer Networks, Multi-Layer Perceptrons, and Convolutional Neural Networks.',
      date: 'March 2024',
      url: 'https://drive.google.com/file/d/14pPOkAAJVhKLm6U-L-oAXL8xErYntghb/view?usp=sharing',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Systematic Literature Review of HAR using Wearable Devices',
      description:
        'Review of HAR methods using wearable devices and deep learning on open datasets (2021-2024).',
      date: 'May 2024',
      url: 'https://drive.google.com/file/d/1amb5MRKS7NcON6uMt5BpODaBtPsUwmkD/view?usp=sharing',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Finger Spelling Recognition: From ASL Dataset to PSL Adaptation',
      description: 'Adaptation of ASL dataset for Pakistan Sign Language finger spelling recognition.',
      date: 'April 2024',
      url: 'https://drive.google.com/file/d/1_BU7hLIAemV8W69HpG_nWOkRQ5JXpYRg/view?usp=sharing',
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  const keyProjects = [
    {
      title: 'Clinic Decision Support System',
      description:
        'Built predictive analytics and decision support systems for clinical decision-making, improving operational efficiency.',
      tech: ['Python', 'TensorFlow', 'Healthcare AI'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Staff Timer App',
      description:
        'Led the relaunch of Stafftimerapp.com, a SaaS product for task management, enhancing client satisfaction.',
      tech: ['JavaScript', 'React', 'SaaS'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Sign Language Detection System',
      description:
        'Trained a model with American Sign Language and adapted it to detect Pakistan Sign Language.',
      tech: ['Python', 'Computer Vision', 'Deep Learning'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Google Ads Analytics',
      description:
        'Conducted extensive data preprocessing, feature engineering, and statistical analysis to enhance model performance.',
      tech: ['Python', 'SQL', 'Data Analytics'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DueBooks Management App',
      description:
        'Worked on an integrated management and accounting app for HR and accounts, adapting to new market demands.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Exercise Recommendation System',
      description:
        'Enhanced model performance for exercise recommendations through data preprocessing and feature engineering.',
      tech: ['Python', 'TensorFlow', 'ML'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">Projects & Publications</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Innovative research and impactful projects driving technological advancement
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Publications */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaFileAlt className="text-primary-400 text-3xl" />
              <h3 className="subheading !mb-0">Research Publications</h3>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="card group relative overflow-hidden animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Gradient Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pub.gradient}`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${pub.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <FaFileAlt className="w-5 h-5" />
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
                    {pub.title}
                  </h4>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r ${pub.gradient} text-white`}>
                      {pub.date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{pub.description}</p>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${pub.gradient} bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300`}
                  >
                    View Paper
                    <FaExternalLinkAlt className="w-4 h-4 text-primary-400 group-hover:text-secondary-400" />
                  </a>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pub.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaLightbulb className="text-accent-400 text-3xl" />
              <h3 className="subheading !mb-0">Key Projects</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {keyProjects.map((project, index) => (
                <div
                  key={index}
                  className="card group relative overflow-hidden animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Gradient Corner Accent */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>

                  <h4 className="text-xl font-black text-white mb-3 relative z-10">{project.title}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{project.description}</p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-lg font-bold hover:scale-110 transition-transform duration-300 cursor-default shadow-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
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
