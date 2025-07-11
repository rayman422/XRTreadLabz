# CodeFlow AI - AI-Powered Development Platform

A modern, responsive website inspired by zencoder.ai that showcases an AI coding assistant platform with strategically placed advertisements that don't interfere with the user experience.

## 🚀 Features

### Core Website Features
- **Modern Design**: Clean, developer-focused interface with dark theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Code Animation**: Animated code typing effect in the hero section
- **Gradient Text**: Animated gradient text effects
- **Performance Optimized**: Lazy loading, efficient animations, and optimized assets

### Strategic Ad Placement
- **Top Banner Ads**: Non-intrusive banner ads at the top of the page
- **Sidebar Ads**: Vertical ads on desktop that don't interfere with content
- **In-content Ads**: Strategically placed ads between content sections
- **Inline Feature Ads**: Sponsored content cards within the features grid
- **Bottom Banner Ads**: Footer-area banner advertisements
- **Mobile Optimization**: Ads automatically adjust for mobile devices

### Advanced JavaScript Features
- **Ad Management System**: Automatic ad rotation and click tracking
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling
- **Intersection Observer**: Efficient scroll-based animations
- **Analytics Tracking**: Built-in analytics for user interactions
- **Performance Monitoring**: Optimized scroll and animation performance
- **Accessibility Features**: Keyboard navigation and focus indicators
- **PWA Support**: Service worker registration for offline capabilities

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript with classes and modules
- **Inter Font**: Professional typography from Google Fonts
- **Responsive Design**: Mobile-first approach with breakpoints

## 📁 Project Structure

```
codeflow-ai/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md          # Project documentation
└── assets/            # Images and other assets (if any)
```

## 🎨 Design Features

### Color Scheme
- Primary: Dark blue/slate theme (#0f172a, #1e293b, #334155)
- Accent: Purple/blue gradients (#6366f1, #8b5cf6, #ec4899)
- Text: Light grays (#e2e8f0, #94a3b8, #cbd5e1)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Code Font**: Fira Code (monospace)
- **Font Weights**: 300, 400, 500, 600, 700

### Components
- **Navigation**: Fixed header with smooth scrolling
- **Hero Section**: Animated code preview and call-to-action
- **Features Grid**: Interactive cards with hover effects
- **Testimonials**: Customer testimonial cards
- **Pricing**: Three-tier pricing plans with featured option
- **Footer**: Comprehensive footer with links and information

## � Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in your web browser
3. **Local Development**: For development, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Access**: Navigate to `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🎯 Ad Placement Strategy

### Non-Intrusive Advertising
The website implements a carefully designed ad system that:
- **Doesn't block content**: Ads are positioned to complement, not obstruct
- **Maintains user experience**: Smooth scrolling and navigation remain intact
- **Responsive design**: Ads adapt to different screen sizes
- **Performance optimized**: Ads don't impact page load times

### Ad Types
1. **Banner Ads**: 728x90 (desktop) / 320x50 (mobile)
2. **Sidebar Ads**: 120x600 (desktop only)
3. **In-content Ads**: 728x90 horizontal placement
4. **Sponsored Content**: Native advertising within content grid

## 🚀 Performance Features

### Optimization Techniques
- **Lazy Loading**: Images load as they enter the viewport
- **Efficient Animations**: CSS transforms and GPU acceleration
- **Debounced Scroll**: Optimized scroll event handling
- **Intersection Observer**: Efficient visibility detection
- **Minified Assets**: Optimized CSS and JavaScript

### SEO Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Comprehensive meta information
- **Accessibility**: ARIA labels and keyboard navigation
- **Fast Loading**: Optimized for Core Web Vitals

## � Browser Compatibility

- **Chrome**: 70+
- **Firefox**: 65+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS 12+, Android 8+

## 🎨 Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Content
- Edit `index.html` to change text content
- Modify `script.js` to adjust interactive behaviors
- Update `styles.css` for design changes

### Ads
Configure ads in `script.js`:
```javascript
this.ads = [
    {
        type: 'banner',
        content: 'Your Ad Content',
        url: 'https://your-link.com',
        bgColor: '#your-color'
    }
];
```

## 📊 Analytics

The website includes built-in analytics tracking:
- **Page Views**: Track visitor sessions
- **Button Clicks**: Monitor CTA interactions
- **Section Views**: Measure content engagement
- **Ad Interactions**: Track ad performance

Access analytics data in the browser console:
```javascript
analytics.getEvents() // View all tracked events
```

## � Development

### Adding New Features
1. **HTML**: Add new sections in `index.html`
2. **CSS**: Style new elements in `styles.css`
3. **JavaScript**: Add functionality in `script.js`

### Best Practices
- Maintain mobile-first responsive design
- Keep accessibility in mind
- Test ad placements for user experience
- Optimize for performance

## 📄 License

This project is created for educational and demonstration purposes. Feel free to use and modify for your own projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📞 Support

For questions or support, please open an issue in the project repository.

---

**Built with ❤️ for developers who want to create modern, user-friendly websites with strategic advertising placement.**