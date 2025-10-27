import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getArticleBySlug, categories } from '../data/blogData'
import ProductCard from '../components/ProductCard'
import SocialWidget from '../components/SocialWidget'

export default function BlogPost() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return <Navigate to="/" replace />
  }

  const category = categories.find(cat => cat.id === article.category)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 py-12"
    >
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-700">{article.title}</span>
        </nav>

        {/* Category Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <span className="text-2xl">{category.icon}</span>
          <span className="font-medium text-gray-800">{category.name}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {article.title}
        </motion.h1>

        {/* Meta Information */}
        <motion.div
          className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b-2 border-gray-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-800">{article.author}</p>
              <p className="text-sm text-gray-500">Author</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(article.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{article.readTime}</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-12 shadow-xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="article-content mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-morandi-cream rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Share Section */}
        <motion.div
          className="bg-gradient-to-br from-morandi-pink/20 to-morandi-lavender/20 rounded-3xl p-8 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold mb-4 text-gray-800">
            Share This Article
          </h3>
          <p className="text-gray-600 mb-4">
            Found this helpful? Share it with your friends and followers!
          </p>
          <SocialWidget />
        </motion.div>

        {/* Recommended Products */}
        {article.products && article.products.length > 0 && (
          <motion.section
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-4 text-gray-800">
                Recommended Products
              </h2>
              <p className="text-gray-600">
                Curated selections mentioned in this article
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Back to Home */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All Articles</span>
          </Link>
        </motion.div>
      </article>
    </motion.main>
  )
}

