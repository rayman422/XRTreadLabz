// CodeFlow AI Website JavaScript
// Clean, optimized, and error-free implementation

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeAds();
    initializeCodeAnimation();
    initializeInteractiveElements();
    initializeAnalytics();
    initializePerformanceOptimizations();
    initializeAccessibility();
    
    console.log('CodeFlow AI website initialized successfully!');
});

// Navigation System
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (!navbar) return;
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar background on scroll
    let ticking = false;
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// Animation System
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Ad Management System
class AdManager {
    constructor() {
        this.ads = [
            {
                type: 'banner',
                content: 'Cloud Hosting - 50% Off First Year',
                url: '#',
                bgColor: '#1e40af'
            },
            {
                type: 'banner',
                content: 'Premium Developer Tools - Free Trial',
                url: '#',
                bgColor: '#059669'
            },
            {
                type: 'banner',
                content: 'AI Code Review - Boost Your Code Quality',
                url: '#',
                bgColor: '#7c3aed'
            },
            {
                type: 'sidebar',
                content: 'DevOps\\nTools',
                url: '#',
                bgColor: '#dc2626'
            },
            {
                type: 'sidebar',
                content: 'API\\nMonitoring',
                url: '#',
                bgColor: '#ea580c'
            }
        ];
        
        this.currentBannerIndex = 0;
        this.currentSidebarIndex = 0;
        this.bannerInterval = null;
        this.sidebarInterval = null;
    }
    
    init() {
        this.setupInitialAds();
        this.rotateBannerAds();
        this.rotateSidebarAds();
        this.setupAdInteractions();
    }
    
    setupInitialAds() {
        // Set up initial banner ads
        const bannerAds = document.querySelectorAll('.ad-banner .ad-placeholder');
        if (bannerAds.length > 0) {
            const firstBannerAd = this.ads.filter(ad => ad.type === 'banner')[0];
            if (firstBannerAd) {
                this.updateBannerAds(firstBannerAd);
            }
        }
        
        // Set up initial sidebar ads
        const sidebarAds = document.querySelectorAll('.ad-sidebar .ad-placeholder');
        if (sidebarAds.length > 0) {
            const firstSidebarAd = this.ads.filter(ad => ad.type === 'sidebar')[0];
            if (firstSidebarAd) {
                this.updateSidebarAds(firstSidebarAd);
            }
        }
    }
    
    rotateBannerAds() {
        const bannerAds = document.querySelectorAll('.ad-banner .ad-placeholder');
        const bannerAdsList = this.ads.filter(ad => ad.type === 'banner');
        
        if (bannerAds.length > 0 && bannerAdsList.length > 0) {
            this.bannerInterval = setInterval(() => {
                this.currentBannerIndex = (this.currentBannerIndex + 1) % bannerAdsList.length;
                const bannerAd = bannerAdsList[this.currentBannerIndex];
                this.updateBannerAds(bannerAd);
            }, 5000);
        }
    }
    
    rotateSidebarAds() {
        const sidebarAds = document.querySelectorAll('.ad-sidebar .ad-placeholder');
        const sidebarAdsList = this.ads.filter(ad => ad.type === 'sidebar');
        
        if (sidebarAds.length > 0 && sidebarAdsList.length > 0) {
            this.sidebarInterval = setInterval(() => {
                this.currentSidebarIndex = (this.currentSidebarIndex + 1) % sidebarAdsList.length;
                const sidebarAd = sidebarAdsList[this.currentSidebarIndex];
                this.updateSidebarAds(sidebarAd);
            }, 7000);
        }
    }
    
    updateBannerAds(bannerAd) {
        const bannerAds = document.querySelectorAll('.ad-banner .ad-placeholder');
        bannerAds.forEach(banner => {
            banner.innerHTML = `
                <div class="ad-content" style="background: ${bannerAd.bgColor}; color: white; padding: 10px 20px; border-radius: 6px; text-align: center; font-weight: 500; cursor: pointer;">
                    ${bannerAd.content}
                </div>
            `;
            banner.style.cursor = 'pointer';
            banner.onclick = () => this.handleAdClick(bannerAd);
        });
    }
    
    updateSidebarAds(sidebarAd) {
        const sidebarAds = document.querySelectorAll('.ad-sidebar .ad-placeholder');
        sidebarAds.forEach(sidebar => {
            sidebar.innerHTML = `
                <div class="ad-content" style="background: ${sidebarAd.bgColor}; color: white; padding: 20px 10px; border-radius: 6px; text-align: center; font-weight: 500; height: 100%; display: flex; align-items: center; justify-content: center; writing-mode: vertical-lr; text-orientation: mixed; cursor: pointer;">
                    ${sidebarAd.content.replace('\\n', '\n')}
                </div>
            `;
            sidebar.style.cursor = 'pointer';
            sidebar.onclick = () => this.handleAdClick(sidebarAd);
        });
    }
    
    handleAdClick(ad) {
        console.log('Ad clicked:', ad);
        if (analytics) {
            analytics.trackEvent('ad_click', {
                type: ad.type,
                content: ad.content,
                url: ad.url
            });
        }
        if (ad.url && ad.url !== '#') {
            window.open(ad.url, '_blank');
        }
    }
    
    setupAdInteractions() {
        // Add hover effects to ads
        const allAds = document.querySelectorAll('.ad-placeholder');
        allAds.forEach(ad => {
            ad.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.2s ease';
            });
            
            ad.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    destroy() {
        if (this.bannerInterval) {
            clearInterval(this.bannerInterval);
        }
        if (this.sidebarInterval) {
            clearInterval(this.sidebarInterval);
        }
    }
}

// Code Animation in Hero Section
class CodeAnimator {
    constructor() {
        this.codeElement = document.querySelector('.code-content code');
        this.codeText = `def analyze_repo(repo_path):
    """AI-powered repository analysis"""
    with CodeFlowAI() as ai:
        structure = ai.grok_repo(repo_path)
        suggestions = ai.optimize_code(structure)
        return suggestions`;
        
        this.isAnimating = false;
    }
    
    init() {
        if (this.codeElement && !this.isAnimating) {
            this.typeWriter();
        }
    }
    
    typeWriter() {
        this.isAnimating = true;
        this.codeElement.textContent = '';
        let i = 0;
        
        const type = () => {
            if (i < this.codeText.length) {
                this.codeElement.textContent += this.codeText.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                this.addCursor();
                this.isAnimating = false;
            }
        };
        
        // Start typing after a delay
        setTimeout(type, 1000);
    }
    
    addCursor() {
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.opacity = '1';
        cursor.className = 'code-cursor';
        
        // Add blinking animation if not already added
        if (!document.querySelector('#blink-style')) {
            const style = document.createElement('style');
            style.id = 'blink-style';
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.codeElement.appendChild(cursor);
    }
}

// Initialize Ad Manager and Code Animator
function initializeAds() {
    window.adManager = new AdManager();
    window.adManager.init();
}

function initializeCodeAnimation() {
    window.codeAnimator = new CodeAnimator();
    window.codeAnimator.init();
}

// Interactive Elements
function initializeInteractiveElements() {
    initializeButtons();
    initializeCards();
    initializeGradientText();
}

function initializeButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function initializeCards() {
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card:not(.ad-card)');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initializeGradientText() {
    const gradientText = document.querySelector('.gradient-text');
    
    if (gradientText) {
        let hue = 0;
        const animateGradient = () => {
            hue = (hue + 1) % 360;
            gradientText.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%) 0%, 
                hsl(${(hue + 60) % 360}, 70%, 60%) 50%, 
                hsl(${(hue + 120) % 360}, 70%, 60%) 100%)`;
            gradientText.style.webkitBackgroundClip = 'text';
            gradientText.style.webkitTextFillColor = 'transparent';
            gradientText.style.backgroundClip = 'text';
        };
        
        setInterval(animateGradient, 100);
    }
}

// Analytics System
class Analytics {
    constructor() {
        this.events = [];
        this.sessionId = this.generateSessionId();
    }
    
    init() {
        this.trackPageView();
        this.trackUserInteractions();
        this.trackSectionViews();
    }
    
    generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    
    trackPageView() {
        this.events.push({
            type: 'pageview',
            timestamp: Date.now(),
            url: window.location.href,
            sessionId: this.sessionId
        });
    }
    
    trackUserInteractions() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-primary, .btn-secondary')) {
                this.trackEvent('button_click', {
                    button: e.target.textContent.trim(),
                    url: window.location.href
                });
            }
        });
    }
    
    trackSectionViews() {
        const sections = document.querySelectorAll('section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.trackEvent('section_view', {
                        section: entry.target.id || entry.target.className,
                        url: window.location.href
                    });
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => sectionObserver.observe(section));
    }
    
    trackEvent(eventType, data) {
        this.events.push({
            type: eventType,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            ...data
        });
    }
    
    getEvents() {
        return this.events;
    }
}

function initializeAnalytics() {
    window.analytics = new Analytics();
    window.analytics.init();
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Add ripple animation styles
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                0% {
                    transform: scale(0);
                    opacity: 0.5;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Accessibility
function initializeAccessibility() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #6366f1';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    if (window.analytics) {
        window.analytics.trackEvent('error', {
            message: e.message,
            filename: e.filename,
            line: e.lineno
        });
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Dark mode toggle (for future use)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const isDark = !document.body.classList.contains('light-mode');
    localStorage.setItem('darkMode', isDark);
}

// Initialize dark mode based on user preference
function initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'false') {
        document.body.classList.add('light-mode');
    }
}

// Initialize dark mode when DOM is ready
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// Cleanup function
function cleanup() {
    if (window.adManager) {
        window.adManager.destroy();
    }
}

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Console welcome message
console.log(`
🚀 CodeFlow AI - Developer Console
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Welcome to CodeFlow AI!
This site is built with modern web technologies.

Available functions:
- analytics.getEvents() - View all tracked events
- adManager - Access ad management system
- codeAnimator - Access code animation system
- toggleDarkMode() - Toggle dark/light mode

Built with ❤️ for developers
`);