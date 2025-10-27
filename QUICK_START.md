# 🚀 Quick Start Guide - ConvoyLife Blog

Welcome! Here's how to get your ConvoyLife blog up and running in minutes.

## ⚡ Fastest Way to Start

### Windows Users:
Simply double-click `start.bat` file - it will:
1. Install all dependencies automatically
2. Start the development server
3. Open your browser to the website

### Mac/Linux Users:
1. Make the script executable: `chmod +x start.sh`
2. Run: `./start.sh`

## 📋 Manual Installation

If you prefer to do it manually:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## 🎨 What You'll See

Once started, you'll have access to:

### Home Page (/)
- Hero section with search bar
- Category filters (All, Fashion, Beauty, Home, Travel, Finance, Food)
- Blog article grid with beautiful cards
- Pagination (6 articles per page)
- Featured categories section

### Blog Articles (/blog/:slug)
- Full article content with images
- Product recommendations
- Social sharing
- Tags and metadata
- Related categories

### About Page (/about)
- Company story
- Team members
- Core values
- Category overview

### Contact Page (/contact)
- Contact form
- Contact methods (Email, Location, Phone)
- FAQ section

## 🎯 Key Features to Test

### Search Functionality
1. Click the search bar on the home page
2. Try searching for: "fashion", "skincare", "travel", "finance"
3. Results update instantly

### Category Filtering
1. Click any category badge (Fashion, Beauty, etc.)
2. Articles filter to show only that category
3. Click "All Categories" to reset

### Pagination
1. Scroll to bottom of home page
2. Click page numbers to navigate
3. Page smoothly scrolls to top

### Responsive Design
1. Resize your browser window
2. Try on mobile device (press F12 → Toggle device toolbar)
3. Menu becomes mobile-friendly hamburger menu

### Animations
- Hover over any card to see lift effect
- Watch page transitions when navigating
- Notice smooth scroll behaviors

## 📱 Mobile Testing

Press F12 in your browser and click the device toggle button to test:
- iPhone 12/13
- iPad
- Galaxy S20
- Other devices

## 🎨 Design Features

The website uses a **Morandi color palette** with:
- Soft pink (#E8C4C4)
- Gentle lavender (#D4C5D8)
- Sage green (#C8D5B9)
- Cream background (#F5EFE7)

All corners are rounded, animations are smooth, and the overall feel is warm and inviting.

## 📚 5 Pre-loaded Articles

1. **Summer Fashion Essentials** (Jan 2025)
   - Category: Fashion & Accessories
   - 3 product recommendations

2. **Natural Skincare Routine** (Mar 2025)
   - Category: Health & Beauty
   - 3 product recommendations

3. **Transform Your Living Room** (May 2025)
   - Category: Home & Garden
   - 3 product recommendations

4. **Hidden Gems of Europe** (Jun 2025)
   - Category: Travel & Accommodation
   - 3 product recommendations

5. **Building an Emergency Fund** (Aug 2025)
   - Category: Finance & Insurance
   - 3 product recommendations

Each article has:
- High-quality images from Unsplash
- Comprehensive content (800-1200 words)
- Multiple images throughout
- Product recommendations with images and prices
- Tags for easy searching

## 🛠️ Building for Production

When you're ready to deploy:

```bash
# Build the production version
npm run build

# Preview the production build locally
npm run preview
```

The optimized files will be in the `dist` folder.

## 🌐 Deployment Options

You can deploy this to:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## ❓ Troubleshooting

### Port 3000 already in use?
Edit `vite.config.js` and change the port:
```js
server: {
  port: 3001, // or any other port
  open: true
}
```

### Dependencies not installing?
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Images not loading?
- All images are from Unsplash and require internet connection
- If Unsplash is blocked, images won't load

## 💡 Customization Tips

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors.morandi`

### Add More Articles
Edit `src/data/blogData.js` → Add to the `articles` array

### Modify Categories
Edit `src/data/blogData.js` → Update the `categories` array

### Change Logo
Edit `src/components/Logo.jsx`

## 📞 Need Help?

Check out:
- README.md for full documentation
- Visit the Contact page in the app
- Review the code comments for guidance

## ✨ Enjoy Your Blog!

You now have a fully functional, beautiful lifestyle blog with:
✅ 5 complete articles
✅ Search and filtering
✅ Responsive design
✅ Smooth animations
✅ Product recommendations
✅ Contact form
✅ About page

Start exploring and customizing it to make it your own! 🎉

