import { motion } from "framer-motion"

export default function AppBadges() {
  return (
    // App Store Badges Section
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Google Play Store Badge */}
          <motion.a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="w-40 md:w-48 h-auto"
            />
          </motion.a>

          {/* Apple App Store Badge */}
          <motion.a
            href="https://apps.apple.com/us/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="w-36 md:w-44 h-auto"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
