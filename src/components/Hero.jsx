import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
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
    {
      name: 'Email',
      url: 'mailto:ahmadmuzaffar.cs@gmail.com',
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="container-custom text-center">
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-xl">
            AM
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Ahmad Muzaffar
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
          Project Manager | AI Enthusiast | Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          A passionate individual who always thrives to work on end to end projects which develop
          sustainable and scalable social and technical systems to create impact.
        </p>

        <div className="flex justify-center gap-6 mb-8">
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/document/d/159cMjd_tfdCQf1NOOrm4ZujBoLy1xjaFd9BhGMhH62I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View Resume
          </a>
          <a href="#contact" className="btn-secondary inline-block">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
