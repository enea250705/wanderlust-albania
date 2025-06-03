/**
 * Comprehensive Animations JavaScript for Wanderlust Albania
 * Handles scroll animations, intersection observer, and interactive effects
 */

class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupIntersectionObserver();
    this.setupParallaxEffects();
    this.setupCounterAnimations();
    this.setupStaggeredAnimations();
  }

  // Setup scroll-triggered animations
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-down, .scale-in, .fade-in'
    );

    // Initialize elements for animation
    animatedElements.forEach((element, index) => {
      if (!element.classList.contains('fade-in')) {
        element.style.opacity = '0';
        element.style.transform = this.getInitialTransform(element);
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }
    });

    // Handle scroll animation
    this.handleScrollAnimation();
    window.addEventListener('scroll', () => this.throttle(this.handleScrollAnimation.bind(this), 16));
  }

  // Get initial transform based on animation class
  getInitialTransform(element) {
    if (element.classList.contains('fade-in-up')) return 'translateY(30px)';
    if (element.classList.contains('fade-in-left')) return 'translateX(-30px)';
    if (element.classList.contains('fade-in-right')) return 'translateX(30px)';
    if (element.classList.contains('fade-in-down')) return 'translateY(-30px)';
    if (element.classList.contains('scale-in')) return 'scale(0.8)';
    return 'none';
  }

  // Handle scroll animation logic
  handleScrollAnimation() {
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-down, .scale-in'
    );

    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) translateX(0) scale(1)';
        element.classList.add('animated');
      }
    });
  }

  // Setup Intersection Observer for better performance
  setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Add staggered delay for child elements
            this.addStaggerEffect(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements
      const elementsToObserve = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-down, .scale-in'
      );
      
      elementsToObserve.forEach(element => {
        observer.observe(element);
      });
    }
  }

  // Add stagger effect to child elements
  addStaggerEffect(container) {
    const children = container.querySelectorAll('.fade-in-up, .card-hover-lift, .value-card, .team-card');
    children.forEach((child, index) => {
      if (!child.classList.contains('animated')) {
        setTimeout(() => {
          child.classList.add('animated');
        }, index * 100);
      }
    });
  }

  // Throttle function for performance
  throttle(func, limit) {
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

  // Setup parallax effects
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', () => {
        this.throttle(() => {
          const scrolled = window.pageYOffset;
          
          parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
          });
        }, 16);
      });
    }
  }

  // Setup counter animations
  setupCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.counter);
      const duration = parseInt(counter.dataset.duration) || 2000;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter(counter, target, duration);
            observer.unobserve(counter);
          }
        });
      });
      
      observer.observe(counter);
    });
  }

  // Animate counter numbers
  animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // Setup staggered animations for lists
  setupStaggeredAnimations() {
    const staggerContainers = document.querySelectorAll('[data-stagger]');
    
    staggerContainers.forEach(container => {
      const children = container.children;
      const delay = parseInt(container.dataset.stagger) || 100;
      
      Array.from(children).forEach((child, index) => {
        child.style.animationDelay = `${index * delay}ms`;
      });
    });
  }

  // Add smooth scroll to anchor links
  setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animation manager
  window.animationManager = new AnimationManager();
  
  // Setup smooth scrolling
  window.animationManager.setupSmoothScroll();
  
  // Add animation classes to existing elements
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (!section.classList.contains('fade-in-up')) {
      section.classList.add('fade-in-up');
    }
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.popular-card, .package-card, .destination-card, .value-card, .team-card');
  cards.forEach(card => {
    if (!card.classList.contains('card-hover-lift')) {
      card.classList.add('card-hover-lift');
    }
  });
  
  // Add image hover effects
  const images = document.querySelectorAll('.popular-card .card-banner, .package-card .card-banner, .destination-card .card-banner');
  images.forEach(image => {
    image.classList.add('image-hover-zoom');
  });
  
  // Add button animations
  const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.classList.add('btn-animated');
  });
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AnimationManager };
} 