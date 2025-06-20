/**
 * Complete Translation System Setup
 * Automatically adds data-translate attributes to all translatable content
 * Run this once to set up comprehensive translations across the entire website
 */

// Function to add data-translate attributes to all remaining testimonials
function setupTestimonialTranslations() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  
  testimonials.forEach((testimonial, index) => {
    const testimonialNumber = index + 1;
    
    // Add rating translation
    const rating = testimonial.querySelector('.rating-text');
    if (rating && !rating.hasAttribute('data-translate')) {
      rating.setAttribute('data-translate', 'testimonial_rating');
    }
    
    // Add testimonial text translation
    const text = testimonial.querySelector('.testimonial-text');
    if (text && !text.hasAttribute('data-translate')) {
      text.setAttribute('data-translate', `testimonial_${testimonialNumber}_text`);
    }
    
    // Add author name translation
    const author = testimonial.querySelector('.client-name');
    if (author && !author.hasAttribute('data-translate')) {
      author.setAttribute('data-translate', `testimonial_${testimonialNumber}_author`);
    }
    
    // Add date translation
    const date = testimonial.querySelector('.review-date');
    if (date && !date.hasAttribute('data-translate')) {
      date.setAttribute('data-translate', `testimonial_${testimonialNumber}_date`);
    }
  });
}

// Function to add data-translate to all headings and paragraphs
function setupContentTranslations() {
  // Main content areas to translate
  const translatableSelectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p:not(.testimonial-text):not(.client-name):not(.review-date)',
    '.btn:not([data-translate])',
    '.card-title:not([data-translate])',
    '.card-text:not([data-translate])',
    '.section-title:not([data-translate])',
    '.section-subtitle:not([data-translate])',
    '.hero-title:not([data-translate])',
    '.hero-text:not([data-translate])'
  ];
  
  translatableSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      // Skip if already has data-translate
      if (element.hasAttribute('data-translate')) return;
      
      // Skip if inside testimonials (handled separately)
      if (element.closest('.testimonials')) return;
      
      // Skip if empty or only contains HTML
      const textContent = element.textContent.trim();
      if (!textContent || textContent.length < 3) return;
      
      // Generate a translation key based on content
      const key = generateTranslationKey(element, textContent);
      if (key) {
        element.setAttribute('data-translate', key);
        console.log(`Added translation key: ${key} for text: ${textContent.substring(0, 50)}...`);
      }
    });
  });
}

// Function to generate translation keys based on content
function generateTranslationKey(element, textContent) {
  // Check if element has specific classes that suggest a key pattern
  if (element.classList.contains('hero-title')) return 'hero_title';
  if (element.classList.contains('hero-text')) return 'hero_subtitle';
  if (element.classList.contains('section-title')) {
    const section = element.closest('section');
    if (section) {
      if (section.classList.contains('popular')) return 'popular_title';
      if (section.classList.contains('testimonials')) return 'testimonials_subtitle';
      if (section.id === 'features') return 'features_title';
    }
  }
  
  // For buttons
  if (element.classList.contains('btn')) {
    const text = textContent.toLowerCase();
    if (text.includes('learn')) return 'btn_learn_more';
    if (text.includes('book')) return 'btn_book_now';
    if (text.includes('contact')) return 'btn_contact_us';
    if (text.includes('read')) return 'btn_read_more';
    if (text.includes('explore')) return 'popular_explore';
  }
  
  // Generate dynamic key for other content
  const baseKey = textContent
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(' ')
    .slice(0, 3)
    .join('_');
  
  return baseKey.length > 2 ? `content_${baseKey}` : null;
}

// Function to expand translations object with missing keys
function expandTranslationsObject() {
  // Get all elements with data-translate
  const translatedElements = document.querySelectorAll('[data-translate]');
  const missingKeys = [];
  
  translatedElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const currentLang = window.translationManager?.getCurrentTranslations() || window.translations?.en || {};
    
    if (!currentLang[key]) {
      missingKeys.push({
        key: key,
        text: element.textContent.trim(),
        element: element.tagName.toLowerCase()
      });
    }
  });
  
  if (missingKeys.length > 0) {
    console.log('Missing translation keys found:', missingKeys);
    // Generate translation object additions
    const newTranslations = generateMissingTranslations(missingKeys);
    console.log('Add these to your translations.js file:', newTranslations);
  }
}

// Function to generate missing translations for all languages
function generateMissingTranslations(missingKeys) {
  const languages = ['en', 'sq', 'de', 'fr', 'it'];
  const result = {};
  
  languages.forEach(lang => {
    result[lang] = {};
    missingKeys.forEach(item => {
      result[lang][item.key] = item.text; // Start with English, then translate manually
    });
  });
  
  return result;
}

// Function to enhance the translation system for better performance
function enhanceTranslationSystem() {
  // Add MutationObserver to handle dynamically added content
  if ('MutationObserver' in window) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if new content needs translation
            const translatableElements = node.querySelectorAll('[data-translate]');
            if (translatableElements.length > 0 && window.translationManager) {
              window.translationManager.translatePage();
            }
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// Initialize the complete translation system
function initializeCompleteTranslations() {
  console.log('🌐 Initializing Complete Translation System...');
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTranslationSetup);
  } else {
    runTranslationSetup();
  }
}

function runTranslationSetup() {
  setTimeout(() => {
    setupTestimonialTranslations();
    setupContentTranslations();
    enhanceTranslationSystem();
    
    // Re-initialize translation manager if it exists
    if (window.translationManager) {
      window.translationManager.translatePage();
    }
    
    console.log('✅ Complete Translation System Initialized!');
    console.log('📊 Run expandTranslationsObject() to see missing keys');
  }, 100);
}

// Auto-initialize
initializeCompleteTranslations();

// Export functions for manual use
window.translationSetup = {
  setupTestimonialTranslations,
  setupContentTranslations,
  expandTranslationsObject,
  enhanceTranslationSystem
};

// Enhanced Complete Translation System with Automatic Content Detection
// This system ensures EVERY text element gets translated automatically

class EnhancedCompleteTranslationSystem {
  constructor() {
    this.processedElements = new Set();
    this.translationKeyCounter = 0;
    this.contentMap = new Map();
    
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.processAllContent();
      });
    } else {
      this.processAllContent();
    }
  }

  processAllContent() {
    console.log('🔄 Enhanced Complete Translation System: Processing all content...');
    
    // Process all text-containing elements
    this.processTextElements();
    
    // Process form elements
    this.processFormElements();
    
    // Process specific content sections
    this.processSpecificSections();
    
    console.log('✅ Enhanced Complete Translation System: All content processed');
  }

  processTextElements() {
    // Select all elements that can contain text
    const textSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'span', 'div', 'a', 'li',
      'button', 'label', 'title',
      '.hero-title', '.hero-text', '.section-title', '.section-subtitle',
      '.card-title', '.card-text', '.feature-title', '.feature-desc',
      '.testimonial-text', '.client-name', '.review-date',
      '.contact-title', '.contact-text', '.footer-text'
    ];

    textSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => this.processElement(element));
    });
  }

  processFormElements() {
    // Process form inputs, textareas, and placeholders
    const formElements = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    formElements.forEach(element => {
      if (!element.hasAttribute('data-translate') && element.placeholder) {
        const key = this.generateTranslationKey('placeholder', element.placeholder);
        element.setAttribute('data-translate', key);
        this.addToTranslations(key, element.placeholder);
      }
    });
  }

  processSpecificSections() {
    // Process navigation
    this.processNavigation();
    
    // Process hero sections
    this.processHeroSections();
    
    // Process destination-specific content
    this.processDestinationContent();
    
    // Process hotel content
    this.processHotelContent();
    
    // Process travel content
    this.processTravelContent();
    
    // Process guide content
    this.processGuideContent();
  }

  processElement(element) {
    if (!element || this.processedElements.has(element) || element.hasAttribute('data-translate')) {
      return;
    }

    const text = this.getElementText(element);
    if (!text || text.length < 2) {
      return;
    }

    // Skip if element contains only special characters or numbers
    if (!/[a-zA-Z]/.test(text)) {
      return;
    }

    // Skip if element is inside a script or style tag
    if (element.closest('script') || element.closest('style')) {
      return;
    }

    // Generate translation key
    const key = this.generateTranslationKey(element.tagName.toLowerCase(), text);
    element.setAttribute('data-translate', key);
    
    // Add to translations if not exists
    this.addToTranslations(key, text);
    
    this.processedElements.add(element);
  }

  getElementText(element) {
    // Get direct text content, excluding child elements
    let text = '';
    for (let node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent.trim();
      }
    }
    return text.trim();
  }

  generateTranslationKey(prefix, text) {
    // Clean text for key generation
    const cleanText = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 30);
    
    return `auto_${prefix}_${cleanText}_${++this.translationKeyCounter}`;
  }

  addToTranslations(key, text) {
    // Add to global translations if available
    if (window.translations) {
      // Add to English
      if (!window.translations.en[key]) {
        window.translations.en[key] = text;
      }
      
      // Add placeholders for other languages
      ['sq', 'de', 'fr', 'it'].forEach(lang => {
        if (window.translations[lang] && !window.translations[lang][key]) {
          window.translations[lang][key] = text; // Fallback to English
        }
      });
    }
  }

  processNavigation() {
    // Ensure all navigation items have translation attributes
    const navItems = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navItems.forEach(item => {
      if (!item.hasAttribute('data-translate')) {
        const text = item.textContent.trim();
        const key = this.getNavTranslationKey(text);
        if (key) {
          item.setAttribute('data-translate', key);
        }
      }
    });
  }

  getNavTranslationKey(text) {
    const navMap = {
      'Home': 'nav_home',
      'About': 'nav_about',
      'About Us': 'nav_about',
      'Places': 'nav_places',
      'Places to Visit': 'nav_places',
      'Places to Visit & Trips': 'nav_places',
      'Hotels': 'nav_hotels',
      'Travels': 'nav_travels',
      'Guides': 'nav_guides',
      'Licensed Guides': 'nav_guides'
    };
    return navMap[text] || null;
  }

  processHeroSections() {
    // Process hero titles and descriptions
    const heroElements = [
      { selector: '.hero-title', prefix: 'hero_title' },
      { selector: '.hero-text', prefix: 'hero_text' },
      { selector: '.destination-hero .hero-title', prefix: 'dest_hero_title' },
      { selector: '.destination-hero .hero-text', prefix: 'dest_hero_text' }
    ];

    heroElements.forEach(({ selector, prefix }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        if (!element.hasAttribute('data-translate')) {
          const text = element.textContent.trim();
          const key = `${prefix}_${index + 1}`;
          element.setAttribute('data-translate', key);
          this.addToTranslations(key, text);
        }
      });
    });
  }

  processDestinationContent() {
    // Process destination-specific content
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    
    // Process destination details
    const detailElements = document.querySelectorAll('.destination-details h2, .destination-details h3, .destination-details p, .destination-details li');
    detailElements.forEach((element, index) => {
      if (!element.hasAttribute('data-translate')) {
        const text = element.textContent.trim();
        if (text.length > 5) {
          const key = `${pageName}_content_${element.tagName.toLowerCase()}_${index + 1}`;
          element.setAttribute('data-translate', key);
          this.addToTranslations(key, text);
        }
      }
    });
  }

  processHotelContent() {
    // Process hotel-specific content
    const hotelElements = document.querySelectorAll('.hotel-card, .accommodation-item');
    hotelElements.forEach((card, index) => {
      const titleEl = card.querySelector('.card-title, .hotel-title');
      const descEl = card.querySelector('.card-text, .hotel-description');
      
      if (titleEl && !titleEl.hasAttribute('data-translate')) {
        const key = `hotel_title_${index + 1}`;
        titleEl.setAttribute('data-translate', key);
        this.addToTranslations(key, titleEl.textContent.trim());
      }
      
      if (descEl && !descEl.hasAttribute('data-translate')) {
        const key = `hotel_desc_${index + 1}`;
        descEl.setAttribute('data-translate', key);
        this.addToTranslations(key, descEl.textContent.trim());
      }
    });
  }

  processTravelContent() {
    // Process travel itinerary content
    const travelElements = document.querySelectorAll('.itinerary-item, .travel-package');
    travelElements.forEach((item, index) => {
      const titleEl = item.querySelector('.itinerary-title, .package-title');
      const descEl = item.querySelector('.itinerary-description, .package-description');
      
      if (titleEl && !titleEl.hasAttribute('data-translate')) {
        const key = `travel_title_${index + 1}`;
        titleEl.setAttribute('data-translate', key);
        this.addToTranslations(key, titleEl.textContent.trim());
      }
      
      if (descEl && !descEl.hasAttribute('data-translate')) {
        const key = `travel_desc_${index + 1}`;
        descEl.setAttribute('data-translate', key);
        this.addToTranslations(key, descEl.textContent.trim());
      }
    });
  }

  processGuideContent() {
    // Process guide profiles
    const guideElements = document.querySelectorAll('.guide-card, .guide-profile');
    guideElements.forEach((card, index) => {
      const nameEl = card.querySelector('.guide-name');
      const bioEl = card.querySelector('.guide-bio, .guide-description');
      
      if (nameEl && !nameEl.hasAttribute('data-translate')) {
        const key = `guide_name_${index + 1}`;
        nameEl.setAttribute('data-translate', key);
        this.addToTranslations(key, nameEl.textContent.trim());
      }
      
      if (bioEl && !bioEl.hasAttribute('data-translate')) {
        const key = `guide_bio_${index + 1}`;
        bioEl.setAttribute('data-translate', key);
        this.addToTranslations(key, bioEl.textContent.trim());
      }
    });
  }
}

// Initialize the enhanced system
document.addEventListener('DOMContentLoaded', function() {
  // Initialize enhanced translation system
  window.enhancedTranslationSystem = new EnhancedCompleteTranslationSystem();
  
  // Original complete translation system logic...
  console.log('🔄 Setting up complete translation system...');
  
  setTimeout(() => {
    assignTranslationAttributes();
    console.log('✅ Complete translation system setup finished');
  }, 100);
}); 