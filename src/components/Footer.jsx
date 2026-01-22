import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            Made with <FaHeart className="text-red-500" /> by Ahmad Muzaffar
          </p>
          <p className="text-gray-400 text-sm">
            © {currentYear} Ahmad Muzaffar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
