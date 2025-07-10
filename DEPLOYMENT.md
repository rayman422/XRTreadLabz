# Deployment Guide

This guide covers various deployment options for the XRTreadLabz website in production environments.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 8+
- Docker (optional)
- Git

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd xrtreadlabz

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8000
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Visit http://localhost:8000
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)
```bash
# Build and start services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build
```bash
# Build image
docker build -t xrtreadlabz .

# Run container
docker run -d -p 80:80 --name xrtreadlabz-web xrtreadlabz

# Check health
docker exec xrtreadlabz-web curl -f http://localhost/health
```

## ☁️ Cloud Deployment

### GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy

# The site will be available at https://yourusername.github.io/xrtreadlabz
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables if needed

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Configure custom domain in Vercel dashboard
```

### AWS S3 + CloudFront
```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Server Configuration

### Nginx Configuration
```nginx
# Copy security-headers.conf to /etc/nginx/conf.d/
sudo cp security-headers.conf /etc/nginx/conf.d/

# Copy nginx.conf or update your existing configuration
sudo cp nginx.conf /etc/nginx/nginx.conf

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### Apache Configuration
```apache
# Enable required modules
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod deflate
sudo a2enmod expires

# Add to your virtual host or .htaccess
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/html/dist
    
    # Security headers
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Compression
    SetOutputFilter DEFLATE
    
    # Caching
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
        Header set Cache-Control "public, immutable"
    </FilesMatch>
</VirtualHost>
```

## 🔒 SSL/TLS Configuration

### Using Let's Encrypt with Certbot
```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Using Docker with Traefik
The `docker-compose.yml` includes Traefik for automatic SSL certificate management.

## 🔍 Monitoring and Analytics

### Health Checks
- Health endpoint: `/health`
- Returns 200 with "healthy" message
- Monitor with tools like Pingdom, UptimeRobot

### Performance Monitoring
```bash
# Run Lighthouse audit
npm run performance-check

# Check bundle size
npm run build && du -sh dist/

# Monitor with tools like:
# - Google Analytics 4
# - New Relic
# - Datadog
```

### Error Tracking
Integrate with error tracking services:
- Sentry
- Rollbar
- Bugsnag

## 📊 CI/CD Pipeline

### GitHub Actions
The project includes a comprehensive CI/CD pipeline:
- Automated testing and linting
- Security scanning
- Performance testing
- Automated deployment

### Manual Deployment Steps
```bash
# 1. Run tests
npm test

# 2. Build project
npm run build

# 3. Deploy to staging
# (Your staging deployment command)

# 4. Run smoke tests
# (Your smoke test command)

# 5. Deploy to production
npm run deploy
```

## 🔐 Security Checklist

- [ ] SSL/TLS certificate installed
- [ ] Security headers configured
- [ ] Content Security Policy (CSP) enabled
- [ ] Rate limiting configured
- [ ] File permissions set correctly
- [ ] Sensitive files blocked (.env, .git, etc.)
- [ ] Regular security updates scheduled
- [ ] Backup strategy implemented

## 📈 Performance Optimization

### Pre-deployment Checklist
- [ ] Assets minified and compressed
- [ ] Images optimized
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] JavaScript bundled and tree-shaken
- [ ] Service worker configured
- [ ] CDN configured for static assets
- [ ] Gzip compression enabled

### Performance Budget
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Total bundle size: < 500KB

## 🗄️ Database and Backend

Currently, the website is static. For dynamic features:

### Contact Form Backend
```javascript
// Example Express.js backend
const express = require('express');
const app = express();

app.post('/api/contact', (req, res) => {
  // Process form submission
  // Send email notification
  // Store in database
  res.json({ success: true });
});
```

### CMS Integration
Consider integrating with:
- Strapi
- Contentful
- Sanity
- Ghost

## 🚨 Troubleshooting

### Common Issues

**Build fails**
```bash
# Clear cache
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Assets not loading**
- Check file paths in production
- Verify CDN configuration
- Check Content Security Policy

**Performance issues**
- Run Lighthouse audit
- Check network tab in DevTools
- Monitor server resources

### Support
For deployment issues:
- Check the logs: `docker-compose logs`
- Review nginx error logs: `tail -f /var/log/nginx/error.log`
- Check application health: `curl http://localhost/health`

## 📝 Environment Variables

Create a `.env` file for configuration:
```bash
# .env
NODE_ENV=production
PORT=3000
CONTACT_EMAIL=info@xrtreadlabz.com
ANALYTICS_ID=G-XXXXXXXXXX
```

## 🔄 Updates and Maintenance

### Regular Tasks
- Monthly dependency updates
- Weekly security patches
- Daily log reviews
- Performance monitoring

### Update Process
```bash
# 1. Update dependencies
npm update

# 2. Run tests
npm test

# 3. Deploy to staging
# (Your staging command)

# 4. Deploy to production
npm run deploy
```

---

For additional support, please contact the development team or refer to the project documentation.