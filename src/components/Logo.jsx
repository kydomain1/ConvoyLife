import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="url(#gradient1)"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8Z"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M20 12L23 18H17L20 12Z M14 22H26 M16 26L20 22L24 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#E8C4C4" />
              <stop offset="50%" stopColor="#D4C5D8" />
              <stop offset="100%" stopColor="#C8D5B9" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#E5B8B8" />
              <stop offset="100%" stopColor="#B8C9D8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          ConvoyLife
        </span>
        <span className="text-xs text-gray-500 font-medium tracking-wide">
          Lifestyle & More
        </span>
      </div>
    </motion.div>
  )
}

