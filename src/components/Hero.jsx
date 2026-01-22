import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaRocket } from 'react-icons/fa'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only apply mouse effect on larger screens (desktop)
      if (window.innerWidth >= 1024) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 20 - 10,
          y: (e.clientY / window.innerHeight) * 20 - 10,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AMKhaan',
      icon: <FaGithub className="w-7 h-7" />,
      color: 'hover:text-purple-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amkhaan',
      icon: <FaLinkedin className="w-7 h-7" />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCui3HeIQp4aAnwiFvh5JSdQ',
      icon: <FaYoutube className="w-7 h-7" />,
      color: 'hover:text-red-400',
    },
    {
      name: 'Email',
      url: 'mailto:ahmadmuzaffar.cs@gmail.com',
      icon: <FaEnvelope className="w-7 h-7" />,
      color: 'hover:text-pink-400',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pb-24 md:pb-32 w-full"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className="container-custom text-center relative z-10 w-full"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Avatar with Glow Effect */}
        <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full blur-2xl opacity-60 animate-pulse-slow"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6 rounded-full shadow-2xl border-4 border-white/30 backdrop-blur-sm hover:scale-110 transition-transform duration-500 overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Ahmad Muzaffar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online status dot - positioned on the border edge at top-right */}
            <div className="absolute top-[8%] right-[8%] bg-green-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-slate-900 animate-pulse z-10"></div>
          </div>
        </div>

        {/* Name with Gradient Animation */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 animate-slide-up">
          <span className="inline-block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            Ahmad Muzaffar
          </span>
        </h1>

        {/* Role with Icon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-slide-up px-4" style={{animationDelay: '0.1s'}}>
          <div className="hidden md:block h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary-400"></div>

          {/* Desktop view - horizontal with separators */}
          <h2 className="hidden md:block text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 font-bold tracking-wide text-center">
            <span className="text-primary-400">Technical Project Manager</span>
            <span className="text-gray-400 mx-1 sm:mx-2">|</span>
            <span className="text-secondary-400">AI Enthusiast</span>
            <span className="text-gray-400 mx-1 sm:mx-2">|</span>
            <span className="text-accent-400">Multi Stack Developer</span>
          </h2>

          {/* Mobile view - vertical without separators */}
          <div className="md:hidden flex flex-col items-center gap-2 text-sm sm:text-base font-bold">
            <span className="text-primary-400">Technical Project Manager</span>
            <span className="text-accent-400">AI Enthusiast</span>
          </div>

          <div className="hidden md:block h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent-400"></div>
        </div>

        {/* Description with Glassmorphism */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 animate-scale-in" style={{animationDelay: '0.2s'}}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed glass-effect p-4 sm:p-6 md:p-8 shadow-2xl">
            A passionate individual who always thrives to work on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-semibold">
              end-to-end projects
            </span>{' '}
            which develop sustainable and scalable social and technical systems to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400 font-semibold">
              create impact
            </span>
            .
          </p>
        </div>

        {/* Social Links with Hover Effects */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group text-gray-300 ${link.color} transition-all duration-300 hover:scale-125 transform`}
              aria-label={link.name}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-3 sm:p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(148,163,184,0.5)]">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.5s'}}>
          <a
            href="https://docs.google.com/document/d/159cMjd_tfdCQf1NOOrm4ZujBoLy1xjaFd9BhGMhH62I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 group"
          >
            <FaRocket className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="relative z-10">View Resume</span>
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
