import React from 'react'
import { FaRocket, FaBrain, FaCode, FaCloud, FaCheck, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">About Me</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Passionate technologist bridging innovation and impact
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card animate-fade-in">
            <div className="relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 sm:-top-6 -left-1 sm:-left-2 text-primary-500/20 text-6xl sm:text-8xl md:text-9xl font-serif">"</div>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 relative z-10">
                I am a{' '}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Project Manager and AI Enthusiast
                </span>{' '}
                with a robust background in managing and delivering multiple machine learning and web development
                projects. With degrees in Data Science and Computer Science, I bring a strong foundation in both
                theoretical and practical aspects of technology and AI.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 sm:mb-10 relative z-10">
                Currently pursuing my{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
                  M.S. in Data Science
                </span>{' '}
                from FAST NUCES Lahore, I specialize in developing scalable solutions that leverage cutting-edge
                technologies in Machine Learning, Deep Learning, and Full Stack Development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {/* What I Do */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass-effect p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                      <FaRocket className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      What I Do
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Lead cross-functional teams using Agile methodologies',
                      'Build scalable ML/DL models for production',
                      'Develop full-stack web applications',
                      'Deploy cloud infrastructure solutions',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-200 group/item hover:text-white transition-colors duration-300">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-125 transition-transform duration-300">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass-effect p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                      <FaStar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Areas of Expertise
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { text: 'Project & Product Management', icon: FaRocket },
                      { text: 'Data Science & AI', icon: FaBrain },
                      { text: 'Full Stack Development', icon: FaCode },
                      { text: 'Cloud Infrastructure', icon: FaCloud },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-200 group/item hover:text-white transition-colors duration-300">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-125 transition-transform duration-300">
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
