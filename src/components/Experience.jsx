import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Project Manager',
      company: 'AxcelerateAI',
      location: 'Lahore, Pakistan',
      duration: 'January 2024 - Present',
      url: 'https://www.axcelerate.ai',
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
      description:
        'Built trainee-level web applications using HTML, CSS, JavaScript, React, PHP, Laravel, Livewire, SQL, and MySQL.',
      highlights: [
        'Developed web applications with React and Laravel',
        'Gained hands-on experience with full-stack technologies',
      ],
    },
  ]

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading text-center">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-primary rounded-full border-4 border-white"></div>

                <div className="card">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      {exp.company}
                    </a>
                    <div className="text-gray-600 text-sm mt-1">
                      <span>{exp.duration}</span> • <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
