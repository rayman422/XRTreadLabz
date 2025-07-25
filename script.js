// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll - handled by optimized scroll handler below

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .tech-feature, .stat, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => observer.observe(el));
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        } catch (error) {
            // Show error message
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const submitButton = form.querySelector('button');
        const email = emailInput.value;
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
        
        try {
            // Simulate newsletter subscription (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            emailInput.value = '';
        } catch (error) {
            // Show error message
            showNotification('Sorry, there was an error subscribing. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    `;
    
    // Set colors based on type
    if (type === 'success') {
        notification.style.background = '#10b981';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
        notification.style.color = 'white';
    } else {
        notification.style.background = '#6366f1';
        notification.style.color = 'white';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Handle close button
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
    `;
    
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add loading animation for service cards
function addLoadingAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize loading animations
document.addEventListener('DOMContentLoaded', addLoadingAnimation);

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-message {
        flex: 1;
    }
`;
document.head.appendChild(style);

// Preload critical resources
function preloadCriticalResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// Add enhanced hover effects for service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add active navigation highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Optimized active section highlighting
const optimizedHighlightHandler = debounce(highlightActiveSection, 50);
window.addEventListener('scroll', optimizedHighlightHandler);

// Active nav link styles are handled in CSS

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Enhanced form validation
function validateContactForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const value = field.value.trim();
        
        if (!value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    field.style.borderColor = '#ef4444';
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

// Add real-time validation
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                showFieldError(this, 'This field is required');
            } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
                showFieldError(this, 'Please enter a valid email address');
            } else {
                clearFieldError(this);
            }
        });
        
        input.addEventListener('input', function() {
            if (this.parentNode.querySelector('.field-error')) {
                clearFieldError(this);
            }
        });
    });
});

console.log('XRTreadLabz website initialized successfully!');

// Loading Screen Management
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1500);
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update theme toggle icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    document.documentElement.style.setProperty('--scroll-width', `${scrollPercent}%`);
}

window.addEventListener('scroll', debounce(updateScrollProgress, 10));

// Add scroll progress bar to page
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
});

// PWA Installation Prompt
let deferredPrompt;
let installPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
});

function showInstallPrompt() {
    if (installPrompt) return;
    
    installPrompt = document.createElement('div');
    installPrompt.className = 'install-prompt';
    installPrompt.innerHTML = `
        <div>
            <strong>Install XRTreadLabz</strong>
            <p>Get quick access to our VR fitness experience!</p>
        </div>
        <button id="installBtn">Install</button>
        <button class="close-btn" id="closePrompt">&times;</button>
    `;
    
    document.body.appendChild(installPrompt);
    
    setTimeout(() => {
        installPrompt.classList.add('show');
    }, 2000);
    
    // Install button click
    document.getElementById('installBtn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const result = await deferredPrompt.userChoice;
            if (result.outcome === 'accepted') {
                hideInstallPrompt();
            }
            deferredPrompt = null;
        }
    });
    
    // Close button click
    document.getElementById('closePrompt').addEventListener('click', hideInstallPrompt);
}

function hideInstallPrompt() {
    if (installPrompt) {
        installPrompt.classList.remove('show');
        setTimeout(() => {
            installPrompt.remove();
            installPrompt = null;
        }, 300);
    }
}

// Enhanced Pricing Card Interactions
document.addEventListener('DOMContentLoaded', () => {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const button = card.querySelector('.pricing-btn');
        
        button.addEventListener('click', () => {
            const planName = card.querySelector('h3').textContent;
            const price = card.querySelector('.amount').textContent;
            
            showNotification(`You selected the ${planName} plan ($${price}). Redirecting to booking...`, 'success');
            
            // Simulate redirect to booking system
            setTimeout(() => {
                // In a real app, this would redirect to a booking page
                console.log(`Booking ${planName} plan`);
            }, 2000);
        });
    });
});

// Enhanced Testimonials Carousel (optional)
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.transform = 'scale(1.05)';
                testimonial.style.zIndex = '10';
            } else {
                testimonial.style.transform = 'scale(1)';
                testimonial.style.zIndex = '1';
            }
        });
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
});

// Enhanced Contact Form with more validation
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Enhanced validation
        if (!validateContactForm(contactForm)) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission with enhanced feedback
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message with more details
            showNotification(`Thank you ${formObject.name}! We'll contact you within 24 hours about your ${formObject.service} inquiry.`, 'success');
            contactForm.reset();
            
            // Clear any field errors
            const fieldErrors = contactForm.querySelectorAll('.field-error');
            fieldErrors.forEach(error => error.remove());
            
        } catch (error) {
            showNotification('Sorry, there was an error sending your message. Please try again or call us directly.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Enhanced Mobile Navigation with gesture support
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 100;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could hide mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    }
}

// Enhanced Animation Triggers
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add different animation classes based on element type
            if (element.classList.contains('pricing-card')) {
                element.classList.add('fade-in');
                // Stagger animation for pricing cards
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${index * 0.2}s`;
            } else if (element.classList.contains('testimonial-card')) {
                element.classList.add('slide-left');
            } else if (element.classList.contains('faq-item')) {
                element.classList.add('slide-right');
            } else {
                element.classList.add('fade-in');
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe new elements
document.addEventListener('DOMContentLoaded', () => {
    const newElements = document.querySelectorAll('.pricing-card, .testimonial-card, .faq-item');
    newElements.forEach(el => enhancedObserver.observe(el));
});

// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Could send error reports to analytics service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error reports to analytics service
});

// Performance Monitoring
if ('navigation' in window.performance) {
    window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log('Page load time:', loadTime);
        
        // Could send performance metrics to analytics
        if (loadTime > 3000) {
            console.warn('Page load time is slow:', loadTime);
        }
    });
}

console.log('Enhanced XRTreadLabz website initialized successfully!');