"use client"

import { useRef } from "react"
import { Check, CheckCircle, Sparkles, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PricingPlans() {
  // Create refs for different sections
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const plansRef = useRef(null)
  const footerRef = useRef(null)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 })
  const isPlansInView = useInView(plansRef, { once: true, amount: 0.2 })
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.5 })

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
    <section
      id="pricing-section"
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-gray-50 text-gray-800 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-[#00637C]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#ffd700]/5 blur-3xl"></div>

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-[#00637C]/10 text-[#00637C] text-sm font-medium rounded-full">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#00637C] ">Pricing Plans</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business and start attracting more customers today
          </p>
        </motion.div>

        <motion.div
          ref={plansRef}
          variants={container}
          initial="hidden"
          animate={isPlansInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Premium Plan */}
          <motion.div
            variants={item}
            className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#00637C]/10 hover:border-[#00637C]/30 group"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00637C] to-[#00637C]/50"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00637C]/5 blur-3xl group-hover:bg-[#00637C]/10 transition-all duration-500"></div>

            <div className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-[#00637C]/10 p-2">
                    <CheckCircle className="h-6 w-6 text-[#00637C]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Premium Plan</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00637C]/5 text-xs font-medium text-[#00637C]">
                  Most Popular
                </div>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">$5</span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isPlansInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-3.5 flex-grow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Verified <span className="text-blue-500 font-semibold">blue tick</span> to establish trust and
                    credibility
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Updated gallery and menu to attract more customers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Ability to add videos to your profile</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Access to an exclusive search bar for Premium merchants
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Ability to list in multiple categories</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Boost on Sahra w Dahra's social channels</p>
                </div>

                {/* Spacer to ensure equal height */}
                <div className="hidden md:block">
                  <div className="h-[88px]"></div>
                </div>
              </motion.div>

              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 rounded-lg bg-[#00637C] text-white font-medium transition-all hover:bg-[#00637C]/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00637C] focus:ring-offset-2 flex items-center justify-center"
                >
                  <span>Get Started</span>
                </motion.button>
                <p className="text-xs text-center text-gray-500 mt-3">No credit card required</p>
              </div>
            </div>
          </motion.div>

          {/* Premium Plus Plan */}
          <motion.div
            variants={item}
            className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#ffd700]/10 hover:border-[#ffd700]/30 group"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ffd700] to-[#ffc800]/50"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ffd700]/5 blur-3xl group-hover:bg-[#ffd700]/10 transition-all duration-500"></div>

            <div className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-[#ffd700]/20 p-2">
                    <Star className="h-6 w-6 text-[#ffd700]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Premium Plus</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#ffd700]/10 text-xs font-medium text-[#ffd700]">
                  Best Value
                </div>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">$7</span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isPlansInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-3.5 flex-grow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Verified <span className="text-[#ffd700] font-semibold">gold tick</span> for top-tier status
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">All features of the Premium Plan</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Collaborative content opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Push notifications for offers and events</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Dedicated spot in "Event This Week" section</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Access to "SWD Selection" premium category</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Enhanced boost on social channels</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Monthly detailed report with advanced metrics</p>
                </div>
              </motion.div>

              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#ffd700] to-[#ffcc00] text-white font-medium transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 flex items-center justify-center"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Get Started</span>
                </motion.button>
                <p className="text-xs text-center text-gray-500 mt-3">Cancel anytime</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ or additional info */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Need help choosing the right plan?{" "}
            <a href="#contact" className="text-[#00637C] font-medium hover:underline">
              Contact our team
            </a>{" "}
            for personalized assistance
          </p>
        </motion.div>
      </div>
    </section>
  )
}

