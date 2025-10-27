import { useState, useMemo, useEffect, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, articles } from '../data/blogData'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import Pagination from '../components/Pagination'

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchKey, setSearchKey] = useState(0) // Key to force SearchBar reset
  const articlesPerPage = 6
  
  // Update selectedCategory when URL parameter changes
  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl)
      setCurrentPage(1)
    }
  }, [categoryFromUrl])

  // Filter articles
  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  // Reset to page 1 when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    // Clear search when selecting "All Categories"
    if (category === 'all') {
      setSearchQuery('')
      setSearchParams({})
      setSearchKey(prev => prev + 1) // Force SearchBar to reset
    } else {
      setSearchParams({ category })
    }
    // Scroll to articles section
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morandi-pink/30 via-morandi-lavender/30 to-morandi-sage/30 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome to ConvoyLife
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover inspiring stories, expert advice, and curated recommendations for a better lifestyle
            </p>
            <SearchBar key={searchKey} onSearch={handleSearch} />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-morandi-pink/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-morandi-sage/20 rounded-full blur-3xl"></div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search Results Info */}
          {(searchQuery || selectedCategory !== 'all') && filteredArticles.length > 0 && (
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-gray-600 text-lg">
                Found <span className="font-semibold text-primary">{filteredArticles.length}</span> article{filteredArticles.length !== 1 ? 's' : ''}
                {searchQuery && (
                  <>
                    {' '}for <span className="font-semibold text-primary">"{searchQuery}"</span>
                  </>
                )}
                {selectedCategory !== 'all' && (
                  <>
                    {' '}in <span className="font-semibold text-primary">{categories.find(c => c.id === selectedCategory)?.name}</span>
                  </>
                )}
              </p>
            </motion.div>
          )}

          {currentArticles.length > 0 ? (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentArticles.map((article, index) => (
                  <BlogCard key={article.id} article={article} index={index} />
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-2">
                {searchQuery ? (
                  <>No results for <span className="font-semibold">"{searchQuery}"</span></>
                ) : (
                  <>No articles in this category</>
                )}
              </p>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filter to find what you're looking for
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gradient-to-br from-morandi-cream to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-gray-800">
              Explore Our Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From fashion to finance, discover expert insights across all aspects of modern living
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer ${
                  selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm text-gray-800">
                  {category.name}
                </h3>
                {selectedCategory === category.id && (
                  <motion.div
                    className="mt-2 text-primary text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Selected
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

