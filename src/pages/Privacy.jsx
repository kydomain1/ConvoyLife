import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morandi-pink/30 via-morandi-lavender/30 to-morandi-sage/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Last Updated: October 27, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At ConvoyLife, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit 
                our website and tell you about your privacy rights.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Identity Data:</strong> First name, last name, username</li>
                <li><strong>Contact Data:</strong> Email address, phone numbers</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Information about how you use our website</li>
                <li><strong>Marketing Data:</strong> Your preferences in receiving marketing communications</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use 
                your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit 
                access to your personal data to those employees, agents, contractors and other third parties 
                who have a business need to know.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Your Legal Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your 
                personal data, including the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Email:</strong> privacy@convoylife.com</p>
                <p><strong>Website:</strong> www.convoylife.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

