import { motion } from 'framer-motion'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageChange = (page) => {
    onPageChange(page)
    scrollToTop()
  }

  return (
    <motion.div
      className="flex justify-center items-center space-x-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Previous Button */}
      <motion.button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
        }`}
        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pages.map((page) => (
          <motion.button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
              currentPage === page
                ? 'bg-primary text-white shadow-lg scale-110'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
            whileHover={{ scale: currentPage === page ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {page}
          </motion.button>
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
        }`}
        whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  )
}

