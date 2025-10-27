import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../data/blogData'

export default function BlogCard({ article, index }) {
  const category = categories.find(cat => cat.id === article.category)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card group"
    >
      <Link to={`/blog/${article.slug}`}>
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center space-x-2 shadow-md">
            <span className="text-lg">{category.icon}</span>
            <span className="text-sm font-medium text-gray-800">{category.name}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(article.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {article.author}</span>
            <span className="text-primary font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

