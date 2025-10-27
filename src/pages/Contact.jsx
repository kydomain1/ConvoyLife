import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      content: 'hello@convoylife.com',
      link: 'mailto:hello@convoylife.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      content: '123 Lifestyle Avenue, Suite 456',
      link: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ]

  const faqs = [
    {
      question: 'How can I contribute to ConvoyLife?',
      answer: 'We love hearing from our community! If you have a story to share or expertise in any of our categories, please reach out via the contact form with your pitch.'
    },
    {
      question: 'Do you accept product reviews?',
      answer: 'Yes! We review products that align with our values and would genuinely benefit our readers. Please contact us with details about your product for consideration.'
    },
    {
      question: 'How often do you publish new content?',
      answer: 'We publish new articles 2-3 times per week across our various categories. Subscribe to our newsletter to never miss an update!'
    },
    {
      question: 'Can I advertise on ConvoyLife?',
      answer: 'We offer various advertising opportunities for brands that align with our values. Contact us for our media kit and advertising options.'
    }
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morandi-pink/30 via-morandi-lavender/30 to-morandi-sage/30 py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you!
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-morandi-pink/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-morandi-sage/20 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {method.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-600">
                  {method.content}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-800 text-center">
                Send Us a Message
              </h2>
              
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="input-field resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-morandi-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-lg font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

