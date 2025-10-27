import { motion } from 'framer-motion'

export default function Cookies() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morandi-sage/30 via-morandi-mint/30 to-morandi-blue/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Cookie Policy
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
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and provide 
                information to the owners of the site. ConvoyLife uses cookies to improve your browsing 
                experience and provide personalized content.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🍪 Strictly Necessary Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are essential for you to browse the website and use its features. Without 
                  these cookies, services you have asked for cannot be provided.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Performance Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies collect information about how visitors use a website, such as which pages 
                  visitors go to most often. These cookies don't collect information that identifies a visitor.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">⚙️ Functionality Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies allow the website to remember choices you make and provide enhanced, more 
                  personalized features.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🎯 Targeting Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report 
                usage statistics of the service and deliver advertisements. These include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Google Analytics (for website analytics)</li>
                <li>Social media platforms (for social sharing features)</li>
                <li>Advertising partners (for relevant ads)</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can set or amend 
                your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
                you may still use our website though your access to some functionality and areas may be 
                restricted.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most web browsers allow some control of most cookies through the browser settings. To find 
                out more about cookies, including how to see what cookies have been set and how to manage 
                and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">Questions About Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Email:</strong> cookies@convoylife.com</p>
                <p><strong>Website:</strong> www.convoylife.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

