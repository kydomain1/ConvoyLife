import { motion } from 'framer-motion'

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const allCategory = { id: 'all', name: 'All Categories', icon: '✨', color: 'morandi-cream' }
  const allCategories = [allCategory, ...categories]

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-3 min-w-max">
        {allCategories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
            {selectedCategory === category.id && (
              <motion.span
                className="bg-white/30 px-2 py-0.5 rounded-full text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                ✓
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

