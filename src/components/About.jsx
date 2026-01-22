import React from 'react'

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading text-center">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a <span className="font-semibold text-primary">Project Manager and AI Enthusiast</span> with
              a robust background in managing and delivering multiple machine learning and web development
              projects. With degrees in Data Science and Computer Science, I bring a strong foundation in both
              theoretical and practical aspects of technology and AI.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Currently pursuing my <span className="font-semibold">M.S. in Data Science</span> from FAST NUCES
              Lahore, I specialize in developing scalable solutions that leverage cutting-edge technologies in
              Machine Learning, Deep Learning, and Full Stack Development.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Lead cross-functional teams using Agile methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Build scalable ML/DL models for production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Develop full-stack web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Deploy cloud infrastructure solutions</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Areas of Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Project & Product Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Data Science & AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Full Stack Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Cloud Infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
