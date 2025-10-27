import { motion } from 'framer-motion'

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {product.price}
          </span>
          <motion.a
            href={product.link}
            className="px-4 py-2 bg-primary hover:bg-morandi-rose text-white rounded-xl text-sm font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Product
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

