import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  // 实时搜索（带防抖）
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300) // 300ms延迟，避免频繁触发

    return () => clearTimeout(timer)
  }, [query, onSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, topics, or keywords..."
          className="w-full h-14 px-6 pl-14 pr-36 rounded-3xl border-2 border-gray-200 focus:border-primary focus:outline-none shadow-lg text-gray-700 placeholder-gray-400"
        />
        
        {/* Search Icon */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Clear Button */}
        {query && (
          <motion.button
            type="button"
            onClick={handleClear}
            className="absolute right-32 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}

        {/* Search Button */}
        <motion.button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-morandi-rose text-white px-5 py-2.5 rounded-2xl font-medium transition-colors duration-300 shadow-md z-10 whitespace-nowrap h-10 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
      </div>
    </motion.form>
  )
}

