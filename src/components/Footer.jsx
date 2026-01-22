import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-950 to-black border-t border-white/10">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full filter blur-3xl"></div>

      <div className="container-custom py-12 relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-3xl font-black bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] mb-2">
              Ahmad Muzaffar
            </h3>
            {/* Desktop view - horizontal with separators */}
            <p className="hidden md:block text-gray-400 text-sm font-medium">
              Technical Project Manager | AI Enthusiast | Multi Stack Developer
            </p>

            {/* Mobile view - vertical without separators */}
            <div className="md:hidden flex flex-col items-center gap-1 text-xs font-medium text-gray-400">
              <span>Technical Project Manager</span>
              <span>AI Enthusiast</span>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-500"></div>
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-secondary-500"></div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4">
            © {currentYear} Ahmad Muzaffar. All rights reserved.
          </p>

          {/* Bottom Gradient Glow */}
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
