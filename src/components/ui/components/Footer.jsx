"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#00637C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and App Download Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Replace with your actual logo */}
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Footer.png" alt="" />
            </div>

            <p className="text-sm text-gray-100 mb-6 max-w-md">
              Discover the best venues and rentals across Lebanon. Your ultimate guide to dining, nightlife, and
              accommodations.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=your.app.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="w-36 h-auto"
                />
              </a>

              {/* Apple App Store Badge */}
              <a
                href="https://apps.apple.com/us/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-32 h-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-[#ffffff33] pb-2">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 sm:gap-4">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-gray-300 transition-colors duration-200">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-300 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-[#ffffff33] mt-8 pt-6 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Sahra W Dahra. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

