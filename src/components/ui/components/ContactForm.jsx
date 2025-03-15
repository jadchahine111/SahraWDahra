"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  // Create refs for different sections to animate
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 })
  const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setIsSubmitted(true)
      setSubmitError(false)
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + custom * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  }

  const contactInfoItems = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+961 1 234 567", "+961 70 123 456"],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["contact@sahrawdahra.com", "support@sahrawdahra.com"],
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: ["Beirut, Lebanon", "Digital District, Floor 3"],
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-[#00637C]/10 text-[#00637C] text-sm font-medium rounded-full">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#00637C] ">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Sahra w Dahra? We'd love to hear from you. Fill out the form below and we'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-4 shadow-xl sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Contact Information - Left Side */}
            <motion.div
              ref={contactInfoRef}
              className="rounded-xl bg-[#00637C] p-6 text-white lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate={isContactInfoInView ? "visible" : "hidden"}
            >
              <motion.h3 className="mb-6 text-2xl font-bold" variants={itemVariants}>
                Contact Information
              </motion.h3>

              <motion.p className="mb-8 text-[#E0F2F7]" variants={itemVariants}>
                Reach out to us through any of these channels and we'll respond as quickly as possible.
              </motion.p>

              <div className="space-y-6">
                {contactInfoItems.map((item, index) => (
                  <motion.div key={index} className="flex items-start" variants={itemVariants}>
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F2F7]/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-[#E0F2F7]">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="mt-12 flex space-x-4" variants={itemVariants}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F2F7]/20 transition-colors hover:bg-[#E0F2F7]/40"
                    variants={socialVariants}
                    custom={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              ref={formRef}
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isFormInView ? 1 : 0, x: isFormInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  className="flex h-full flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold text-[#00637C]">Thank You!</h3>
                  <p className="mb-6 text-slate-600">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-lg bg-[#00637C] px-6 py-2.5 text-white transition-all hover:bg-[#00637C]/90"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 p-2 sm:p-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.name ? "border-red-500" : "border-slate-300"
                        } px-4 py-3 text-slate-900 focus:border-[#00637C] focus:outline-none focus:ring-1 focus:ring-[#00637C]`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        } px-4 py-3 text-slate-900 focus:border-[#00637C] focus:outline-none focus:ring-1 focus:ring-[#00637C]`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 10 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${
                        errors.subject ? "border-red-500" : "border-slate-300"
                      } px-4 py-3 text-slate-900 focus:border-[#00637C] focus:outline-none focus:ring-1 focus:ring-[#00637C]`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 10 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${
                        errors.message ? "border-red-500" : "border-slate-300"
                      } px-4 py-3 text-slate-900 focus:border-[#00637C] focus:outline-none focus:ring-1 focus:ring-[#00637C]`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </motion.div>

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-red-50 p-4 text-red-800"
                    >
                      <div className="flex">
                        <AlertCircle className="mr-2 h-5 w-5" />
                        <p>There was an error sending your message. Please try again.</p>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 10 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center rounded-lg bg-[#00637C] px-6 py-3 text-white transition-all hover:bg-[#00637C]/90 focus:outline-none focus:ring-2 focus:ring-[#00637C] focus:ring-offset-2 disabled:opacity-70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="mr-2 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

