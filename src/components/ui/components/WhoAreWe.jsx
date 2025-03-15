"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  // Create refs for different sections to animate
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef(null)
  const statsRef = useRef(null)
  const imageRef = useRef(null)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isBadgeInView = useInView(badgeRef, { once: true, amount: 0.5 })
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isParagraphInView = useInView(paragraphRef, { once: true, amount: 0.5 })
  const isButtonsInView = useInView(buttonsRef, { once: true, amount: 0.5 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-50">
      <div className="container relative z-10 mx-auto px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        {/* Switch to single column on mobile, 5 columns on larger screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-center md:gap-4 lg:gap-0">
          {/* Left content - full width on mobile, 3/5 on larger screens */}
          <motion.div
            className="flex flex-col space-y-4 px-2 md:col-span-3 md:pl-4 md:pr-4 lg:pl-8 lg:pr-8 xl:pl-20 xl:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isSectionInView ? 1 : 0, x: isSectionInView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              ref={badgeRef}
              className="mb-3 inline-block w-fit rounded-full bg-[#00637C]/10 px-4 py-1.5 text-sm font-medium text-[#00637C]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isBadgeInView ? 1 : 0, y: isBadgeInView ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              Welcome to Sahra w Dahra
            </motion.div>

            <motion.h1
              ref={headingRef}
              className="text-2xl font-bold leading-tight tracking-tight text-[#00637C] sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHeadingInView ? 1 : 0, y: isHeadingInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Who We Are?
            </motion.h1>

            <motion.p
              ref={paragraphRef}
              className="text-base leading-relaxed text-slate-600 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isParagraphInView ? 1 : 0, y: isParagraphInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sahra w Dahra is a cutting-edge mobile application designed to help users explore the best venues and
              experiences across Lebanon. From restaurants and pubs to resorts and rooftop lounges, our platform
              connects users with the places they love while providing businesses with an unmatched opportunity to reach
              a wider audience.
            </motion.p>

            <motion.div
              ref={buttonsRef}
              className="flex flex-col space-y-4 pt-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 sm:pt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isButtonsInView ? 1 : 0, y: isButtonsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="rounded-lg bg-[#00637C] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#00637C]/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00637C] focus:ring-offset-2">
                Get Started
              </button>
              <a href="#learn-more" className="text-sm font-medium text-[#00637C] hover:underline">
                Learn more →
              </a>
            </motion.div>

            {/* Social proof or stats - improved for mobile */}
            <motion.div
              ref={statsRef}
              className="mt-2 flex flex-wrap gap-4 pt-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isStatsInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#00637C] sm:text-2xl">1000+</span>
                <span className="text-xs text-slate-500">Venues</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#00637C] sm:text-2xl">50K+</span>
                <span className="text-xs text-slate-500">Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#00637C] sm:text-2xl">4.8/5</span>
                <span className="text-xs text-slate-500">App Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image - centered on mobile, 2/5 on larger screens */}
          <motion.div
            ref={imageRef}
            className="flex justify-center py-6 md:col-span-2 md:py-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isImageInView ? 1 : 0, x: isImageInView ? 0 : 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 w-[240px] sm:w-[260px] md:w-[220px] lg:w-[260px] xl:w-[280px]">
              <div className="relative h-full w-full">
                <img
                  src="/image.png"
                  alt="iPhone Mockup"
                  width={500}
                  height={1000}
                  className="h-auto w-full object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=1000&width=500"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

