import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Project Management',
      description: 'Leading teams and delivering projects with Agile methodologies',
      skills: [
        'Led cross-functional teams using Scrum and Kanban methodologies',
        'Enhanced outcomes through advanced data analysis and AI deployment',
        'Managed complete project lifecycles from concept to delivery',
      ],
      tools: ['Jira', 'Trello', 'Notion', 'Clickup', 'G Suite', 'Slack', 'Postman'],
    },
    {
      title: 'Data Science & AI',
      description: 'Building scalable ML models and AI solutions',
      skills: [
        'Developing production-ready models for deep learning use cases',
        'Experience with Computer Vision and NLP projects',
        'Complex quantitative modeling and time series analysis',
      ],
      tools: ['TensorFlow', 'Keras', 'PyTorch', 'Python', 'Scikit-learn'],
    },
    {
      title: 'Full Stack Development',
      description: 'Creating modern web and mobile applications',
      skills: [
        'Building responsive websites using React and Redux',
        'Developing mobile applications with Flutter and React Native',
        'Creating backends with Node.js, Express, and Flask',
      ],
      tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PHP', 'Laravel'],
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Deploying and managing cloud-based solutions',
      skills: [
        'Experience across multiple cloud platforms',
        'Hosting and maintaining applications with databases',
        'Deploying ML models to production environments',
      ],
      tools: ['AWS', 'Azure', 'Firebase', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    },
  ]

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1">⚡</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
