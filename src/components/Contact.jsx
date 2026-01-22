import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'ahmadmuzaffar.cs@gmail.com',
      link: 'mailto:ahmadmuzaffar.cs@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'Lahore, Punjab, Pakistan',
      link: 'https://maps.app.goo.gl/2Vdnx1APMyFcRN5b6',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AMKhaan',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amkhaan',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCui3HeIQp4aAnwiFvh5JSdQ',
      icon: <FaYoutube className="w-6 h-6" />,
    },
  ]

  const platforms = [
    { name: 'LeetCode', url: 'https://leetcode.com/u/ahmadmuzzafar/' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/laymanbrother' },
    { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/fcc1d2725e8-449b-4a78-a62a-5e7df94509d5' },
  ]

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading text-center">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
              I am available on these platforms. Feel free to message me, and I will reply within 24 hours.
              I can assist you regarding{' '}
              <span className="font-semibold text-primary">
                Project Management, ML, AI, Web, and Infrastructure Development
              </span>
              .
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">{info.title}</div>
                    <div className="text-gray-900">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Connect with me on</h3>
              <div className="flex justify-center gap-6 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-50 text-primary rounded-lg hover:bg-blue-100 transition-colors font-medium"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://docs.google.com/document/d/159cMjd_tfdCQf1NOOrm4ZujBoLy1xjaFd9BhGMhH62I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
