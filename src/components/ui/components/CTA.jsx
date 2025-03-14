"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CTA() {
  // Track if the screen is wider than 873px
  const [isWideScreen, setIsWideScreen] = useState(true)

  useEffect(() => {
    // Function to check window width and update state
    const checkWidth = () => {
      setIsWideScreen(window.innerWidth >= 875)
    }

    // Check width initially
    checkWidth()

    // Add event listener for resize
    window.addEventListener("resize", checkWidth)

    // Clean up
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  return (
    <div className="w-full bg-white flex items-center justify-center p-4 md:p-8">
      {/* Wrapper to enable the image to overlap */}
      <div className="relative w-full max-w-7xl">
        {/* Right side with phone mockup - only show if screen width >= 873px */}
        {isWideScreen && (
          <motion.div
            className="absolute w-full md:w-1/2 flex items-center justify-center right-0 md:right-[-3%] sm:top-[-25%] md:top-[-38%] lg:top-[-47.5%] xl:top-[-47.5%] z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px]">
              <img src="/image3.png" alt="Property app interface" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
        )}

        {/* Blue box with updated color and padding */}
        <motion.div
          className="w-full max-w-7xl bg-[#00637C] rounded-3xl overflow-hidden flex flex-col md:flex-row relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left side content */}
          <div
            className={`w-full ${isWideScreen ? "md:w-3/5" : ""} p-6 md:p-12 flex flex-col justify-center text-white`}
          >
            <motion.h1
              className="sm:text-4xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore Lebanon's Best Spots!
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-base lg:text-lg opacity-90 mb-6 md:mb-8"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore Lebanon's top venues and rentals effortlessly. Find the best spots for dining, nightlife, and
              stays.
            </motion.p>

            <motion.div
              className="flex gap-3 md:gap-4 align-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=your.app.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="w-40 md:w-50 h-auto"
                />
              </a>

              {/* Apple App Store Badge */}
              <a href="https://apps.apple.com/us/app/your-app-id" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-32 md:w-40 h-auto mt-3"
                />
              </a>
            </motion.div>
          </div>

          {/* Right side spacer to maintain layout with absolute image - only show if screen width >= 873px */}
          {isWideScreen && <div className="hidden md:block md:w-2/5"></div>}
        </motion.div>
      </div>
    </div>
  )
}

