"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function WhyChooseUs() {
  // Create refs for different sections to animate
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const timelineRef = useRef(null)
  const item1Ref = useRef(null)
  const item2Ref = useRef(null)
  const item3Ref = useRef(null)

  // State for timeline height
  const [timelineHeight, setTimelineHeight] = useState(0)
  const [timelineTop, setTimelineTop] = useState(0)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isBadgeInView = useInView(badgeRef, { once: true, amount: 0.5 })
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const isItem1InView = useInView(item1Ref, { once: true, amount: 0.5 })
  const isItem2InView = useInView(item2Ref, { once: true, amount: 0.5 })
  const isItem3InView = useInView(item3Ref, { once: true, amount: 0.5 })

  // Calculate timeline height based on the position of items
  useEffect(() => {
    const calculateTimelineDimensions = () => {
      if (item1Ref.current && item3Ref.current) {
        // Get the position of the first circle
        const item1Rect = item1Ref.current.getBoundingClientRect()
        const item1Circle = item1Ref.current.querySelector("div")
        const item1CircleRect = item1Circle.getBoundingClientRect()

        // Get the position of the last circle
        const item3Rect = item3Ref.current.getBoundingClientRect()
        const item3Circle = item3Ref.current.querySelector("div")
        const item3CircleRect = item3Circle.getBoundingClientRect()

        // Calculate the top position (relative to the first item)
        const top = item1CircleRect.height / 2
        setTimelineTop(top)

        // Calculate the height (distance between first and last item + half of last circle height)
        const height = item3CircleRect.top - item1CircleRect.top + item3CircleRect.height / 2
        setTimelineHeight(height)
      }
    }

    // Calculate on initial render and window resize
    calculateTimelineDimensions()
    window.addEventListener("resize", calculateTimelineDimensions)

    // Recalculate after a short delay to ensure all elements are properly rendered
    const timeoutId = setTimeout(calculateTimelineDimensions, 500)

    return () => {
      window.removeEventListener("resize", calculateTimelineDimensions)
      clearTimeout(timeoutId)
    }
  }, [isSectionInView]) // Recalculate when section comes into view

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 bg-white to-slate-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <motion.div
            ref={imageRef}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isImageInView ? 1 : 0,
              scale: isImageInView ? 1 : 0.95,
            }}
            transition={{ duration: 0.7 }}
          >
            <img src="/image2.png" alt="Business listing benefits" className="object-cover w-full h-full" />
          </motion.div>

          {/* Right side - Timeline content */}
          <div className="space-y-12 relative">
            <motion.div
              className="flex flex-col space-y-4 px-2 md:col-span-3 md:pr-4 lg:pr-8 xl:pr-12"
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
                Why Choose Us?
              </motion.div>

              <motion.h2
                ref={headingRef}
                className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#00637C]"
                               initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeadingInView ? 1 : 0, y: isHeadingInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Why List Your Business on Sahra w Dahra?
              </motion.h2>
            </motion.div>

            {/* Timeline items container */}
            <div className="relative">
              {/* Timeline line - now dynamically sized */}
              <motion.div
                ref={timelineRef}
                className="absolute left-[19px] w-[2px] bg-[#00637C]/20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isSectionInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  transformOrigin: "top",
                  top: `${timelineTop}px`,
                  height: `${timelineHeight}px`,
                }}
              ></motion.div>

              {/* Item 1 */}
              <motion.div
                ref={item1Ref}
                className="relative pl-12 mb-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isItem1InView ? 1 : 0, x: isItem1InView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: isItem1InView ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.4,
                  }}
                >
                  <span className="text-[#00637C] font-bold">1</span>
                </motion.div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Enhanced Visibility</h3>
                <p className="text-gray-600">
                  Your business will be seen by thousands of users actively searching for venues like yours.
                </p>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                ref={item2Ref}
                className="relative pl-12 mb-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isItem2InView ? 1 : 0, x: isItem2InView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: isItem2InView ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.6,
                  }}
                >
                  <span className="text-[#00637C] font-bold">2</span>
                </motion.div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Targeted Audience</h3>
                <p className="text-gray-600">
                  Sahra w Dahra connects you with locals and tourists who are ready to explore dining, nightlife, and
                  leisure activities.
                </p>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                ref={item3Ref}
                className="relative pl-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isItem3InView ? 1 : 0, x: isItem3InView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: isItem3InView ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.8,
                  }}
                >
                  <span className="text-[#00637C] font-bold">3</span>
                </motion.div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Increased Engagement</h3>
                <p className="text-gray-600">
                  Our advanced filters and detailed profiles make it easy for users to choose your business over
                  competitors.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

