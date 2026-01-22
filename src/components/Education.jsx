import React from 'react'

const Education = () => {
  const degrees = [
    {
      title: 'FAST NUCES Lahore',
      degree: 'M.S. in Data Science',
      duration: '2023 - 2025',
      url: 'https://www.nu.edu.pk/',
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
      descriptions: [
        'Studied core CS subjects including Data Structures, Algorithms, DBMS, OS, Computer Architecture, and AI',
        'Developed proficiency in Python, Java, and C++ through practical assignments and projects',
        'Gained hands-on experience in software development, system design, and problem-solving',
      ],
    },
  ]

  const certifications = [
    { title: 'Machine Learning', provider: 'Stanford University (Andrew Ng)' },
    { title: 'Deep Learning', provider: 'deeplearning.ai (Andrew Ng)' },
    { title: 'ML on GCP', provider: 'Google Cloud' },
    { title: 'Data Science', provider: 'IBM' },
    { title: 'Advanced Data Science', provider: 'IBM' },
    { title: 'Advanced ML on GCP', provider: 'Google Cloud' },
    { title: 'DL on TensorFlow', provider: 'deeplearning.ai' },
    { title: 'Full Stack Development', provider: 'Coursera' },
    { title: 'Kubernetes on GCP', provider: 'Google Cloud' },
    { title: 'Project Management', provider: 'Google' },
    { title: 'Cloud Architecture', provider: 'Google Cloud' },
    { title: 'Big Data', provider: 'Microsoft' },
  ]

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading text-center">Education & Certifications</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Degrees */}
          <div>
            <h3 className="subheading text-center mb-6">Academic Background</h3>
            <div className="space-y-6">
              {degrees.map((edu, index) => (
                <div key={index} className="card">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      {edu.title}
                    </a>
                    <div className="text-gray-600 text-sm mt-1">{edu.duration}</div>
                  </div>

                  <ul className="space-y-2">
                    {edu.descriptions.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary mr-2 mt-1">⚡</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="subheading text-center mb-6">Professional Certifications</h3>
            <div className="card">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900">{cert.title}</div>
                      <div className="text-sm text-gray-600">{cert.provider}</div>
                    </div>
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
