import React from 'react'
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa'

const Education = () => {
  const degrees = [
    {
      title: 'FAST NUCES Lahore',
      degree: 'M.S. in Data Science',
      duration: '2023 - 2025',
      url: 'https://www.nu.edu.pk/',
      gradient: 'from-blue-500 to-cyan-500',
      descriptions: [
        'Exploring advanced algorithms in Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), and Statistics',
        'Implementing ML models, developing DL architectures, and applying NLP techniques through hands-on projects',
        'Analyzing large datasets and deriving meaningful insights for data-driven decision making',
      ],
    },
    {
      title: 'Government College University Lahore (GCUL)',
      degree: 'BS in Computer Science',
      duration: '2017 - 2021',
      url: 'https://gcu.edu.pk/',
      gradient: 'from-purple-500 to-pink-500',
      descriptions: [
        'Studied core CS subjects including Data Structures, Algorithms, DBMS, OS, Computer Architecture, and AI',
        'Developed proficiency in Python, Java, and C++ through practical assignments and projects',
        'Gained hands-on experience in software development, system design, and problem-solving',
      ],
    },
  ]

  const certifications = [
    { title: 'Machine Learning', provider: 'Stanford University (Andrew Ng)', color: 'from-blue-500 to-cyan-500' },
    { title: 'Deep Learning', provider: 'deeplearning.ai (Andrew Ng)', color: 'from-purple-500 to-pink-500' },
    { title: 'ML on GCP', provider: 'Google Cloud', color: 'from-orange-500 to-red-500' },
    { title: 'Data Science', provider: 'IBM', color: 'from-green-500 to-emerald-500' },
    { title: 'Advanced Data Science', provider: 'IBM', color: 'from-indigo-500 to-purple-500' },
    { title: 'Advanced ML on GCP', provider: 'Google Cloud', color: 'from-pink-500 to-rose-500' },
    { title: 'DL on TensorFlow', provider: 'deeplearning.ai', color: 'from-blue-500 to-purple-500' },
    { title: 'Full Stack Development', provider: 'Coursera', color: 'from-cyan-500 to-blue-500' },
    { title: 'Kubernetes on GCP', provider: 'Google Cloud', color: 'from-orange-500 to-pink-500' },
    { title: 'Project Management', provider: 'Google', color: 'from-green-500 to-cyan-500' },
    { title: 'Cloud Architecture', provider: 'Google Cloud', color: 'from-purple-500 to-indigo-500' },
    { title: 'Big Data', provider: 'Microsoft', color: 'from-red-500 to-orange-500' },
  ]

  return (
    <section id="education" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">Education & Certifications</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Building expertise through continuous learning and achievement
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Degrees */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaGraduationCap className="text-primary-400 text-3xl" />
              <h3 className="subheading !mb-0">Academic Background</h3>
            </div>
            <div className="space-y-8">
              {degrees.map((edu, index) => (
                <div
                  key={index}
                  className="card group animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Gradient Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient}`}></div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${edu.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <FaGraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-2">{edu.degree}</h4>
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}
                      >
                        {edu.title}
                      </a>
                      <div className="mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${edu.gradient} text-white`}>
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {edu.descriptions.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 group/item hover:text-white transition-colors duration-300">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${edu.gradient} mr-3 mt-2`}></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaCertificate className="text-accent-400 text-3xl" />
              <h3 className="subheading !mb-0">Professional Certifications</h3>
            </div>
            <div className="card animate-scale-in">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="relative group/cert p-5 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:-translate-y-1"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {/* Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 p-2 bg-gradient-to-br ${cert.color} rounded-lg text-white shadow-lg group-hover/cert:scale-110 transition-transform duration-300`}>
                        <FaAward className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-white mb-1">{cert.title}</div>
                        <div className="text-sm text-gray-400">{cert.provider}</div>
                      </div>
                    </div>

                    {/* Hover Border Glow */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.color} opacity-0 group-hover/cert:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
