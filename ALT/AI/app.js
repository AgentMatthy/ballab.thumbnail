// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

function initializeAnimations() {
    // Loading Screen Animation
    loadingAnimation();
    
    // Hero Section Animations
    heroAnimations();
    
    // Scroll-triggered Animations
    scrollAnimations();
    
    // Navigation
    navigationSetup();
    
    // Form Interactions
    formAnimations();
    
    // Button Hover Effects
    buttonEffects();
    
    // Background Animations
    backgroundAnimations();
}

// Loading Screen Animation
function loadingAnimation() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Animate loading bar
    anime({
        targets: '.loading-bar::after',
        translateX: ['0%', '100%'],
        duration: 2000,
        easing: 'easeInOutQuad',
        loop: true
    });
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        anime({
            targets: loadingScreen,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => {
                loadingScreen.style.display = 'none';
                // Start hero animations after loading
                startHeroAnimations();
            }
        });
    }, 3000);
}

// Hero Section Animations
function heroAnimations() {
    // Floating shapes animation
    anime({
        targets: '.floating-shape',
        translateY: [
            { value: -10, duration: 2000 },
            { value: 10, duration: 2000 }
        ],
        rotate: [
            { value: 5, duration: 2000 },
            { value: -5, duration: 2000 }
        ],
        scale: [
            { value: 1.05, duration: 2000 },
            { value: 0.95, duration: 2000 }
        ],
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: anime.stagger(500)
    });
}

function startHeroAnimations() {
    // Animate title lines with stagger
    anime({
        targets: '.title-line',
        opacity: [0, 1],
        translateY: [100, 0],
        duration: 1000,
        delay: anime.stagger(300),
        easing: 'easeOutCubic'
    });
    
    // Animate subtitle
    anime({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutCubic'
    });
    
    // Animate CTA buttons
    anime({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: 1200,
        easing: 'easeOutCubic'
    });
    
    // Animate scroll indicator
    anime({
        targets: '.scroll-indicator',
        opacity: [0, 1],
        duration: 600,
        delay: 1600,
        easing: 'easeOutCubic'
    });
    
    // Typewriter effect for hero title
    typewriterEffect();
}

// Typewriter Effect
function typewriterEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
        }, index * 800 + 2000);
    });
}

// Scroll-triggered Animations
function scrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Section title animations
                if (target.classList.contains('section-title')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }
                
                // Section subtitle animations
                if (target.classList.contains('section-subtitle')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        delay: 200,
                        easing: 'easeOutCubic'
                    });
                }
                
                // About section animations
                if (target.classList.contains('about-content')) {
                    animateAboutSection();
                }
                
                // Portfolio animations
                if (target.classList.contains('portfolio-grid')) {
                    animatePortfolioGrid();
                }
                
                // Services animations
                if (target.classList.contains('services-grid')) {
                    animateServicesGrid();
                }
                
                // Contact section animations
                if (target.classList.contains('contact-content')) {
                    animateContactSection();
                }
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.section-title, .section-subtitle, .about-content, .portfolio-grid, .services-grid, .contact-content').forEach(el => {
        observer.observe(el);
    });
}

// About Section Animation
function animateAboutSection() {
    // Avatar animation
    anime({
        targets: '.about-avatar',
        scale: [0, 1],
        rotate: [180, 0],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
    });
    
    // Description animation
    anime({
        targets: '.about-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 300,
        easing: 'easeOutCubic'
    });
    
    // Skills animation
    anime({
        targets: '.skill-item',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 600,
        delay: anime.stagger(150, {start: 500}),
        easing: 'easeOutCubic',
        complete: animateSkillBars
    });
}

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        anime({
            targets: bar,
            width: [0, width + '%'],
            duration: 1500,
            delay: anime.random(0, 500),
            easing: 'easeOutCubic'
        });
    });
}

// Portfolio Grid Animation
function animatePortfolioGrid() {
    anime({
        targets: '.portfolio-item',
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.8, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
    });
    
    // Add hover animations to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            anime({
                targets: item.querySelector('.portfolio-overlay'),
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: item.querySelector('.portfolio-content'),
                translateY: [20, 0],
                duration: 400,
                delay: 100,
                easing: 'easeOutCubic'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            anime({
                targets: item.querySelector('.portfolio-overlay'),
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Services Grid Animation
function animateServicesGrid() {
    anime({
        targets: '.service-card',
        opacity: [0, 1],
        translateY: [50, 0],
        rotateY: [90, 0],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutCubic'
    });
    
    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card.querySelector('.service-icon'),
                scale: [1, 1.2],
                rotate: [0, 10],
                duration: 300,
                easing: 'easeOutElastic(1, .6)'
            });
            
            anime({
                targets: card.querySelector('.service-price'),
                scale: [1, 1.1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card.querySelector('.service-icon'),
                scale: [1.2, 1],
                rotate: [10, 0],
                duration: 300,
                easing: 'easeOutElastic(1, .6)'
            });
            
            anime({
                targets: card.querySelector('.service-price'),
                scale: [1.1, 1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        });
    });
}

// Contact Section Animation
function animateContactSection() {
    anime({
        targets: '.contact-form',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 800,
        easing: 'easeOutCubic'
    });
    
    anime({
        targets: '.contact-info',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 800,
        delay: 200,
        easing: 'easeOutCubic'
    });
    
    anime({
        targets: '.contact-item',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(150, {start: 400}),
        easing: 'easeOutCubic'
    });
}

// Navigation Setup
function navigationSetup() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                anime({
                    targets: document.documentElement,
                    scrollTop: offsetTop,
                    duration: 1000,
                    easing: 'easeInOutCubic'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });
}

// Form Animations
function formAnimations() {
    const formInputs = document.querySelectorAll('.form-input');
    const submitButton = document.querySelector('.form-submit');
    
    formInputs.forEach(input => {
        // Focus animations
        input.addEventListener('focus', () => {
            anime({
                targets: input,
                scale: [1, 1.02],
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        input.addEventListener('blur', () => {
            anime({
                targets: input,
                scale: [1.02, 1],
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        // Typing animation
        input.addEventListener('input', () => {
            anime({
                targets: input,
                borderColor: ['#333333', '#00bfff', '#333333'],
                duration: 600,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Form submission animation
    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Button loading animation
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            
            anime({
                targets: submitButton,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeOutQuad'
            });
            
            // Simulate form submission
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = '#28a745';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                }, 2000);
            }, 1500);
        });
    }
}

// Button Effects
function buttonEffects() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: [1, 1.05],
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: [1.05, 1],
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        // Ripple effect on click
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                transform: scale(0);
            `;
            
            button.appendChild(ripple);
            
            anime({
                targets: ripple,
                scale: [0, 1],
                opacity: [1, 0],
                duration: 600,
                easing: 'easeOutQuad',
                complete: () => {
                    ripple.remove();
                }
            });
        });
    });
}

// Background Animations
function backgroundAnimations() {
    // Particle system
    createParticles();
    
    // Floating geometric shapes
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
        anime({
            targets: shape,
            translateX: [
                { value: anime.random(-20, 20), duration: anime.random(2000, 4000) }
            ],
            translateY: [
                { value: anime.random(-30, 30), duration: anime.random(2000, 4000) }
            ],
            rotate: [
                { value: anime.random(-180, 180), duration: anime.random(3000, 6000) }
            ],
            scale: [
                { value: anime.random(0.8, 1.2), duration: anime.random(2000, 4000) }
            ],
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            delay: index * 1000
        });
    });
}

// Particle System
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00bfff;
            border-radius: 50%;
            opacity: 0.3;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
        
        anime({
            targets: particle,
            translateX: [
                { value: anime.random(-100, 100), duration: anime.random(10000, 20000) }
            ],
            translateY: [
                { value: anime.random(-100, 100), duration: anime.random(10000, 20000) }
            ],
            opacity: [
                { value: anime.random(0.1, 0.8), duration: anime.random(2000, 4000) }
            ],
            scale: [
                { value: anime.random(0.5, 2), duration: anime.random(2000, 4000) }
            ],
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            delay: anime.random(0, 5000)
        });
    }
}

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00bfff, #0099cc);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Contact items hover effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        anime({
            targets: item,
            translateX: [0, 10],
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        anime({
            targets: item,
            translateX: [10, 0],
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        anime({
            targets: link,
            scale: [1, 1.1],
            rotateZ: [0, 5],
            duration: 200,
            easing: 'easeOutElastic(1, .6)'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        anime({
            targets: link,
            scale: [1.1, 1],
            rotateZ: [5, 0],
            duration: 200,
            easing: 'easeOutElastic(1, .6)'
        });
    });
});

// Hero CTA button actions
document.querySelectorAll('.hero-cta .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (btn.textContent.includes('Portfolio')) {
            // Scroll to portfolio section
            const portfolioSection = document.getElementById('portfolio');
            anime({
                targets: document.documentElement,
                scrollTop: portfolioSection.offsetTop - 80,
                duration: 1200,
                easing: 'easeInOutCubic'
            });
        } else if (btn.textContent.includes('Touch')) {
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            anime({
                targets: document.documentElement,
                scrollTop: contactSection.offsetTop - 80,
                duration: 1200,
                easing: 'easeInOutCubic'
            });
        }
    });
});

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause resource-intensive animations
        anime.remove('.floating-shape');
        anime.remove('.particles div');
    } else {
        // Resume animations
        backgroundAnimations();
    }
});
