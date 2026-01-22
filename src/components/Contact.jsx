import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'ahmadmuzaffar.cs@gmail.com',
      link: 'mailto:ahmadmuzaffar.cs@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'Lahore, Punjab, Pakistan',
      link: 'https://maps.app.goo.gl/2Vdnx1APMyFcRN5b6',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AMKhaan',
      icon: <FaGithub className="w-7 h-7" />,
      color: 'hover:text-purple-400',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amkhaan',
      icon: <FaLinkedin className="w-7 h-7" />,
      color: 'hover:text-blue-400',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCui3HeIQp4aAnwiFvh5JSdQ',
      icon: <FaYoutube className="w-7 h-7" />,
      color: 'hover:text-red-400',
      gradient: 'from-red-500 to-red-700',
    },
  ]

  const platforms = [
    { name: 'LeetCode', url: 'https://leetcode.com/u/ahmadmuzzafar/', gradient: 'from-orange-500 to-yellow-500' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/amkhaan', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/fcc1d2725e8-449b-4a78-a62a-5e7df94509d5', gradient: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading">Get In Touch</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card mb-8 sm:mb-10 animate-fade-in">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4 sm:mb-6 animate-pulse-slow">
                <FaPaperPlane className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                I am available on these platforms. Feel free to message me, and I will reply within 24 hours.
                I can assist you regarding{' '}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">
                  Project Management, ML, AI, Web, and Infrastructure Development
                </span>
                .
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                  <div className="relative flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:-translate-y-1">
                    <div className={`flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br ${info.gradient} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <div className="text-xs sm:text-sm text-gray-400 font-semibold mb-1">{info.title}</div>
                      <div className="text-white font-bold text-sm sm:text-base break-words overflow-wrap-anywhere">{info.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="font-black text-xl sm:text-2xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Connect with me on
              </h3>
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={link.name}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-xl transition-opacity duration-300`}></div>
                    <div className={`relative p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 text-gray-300 ${link.color} transition-all duration-300 hover:scale-125 transform shadow-lg`}>
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-opacity duration-300`}></div>
                  <div className={`relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${platform.gradient} rounded-xl font-bold text-white hover:scale-110 transition-all duration-300 shadow-lg`}>
                    {platform.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className="text-center animate-scale-in">
            <a
              href="https://docs.google.com/document/d/159cMjd_tfdCQf1NOOrm4ZujBoLy1xjaFd9BhGMhH62I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
