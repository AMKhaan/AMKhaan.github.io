import React from 'react'
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Project Manager',
      company: 'AxcelerateAI',
      location: 'Lahore, Pakistan',
      duration: 'January 2024 - Present',
      url: 'https://www.axcelerate.ai',
      gradient: 'from-blue-500 to-cyan-500',
      description:
        'Successfully coordinated and managed a diverse portfolio of machine learning and deep learning projects, ensuring timely delivery and adherence to agile methodologies. Conducted extensive data preprocessing, feature engineering, and statistical analysis to enhance model performance for various projects. Built predictive analytics and decision support systems to improve operational efficiency and predictive accuracy.',
      highlights: [
        'Managed ML/DL project portfolio with agile methodologies',
        'Enhanced model performance through data engineering',
        'Built predictive analytics and decision support systems',
      ],
    },
    {
      title: 'Project Coordinator',
      company: 'Programmers Force',
      location: 'Lahore, Pakistan',
      duration: 'July 2021 - December 2023',
      url: 'https://pf.com.pk/',
      gradient: 'from-purple-500 to-pink-500',
      description:
        'Led the relaunch of a SaaS product, improving it with new technologies and market-focused enhancements. Supported back-office tasks, client management, digital marketing, payments, and customer support. Contributed to the development of SaaS products, enhancing task management and client satisfaction.',
      highlights: [
        'Led SaaS product relaunch with modern technologies',
        'Managed client relations and digital marketing',
        'Enhanced task management and client satisfaction',
      ],
    },
    {
      title: 'Research Associate',
      company: 'Shufti Pro',
      location: 'Lahore, Pakistan',
      duration: 'June 2021 - December 2021',
      url: 'https://shuftipro.com',
      gradient: 'from-orange-500 to-red-500',
      description:
        'Conducted research on AML and KYC solutions, News Aggregators, ID verification, and Political Exposed Persons (PEPs). Analyzed high-risk impact on money laundering and collected PEP profiles from around the world to make ID verification easier using Artificial Intelligence.',
      highlights: [
        'Researched AML and KYC solutions',
        'Developed AI-based ID verification systems',
        'Maintained global sanctions lists dataset',
      ],
    },
    {
      title: 'Freelancer',
      company: 'Upwork',
      location: 'Remote',
      duration: 'January 2021 - Present',
      url: 'https://www.upwork.com/',
      gradient: 'from-green-500 to-emerald-500',
      description:
        'Leading diverse ML and deep learning projects, enhancing model performance through advanced data preprocessing, and developing predictive analytics systems for clinical decision-making and resource management.',
      highlights: [
        'Delivered multiple ML/DL projects',
        'Advanced data preprocessing and model optimization',
        'Clinical decision support systems',
      ],
    },
    {
      title: 'Trainee Software Engineer',
      company: '9T5 Pty Ltd',
      location: 'Lahore, Pakistan',
      duration: 'March 2021 - June 2021',
      url: 'https://9t5.com.au/',
      gradient: 'from-indigo-500 to-purple-500',
      description:
        'Built trainee-level web applications using HTML, CSS, JavaScript, React, PHP, Laravel, Livewire, SQL, and MySQL.',
      highlights: [
        'Developed web applications with React and Laravel',
        'Gained hands-on experience with full-stack technologies',
      ],
    },
  ]

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">Work Experience</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            A journey of innovation, leadership, and technical excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className={`hidden md:flex absolute left-4 w-9 h-9 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-slate-900 shadow-lg items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                    <FaBriefcase className="w-4 h-4 text-white" />
                  </div>

                  <div className="card group">
                    {/* Gradient Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`}></div>

                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2">{exp.title}</h3>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                      >
                        {exp.company}
                        <FaExternalLinkAlt className="w-3 h-3 text-primary-400" />
                      </a>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                        <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r ${exp.gradient} text-white`}>
                          {exp.duration}
                        </span>
                        <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className={`font-bold mb-3 text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-300 group/item hover:text-white transition-colors duration-300"
                          >
                            <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mr-3 mt-2`}></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
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

export default Experience
