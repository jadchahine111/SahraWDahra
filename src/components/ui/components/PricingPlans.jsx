"use client"

import { useState, useEffect } from "react"
import { Check, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingPlans() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("pricing-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <section id="pricing-section" className="w-full py-16 md:py-24 bg-white text-gray-800 overflow-hidden relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your business</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Premium Plan */}
          <motion.div
            variants={item}
            className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#00637C]/10 hover:border-[#00637C]/30"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00637C] to-[#00637C]/50"></div>
            <div className="flex items-center mb-4">
              <div className="mr-3 rounded-full bg-[#00637C]/10 p-2">
                <CheckCircle className="h-6 w-6 text-[#00637C]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium Plan</h3>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">$5</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4 flex-grow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">
                  Verified <span className="text-blue-500 font-semibold">blue tick</span> to establish trust and
                  credibility
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Updated gallery and menu to attract more customers</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Ability to add videos to your profile</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Access to an exclusive search bar for Premium merchants</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Ability to list in multiple categories</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Boost on Sahra w Dahra's social channels</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-8 pt-4">
              <button className="w-full py-3 px-4 rounded-lg bg-[#00637C] text-white font-medium transition-all hover:bg-[#00637C]/90 focus:outline-none focus:ring-2 focus:ring-[#00637C] focus:ring-offset-2">
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* Premium Plus Plan */}
          <motion.div
            variants={item}
            className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#00637C]/10 hover:border-[#00637C]/30"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffd700] to-[#ffc800]/50"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ffd700]/10 blur-3xl"></div>
            <div className="flex items-center mb-4">
              <div className="mr-3 rounded-full bg-[#ffd700]/20 p-2">
                <CheckCircle className="h-6 w-6 text-[#ffd700]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium Plus Plan</h3>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">$7</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4 flex-grow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">
                  Verified <span className="text-[#ffd700] font-semibold">gold tick</span> to signify top-tier status
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">All features of the Premium Plan</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Collaborative content opportunities to enhance visibility</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-gray-700">Ability to feature ads on the platform</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-8 pt-4">
              <button className="w-full py-3 px-4 rounded-lg bg-[#ffd700] text-white font-medium transition-all hover:bg-[#ffd700]/90 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
