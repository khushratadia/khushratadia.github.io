// Main JavaScript functionality for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    
    // Modal functionality for 2-minute summary
    initializeModal();
    
    // Animate skill bars when they come into view
    initializeSkillBars();
    
    // Smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Mobile menu functionality
    initializeMobileMenu();
    
    // Project card hover effects
    initializeProjectCards();
    
    // Form handling (if any forms are added later)
    initializeFormHandling();
    
    // Intersection Observer for animations
    initializeAnimations();
});

// Modal functionality (currently no modals in use)
function initializeModal() {
    // No modals currently implemented
    // This function is kept for future modal implementations
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBar = (bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 100);
        }
    };
    
    // Create intersection observer for skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-progress');
                if (skillBar && !skillBar.hasAttribute('data-animated')) {
                    animateSkillBar(skillBar);
                    skillBar.setAttribute('data-animated', 'true');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Create mobile menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.style.cssText = `
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1001;
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        color: white;
        border: none;
        padding: 0.8rem;
        border-radius: 8px;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
    `;
    
    document.body.appendChild(menuToggle);
    
    // Show/hide menu toggle on mobile
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Toggle sidebar on mobile
    menuToggle.addEventListener('click', function() {
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            sidebar && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Project cards hover effects and animations
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click analytics (for future use)
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3')?.textContent || 'Unknown Project';
            console.log(`Project clicked: ${projectTitle}`);
            // Here you could add analytics tracking
        });
    });
}

// Form handling (for future contact forms)
function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                    
                    // Remove error styling after user starts typing
                    input.addEventListener('input', function() {
                        this.style.borderColor = '#ddd';
                    });
                }
            });
            
            if (isValid) {
                // Here you would handle form submission
                console.log('Form submitted successfully');
                showNotification('Message sent successfully!', 'success');
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 2000;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for general animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.hero-section, .content-section, .project-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Scroll performance optimization
let ticking = false;

function updateOnScroll() {
    // Add any scroll-based animations here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// Add loading state management
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
    `;
    
    const spinner = loader.querySelector('.loader-spinner');
    spinner.style.cssText = `
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #2c3e50;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.remove();
    }
}

// Export functions for potential external use
window.PortfolioJS = {
    showNotification,
    showLoading,
    hideLoading,
    debounce,
    throttle
};

// Console message for developers
console.log('%c🚀 Khush Ratadia Portfolio', 'color: #2c3e50; font-size: 16px; font-weight: bold;');
console.log('Mechanical Design Engineer | University of Washington');
console.log('Portfolio built with modern web technologies');
console.log('Contact: khushr@uw.edu | LinkedIn: /in/khush-ratadia');