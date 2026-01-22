import React from 'react'
import { FaRocket, FaBrain, FaCode, FaCloud, FaCheck } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Project Management',
      description: 'Leading teams and delivering projects with Agile methodologies',
      icon: <FaRocket className="w-8 h-8" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
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
      icon: <FaBrain className="w-8 h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
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
      icon: <FaCode className="w-8 h-8" />,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
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
      icon: <FaCloud className="w-8 h-8" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      skills: [
        'Experience across multiple cloud platforms',
        'Hosting and maintaining applications with databases',
        'Deploying ML models to production environments',
      ],
      tools: ['AWS', 'Azure', 'Firebase', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    },
  ]

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">Skills & Technologies</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.bgGradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">{category.description}</p>

              {/* Key Capabilities */}
              <div className="mb-6">
                <h4 className="font-bold text-primary-400 mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full"></div>
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-300 group/item hover:text-white transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-125 transition-transform duration-300">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-bold text-secondary-400 mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-secondary-400 to-accent-400 rounded-full"></div>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${category.gradient} bg-opacity-10 backdrop-blur-sm text-white rounded-xl text-sm font-bold border border-white/20 hover:border-white/40 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
