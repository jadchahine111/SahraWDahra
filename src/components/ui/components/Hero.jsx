"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Hero() {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Create refs for different sections to animate
  const sectionRef = useRef(null)
  const navRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef(null)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isNavInView = useInView(navRef, { once: true, amount: 0.5 })
  const isBadgeInView = useInView(badgeRef, { once: true, amount: 0.5 })
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isParagraphInView = useInView(paragraphRef, { once: true, amount: 0.5 })
  const isButtonsInView = useInView(buttonsRef, { once: true, amount: 0.5 })

  // Track which section is in view for navbar highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const checkActiveSection = () => {
      const scrollY = window.scrollY

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id")
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100 // Offset for navbar height

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      // If we're at the top of the page, set home as active
      if (scrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", checkActiveSection)

    // Check on initial load
    checkActiveSection()

    return () => {
      window.removeEventListener("scroll", checkActiveSection)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      // Add more event listeners for debugging
      const handleLoadedData = () => {
        setVideoLoaded(true)
      }

      const handleError = (e) => {
        setVideoError("Failed to load video")
      }

      const handlePlay = () => {
        setIsPlaying(true)
      }

      const handlePause = () => {
        setIsPlaying(false)
      }

      // Add event listeners
      videoElement.addEventListener("loadeddata", handleLoadedData)
      videoElement.addEventListener("error", handleError)
      videoElement.addEventListener("play", handlePlay)
      videoElement.addEventListener("pause", handlePause)

      // Attempt to play the video after a short delay
      // This can help with some browser restrictions
      setTimeout(() => {
        console.log("Attempting to play video...")
        const playPromise = videoElement.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Autoplay successful")
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Autoplay prevented:", error)
              setIsPlaying(false)
            })
        } else {
          console.log("Play promise is undefined, browser might be older")
        }
      }, 1000)

      // Clean up event listeners
      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData)
        videoElement.removeEventListener("error", handleError)
        videoElement.removeEventListener("play", handlePlay)
        videoElement.removeEventListener("pause", handlePause)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Custom NavLink component with animated underline
  const NavLink = ({ section, children }) => {
    const isActive = activeSection === section

    return (
      <button
        onClick={() => scrollToSection(section)}
        className={`${
          scrolled ? "text-gray-800" : "text-white"
        } hover:text-[#00637C] transition-colors duration-200 relative py-2`}
      >
        {children}
        {/* Animated underline */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-[#00637C] w-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        )}
      </button>
    )
  }

  // Mobile NavLink component
  const MobileNavLink = ({ section, children, onClick }) => {
    const isActive = activeSection === section

    return (
      <button
        onClick={() => {
          scrollToSection(section)
          onClick && onClick()
        }}
        className="text-white hover:text-gray-300 transition-colors duration-200 py-2 relative w-full text-left"
      >
        <div className="flex items-center justify-between">
          <span>{children}</span>
          {isActive && (
            <motion.div
              className="h-0.5 bg-white w-2"
              initial={{ width: 0 }}
              animate={{ width: "8px" }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </button>
    )
  }

  return (
    <>
      <section ref={sectionRef} id="home" className="relative w-full h-[100vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {videoError ? (
            // Fallback image if video fails to load
            <div className="absolute inset-0 bg-gray-900">
              <img
                src="/placeholder.svg?height=1080&width=1920"
                alt="Lebanon scenery"
                className="absolute object-cover w-full h-full opacity-70"
              />
            </div>
          ) : (
            <video
              ref={videoRef}
              className="absolute object-cover w-full h-full z-10"
              loop
              muted
              playsInline
              poster="/placeholder.svg?height=1080&width=1920"
              preload="auto"
            >
              {/* Make sure this path is correct relative to your public folder */}
              <source src="/video.mp4" type="video/mp4" />
              {/* Add additional formats for better browser compatibility */}
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Overlay to make text more readable */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Play button removed as requested */}
        </div>

        {/* Navigation */}
        <motion.nav
          ref={navRef}
          className={`fixed top-0 left-0 right-0 z-20 w-full transition-all duration-300 ${
            scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isNavInView ? 1 : 0, y: isNavInView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("home")
                }}
                className="flex items-center"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src="/logo.png"
                    alt="Sahra w Dahra"
                    className="w-12 h-auto sm:w-14 md:w-16 lg:w-20 xl:w-18 object-contain"
                  />
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink section="home">
                  Home
                </NavLink>
                <NavLink section="about">
                  About
                </NavLink>
                <NavLink section="why-choose-us">
                  Why Choose Us
                </NavLink>
                <NavLink section="pricing">
                  Pricing
                </NavLink>
                <NavLink section="contact">
                  Contact
                </NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <motion.div initial={false} animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  {isMenuOpen ? (
                    <X size={24} className={scrolled ? "text-[#00637C]" : "text-white"} />
                  ) : (
                    <Menu size={24} className={scrolled ? "text-[#00637C]" : "text-white"} />
                  )}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation with AnimatePresence for smooth exit */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-[#00637C] bg-opacity-95 absolute w-full overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className="container mx-auto px-4 py-4">
                  <motion.div
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <MobileNavLink section="home" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </MobileNavLink>
                    <MobileNavLink section="about" onClick={() => setIsMenuOpen(false)}>
                      About
                    </MobileNavLink>
                    <MobileNavLink section="why-choose-us" onClick={() => setIsMenuOpen(false)}>
                      Why Choose Us
                    </MobileNavLink>
                    <MobileNavLink section="pricing" onClick={() => setIsMenuOpen(false)}>
                      Pricing
                    </MobileNavLink>
                    <MobileNavLink section="contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </MobileNavLink>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              ref={badgeRef}
              className="mb-3 inline-block w-fit rounded-full bg-[#00637C]/50 px-4 py-1.5 text-sm font-medium text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isBadgeInView ? 1 : 0, y: isBadgeInView ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              Your guide to Lebanon
            </motion.div>

            <motion.h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHeadingInView ? 1 : 0, y: isHeadingInView ? 0 : 20 }}
              transition={{ duration: 0.7 }}
            >
              Discover Lebanon's Hidden Gems
            </motion.h1>

            <motion.p
              ref={paragraphRef}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isParagraphInView ? 1 : 0, y: isParagraphInView ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              From breathtaking mountains to pristine beaches, explore the best venues and experiences Lebanon has to
              offer.
            </motion.p>

            <motion.div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isButtonsInView ? 1 : 0, y: isButtonsInView ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <button
                onClick={() => scrollToSection("pricing")}
                className="bg-[#00637C] hover:bg-[#00536A] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Check Pricings
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white hover:bg-gray-100 text-[#00637C] font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}