import { Link } from 'react-router-dom'
import SocialWidget from './SocialWidget'
import Logo from './Logo'
import { categories } from '../data/blogData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]


  return (
    <footer className="mt-auto bg-gradient-to-br from-morandi-pink/20 via-morandi-lavender/20 to-morandi-sage/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Your trusted source for lifestyle inspiration, product reviews, and expert recommendations across fashion, beauty, home, travel, finance, and food.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-800">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/?category=${category.id}`}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-gray-800">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Follow us on social media for daily inspiration and updates.
            </p>
            <SocialWidget />
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-2xl border-2 border-r-0 border-gray-200 focus:border-primary focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-primary hover:bg-morandi-rose text-white rounded-r-2xl transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} ConvoyLife. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

