import { motion } from "framer-motion"


export default function WhyChooseUs() {
    return (
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/image2.png"
                alt="Business listing benefits"
                className="object-cover w-full h-full"
              />
            </div>
  
            {/* Right side - Timeline content */}
            <div className="space-y-12 relative">

            <motion.div
            className="flex flex-col space-y-4 px-2 md:col-span-3  md:pr-4 lg:pr-8 xl:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-3 inline-block w-fit rounded-full bg-[#00637C]/10 px-4 py-1.5 text-sm font-medium text-[#00637C]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Why Choose Us?
            </motion.div>

            <motion.h1
              className="text-2xl font-bold leading-tight tracking-tight text-[#00637C] sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                Why List Your Business on Sahra w Dahra?
            </motion.h1>
            </motion.div>

            {/* Left content - full width on mobile, 3/5 on larger screens */}
              {/* Timeline line */}
              <div className="absolute left-[18px] top-[250px] bottom-[30px] w-[2px] bg-[#00637C]/20"></div>
  
              {/* Item 1 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center">
                  <span className="text-[#00637C] font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Enhanced Visibility</h3>
                <p className="text-gray-600">
                  Your business will be seen by thousands of users actively searching for venues like yours.
                </p>
              </div>
  
              {/* Item 2 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center">
                  <span className="text-[#00637C] font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Targeted Audience</h3>
                <p className="text-gray-600">
                  Sahra w Dahra connects you with locals and tourists who are ready to explore dining, nightlife, and
                  leisure activities.
                </p>
              </div>
  
              {/* Item 3 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-white border-4 border-[#00637C] flex items-center justify-center">
                  <span className="text-[#00637C] font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#00637C] mb-2">Increased Engagement</h3>
                <p className="text-gray-600">
                  Our advanced filters and detailed profiles make it easy for users to choose your business over
                  competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  