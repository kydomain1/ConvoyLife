import { motion } from 'framer-motion'
import { categories } from '../data/blogData'

export default function About() {
  const team = [
    {
      name: 'Emma Wilson',
      role: 'Fashion & Style Expert',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Fashion enthusiast with 10+ years of experience in styling and trend forecasting.'
    },
    {
      name: 'Sophia Chen',
      role: 'Beauty & Wellness Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Certified skincare expert passionate about natural beauty and holistic wellness.'
    },
    {
      name: 'Michael Brown',
      role: 'Home & Design Curator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Interior designer helping people create beautiful, functional living spaces.'
    },
    {
      name: 'Isabella Martinez',
      role: 'Travel & Adventure Writer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      bio: 'Globe-trotter sharing authentic travel experiences from 50+ countries.'
    }
  ]

  const values = [
    {
      icon: '💫',
      title: 'Authenticity',
      description: 'We believe in honest reviews and genuine recommendations based on real experiences.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Promoting eco-friendly choices and sustainable lifestyle practices for a better future.'
    },
    {
      icon: '💝',
      title: 'Community',
      description: 'Building a supportive community where everyone can share their lifestyle journey.'
    },
    {
      icon: '✨',
      title: 'Quality',
      description: 'Curating only the best products, services, and experiences worth your time and money.'
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
              About ConvoyLife
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted companion for discovering the best in fashion, beauty, home, travel, finance, and food. 
              We're here to inspire and guide you toward a more fulfilling lifestyle.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-morandi-pink/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-morandi-sage/20 rounded-full blur-3xl"></div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="font-display text-4xl font-bold mb-6 text-gray-800">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  ConvoyLife was born from a simple idea: life is too short for mediocre experiences. 
                  We started this journey to help people discover products, services, and experiences 
                  that truly enhance their daily lives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What began as a small blog has grown into a comprehensive lifestyle platform, 
                  trusted by thousands of readers who value honest recommendations and expert insights. 
                  Every article, review, and guide is crafted with care, research, and real-world testing.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-morandi-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-gray-800">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to bringing you the best lifestyle content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-gradient-to-br from-morandi-pink/20 to-morandi-sage/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-gray-800">
              What We Cover
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across all aspects of modern living
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm text-gray-800">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly inspiration, exclusive tips, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 input-field"
              />
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

