'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      
      // Toggle body scroll when menu is open
      document.body.classList.toggle("menu-active");
      
      // Apply transition delay to menu items when opening
      if (navbar.classList.contains("active")) {
        document.querySelectorAll(".navbar-link").forEach((link, index) => {
          link.style.transitionDelay = (0.1 * (index + 1)) + "s";
        });
      } else {
        // Reset the transition delay for menu items when closing
        setTimeout(() => {
          document.querySelectorAll(".navbar-link").forEach(link => {
            link.style.transitionDelay = "0s";
          });
        }, 500);
      }
    });
  }
}

navToggleEvent(navElemArr);

// Modify the event for nav links to ensure proper navigation
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Only close the menu without preventing navigation
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-active");
    
    // Don't prevent default navigation
  });
});


/**
 * language selector toggle
 */
const languageBtn = document.querySelector(".language-btn");
const languageSelector = document.querySelector(".language-selector");
const languageOptions = document.querySelectorAll(".language-dropdown a");
const currentLangText = document.querySelectorAll(".current-lang");

// Mobile language selector
const mobileLangBtn = document.querySelector(".mobile-lang-btn");
const mobileLangSelector = document.querySelector(".mobile-language-selector");
const mobileLangOptions = document.querySelectorAll(".mobile-lang-dropdown a");

// Function to handle language selection
const handleLanguageSelection = function(option, isDesktop) {
  const selectedLang = option.textContent;
  
  // Update all language display elements
  currentLangText.forEach(el => {
    el.textContent = selectedLang;
  });
  
  // Close active dropdowns
  if (languageSelector) languageSelector.classList.remove("active");
  if (mobileLangSelector) mobileLangSelector.classList.remove("active");
  
  // Get language code for further processing
  const langCode = option.getAttribute("data-lang");
  console.log(`Language changed to: ${langCode}`);
};

// Desktop language selector
if (languageBtn && languageSelector) {
  languageBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    languageSelector.classList.toggle("active");
    
    // Close mobile selector if open
    if (mobileLangSelector) mobileLangSelector.classList.remove("active");
  });

  // Language selection for desktop
  languageOptions.forEach(option => {
    option.addEventListener("click", function(e) {
      e.preventDefault();
      handleLanguageSelection(this, true);
    });
  });
}

// Mobile language selector
if (mobileLangBtn && mobileLangSelector) {
  mobileLangBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    mobileLangSelector.classList.toggle("active");
    
    // Close desktop selector if open
    if (languageSelector) languageSelector.classList.remove("active");
  });

  // Language selection for mobile
  mobileLangOptions.forEach(option => {
    option.addEventListener("click", function(e) {
      e.preventDefault();
      handleLanguageSelection(this, false);
    });
  });
}

// Close dropdowns when clicking outside
document.addEventListener("click", function(e) {
  if (languageSelector && !languageSelector.contains(e.target)) {
    languageSelector.classList.remove("active");
  }
  
  if (mobileLangSelector && !mobileLangSelector.contains(e.target)) {
    mobileLangSelector.classList.remove("active");
  }
});


/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/**
 * feature cards scroll animation
 */
const featureCards = document.querySelectorAll('.feature-card');

const revealFeatureCards = function() {
  const triggerBottom = window.innerHeight * 0.8; // Show cards at 80% of viewport height
  
  featureCards.forEach(function(card) {
    const cardTop = card.getBoundingClientRect().top;
    
    if (cardTop < triggerBottom) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
};

// Check on initial load
window.addEventListener('DOMContentLoaded', revealFeatureCards);

// Check on scroll
window.addEventListener('scroll', revealFeatureCards);

// Reinitialize on resize
window.addEventListener('resize', revealFeatureCards);

/**
 * popular cards stacked scroll animation
 */
const popularCards = document.querySelectorAll('.popular-card');

const animatePopularCards = function() {
  const triggerBottom = window.innerHeight * 0.8; // Reveal threshold at 80% of viewport height
  
  popularCards.forEach(function(card) {
    const cardTop = card.getBoundingClientRect().top;
    
    if (cardTop < triggerBottom) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
};

// Initialize cards animation
window.addEventListener('DOMContentLoaded', animatePopularCards);

// Check cards position on scroll
window.addEventListener('scroll', animatePopularCards);

// Reinitialize animations on resize
window.addEventListener('resize', animatePopularCards);

/**
 * testimonial slider manual scrolling
 */
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');

// Manual scrolling for testimonials
if (testimonialWrapper && testimonialSlider) {
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = null;

  // Event listeners for mouse events
  testimonialWrapper.addEventListener('mousedown', dragStart);
  window.addEventListener('mouseup', dragEnd);
  window.addEventListener('mousemove', drag);

  // Event listeners for touch events
  testimonialWrapper.addEventListener('touchstart', dragStart, { passive: true });
  window.addEventListener('touchend', dragEnd);
  window.addEventListener('touchmove', drag, { passive: false });

  // Initialize testimonial slider to be centered
  function initializeSlider() {
    // Get slider width and viewport width to center the content
    const wrapperWidth = testimonialWrapper.offsetWidth;
    const sliderWidth = testimonialSlider.offsetWidth;
    
    // Center the slider if it's wider than the wrapper
    if (sliderWidth > wrapperWidth) {
      // Calculate how much to offset to center the slider
      // Not completely centered as we want to start at beginning
      prevTranslate = 0; // Start at beginning, no centering
      currentTranslate = prevTranslate;
      setSliderPosition();
    }
  }

  // Initialize on load
  window.addEventListener('load', initializeSlider);
  // Reinitialize on resize
  window.addEventListener('resize', initializeSlider);

  // Functions for handling drag
  function dragStart(e) {
    // Get current position
    startX = getPositionX(e);
    
    // Mark as dragging
    isDragging = true;
    
    // Add active class
    testimonialWrapper.classList.add('drag');
    
    // Start animation frame for smooth movement
    animationID = requestAnimationFrame(animation);
  }

  function drag(e) {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      currentTranslate = prevTranslate + currentPosition - startX;
      
      // Add boundaries to prevent dragging too far
      const sliderWidth = testimonialSlider.offsetWidth;
      const wrapperWidth = testimonialWrapper.offsetWidth;
      
      // Prevent dragging right past the start
      if (currentTranslate > 0) {
        currentTranslate = 0;
      }
      
      // Prevent dragging left past the end
      if (currentTranslate < wrapperWidth - sliderWidth) {
        currentTranslate = wrapperWidth - sliderWidth;
      }
      
      // If dragging horizontally with touch, prevent default scroll
      if (e.type === 'touchmove' && Math.abs(currentPosition - startX) > 10) {
        e.preventDefault();
      }
    }
  }

  function dragEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    
    // Save final position
    prevTranslate = currentTranslate;
    
    // Remove active class
    testimonialWrapper.classList.remove('drag');
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    testimonialSlider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }
}

/**
 * contact form validation
 */
const contactForm = document.querySelector('.contact-form-wrapper');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Check required fields
    if (!name.value.trim()) {
      highlightError(name, 'Name is required');
      isValid = false;
    } else {
      resetError(name);
    }
    
    if (!email.value.trim()) {
      highlightError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      highlightError(email, 'Please enter a valid email');
      isValid = false;
    } else {
      resetError(email);
    }
    
    if (!message.value.trim()) {
      highlightError(message, 'Message is required');
      isValid = false;
    } else {
      resetError(message);
    }
    
    // If form is valid, show success message
    if (isValid) {
      // In a real scenario, you would send the form data to a server here
      const submitBtn = contactForm.querySelector('.btn');
      const originalText = submitBtn.textContent;
      
      // Show sending status
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form submission in production)
      setTimeout(() => {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        
        // Clear form and append success message
        contactForm.reset();
        contactForm.insertAdjacentElement('beforebegin', successMessage);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
          }
        }, 5000);
      }, 1500);
    }
  });
  
  // Helper functions for form validation
  function highlightError(input, message) {
    input.classList.add('error');
    
    // Create or update error message
    let errorMessage = input.parentNode.querySelector('.error-message');
    
    if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      input.parentNode.appendChild(errorMessage);
    }
    
    errorMessage.textContent = message;
  }
  
  function resetError(input) {
    input.classList.remove('error');
    
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.parentNode.removeChild(errorMessage);
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

/**
 * Date field placeholder fix for mobile
 */
const dateField = document.getElementById('travel-date');

if (dateField) {
  // Make sure the date field shows placeholder on load
  if (!dateField.value) {
    dateField.setAttribute('type', 'text');
  }
  
  // When field is focused, change to date type
  dateField.addEventListener('focus', function() {
    this.setAttribute('type', 'date');
  });
  
  // When field loses focus and is empty, change back to text type
  dateField.addEventListener('blur', function() {
    if (!this.value) {
      this.setAttribute('type', 'text');
    }
  });
}