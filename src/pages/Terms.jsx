import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morandi-blue/30 via-morandi-lavender/30 to-morandi-pink/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Terms of Service
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
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using ConvoyLife, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials (information or software) on 
                ConvoyLife's website for personal, non-commercial transitory viewing only. This is the 
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The materials on ConvoyLife's website are provided on an 'as is' basis. ConvoyLife makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, fitness 
                for a particular purpose, or non-infringement of intellectual property or other violation 
                of rights.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Content Guidelines</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content published on ConvoyLife is for informational purposes only. We strive to 
                provide accurate and up-to-date information, but we make no representations or warranties 
                of any kind about:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The completeness, accuracy, reliability, or availability of the content</li>
                <li>Any product recommendations or reviews</li>
                <li>External links to third-party websites</li>
                <li>User-generated content or comments</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall ConvoyLife or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on ConvoyLife's website, even if ConvoyLife 
                or a ConvoyLife authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Revisions</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on ConvoyLife's website could include technical, typographical, or 
                photographic errors. ConvoyLife does not warrant that any of the materials on its website 
                are accurate, complete or current. ConvoyLife may make changes to the materials contained 
                on its website at any time without notice.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Email:</strong> legal@convoylife.com</p>
                <p><strong>Website:</strong> www.convoylife.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

