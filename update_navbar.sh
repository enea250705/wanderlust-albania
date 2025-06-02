#!/bin/bash

# List of HTML files to update (city pages)
FILES=("berat.html" "durres.html" "pogradec.html" "shkodra.html" "tirana.html" "vlora.html")

# CSS styles for the modern navbar and mobile menu
HEADER_CSS='<style>
  /* Modern Header & Navigation */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    z-index: 100;
    padding: 10px 0;
    transition: all 0.3s ease;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    max-height: 50px;
    transition: all 0.3s ease;
  }
  
  .header.active .logo img {
    max-height: 45px;
  }
  
  /* Desktop Navigation */
  .desktop-nav {
    display: flex;
    justify-content: center;
  }
  
  .desktop-nav-list {
    display: flex;
    gap: 5px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .nav-link {
    display: block;
    padding: 10px 15px;
    color: var(--gunmetal);
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
  }
  
  .nav-link:hover {
    color: var(--bright-navy-blue);
    background-color: rgba(0, 102, 204, 0.08);
  }
  
  .nav-link.active {
    color: var(--bright-navy-blue);
    background-color: rgba(0, 102, 204, 0.12);
  }
  
  /* Header Right Section */
  .header-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .header-contact {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gunmetal);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .header-contact:hover {
    color: var(--bright-navy-blue);
  }
  
  .contact-icon {
    font-size: 18px;
    color: var(--bright-navy-blue);
  }
  
  /* Language Selector */
  .language-selector {
    position: relative;
  }
  
  .language-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--gunmetal);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .language-btn:hover {
    background-color: rgba(0, 102, 204, 0.08);
  }
  
  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    width: 150px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    padding: 10px 0;
    margin-top: 10px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 200;
  }
  
  .language-dropdown.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .language-dropdown li {
    list-style: none;
  }
  
  .language-dropdown li a {
    display: block;
    padding: 8px 15px;
    color: var(--gunmetal);
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .language-dropdown li a:hover {
    background-color: rgba(0, 102, 204, 0.08);
    color: var(--bright-navy-blue);
  }
  
  /* Mobile Menu Toggle */
  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 300;
  }
  
  .menu-bar {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--gunmetal);
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  /* Hamburger menu animation */
  .mobile-menu-toggle.active .menu-bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .mobile-menu-toggle.active .menu-bar:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active .menu-bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
  
  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 85%;
    max-width: 400px;
    height: 100vh;
    background-color: var(--white);
    z-index: 2000;
    transition: all 0.4s ease-in-out;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  
  .mobile-menu.active {
    right: 0;
  }
  
  .mobile-menu-container {
    padding: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .mobile-menu-close {
    background: none;
    border: none;
    font-size: 24px;
    color: var(--gunmetal);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  
  .mobile-menu-close:hover {
    color: var(--bright-navy-blue);
    transform: rotate(90deg);
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  /* Mobile Contact */
  .mobile-contact {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background-color: rgba(0, 102, 204, 0.08);
    border-radius: 10px;
    text-decoration: none;
    margin-bottom: 30px;
  }
  
  .mobile-contact ion-icon {
    font-size: 24px;
    color: var(--bright-navy-blue);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
  }
  
  .contact-label {
    font-size: 12px;
    color: var(--gunmetal);
  }
  
  .contact-number {
    font-size: 16px;
    font-weight: 500;
    color: var(--bright-navy-blue);
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    margin-bottom: 30px;
  }
  
  .mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .mobile-nav-link {
    display: block;
    padding: 15px;
    border-radius: 10px;
    color: var(--gunmetal);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-bottom: 5px;
  }
  
  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    background-color: rgba(0, 102, 204, 0.08);
    color: var(--bright-navy-blue);
    transform: translateX(5px);
  }
  
  /* Mobile Language Selector */
  .mobile-language-selector {
    margin-bottom: 30px;
  }
  
  .lang-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--gunmetal);
    margin-bottom: 15px;
  }
  
  .mobile-language-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .lang-option {
    display: block;
    padding: 8px 15px;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    color: var(--gunmetal);
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .lang-option:hover,
  .lang-option.active {
    background-color: var(--bright-navy-blue);
    color: var(--white);
  }
  
  /* Mobile Social */
  .mobile-social {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .social-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--gunmetal);
    margin-bottom: 15px;
  }
  
  .social-list {
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 50%;
    color: var(--gunmetal);
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background-color: var(--bright-navy-blue);
    color: var(--white);
    transform: translateY(-3px);
  }
  
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 1500;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .overlay.active {
    opacity: 1;
    visibility: visible;
  }
  
  /* Responsive Styles */
  @media (max-width: 992px) {
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-toggle {
      display: flex;
    }
    
    .header-contact {
      display: none;
    }
  }
  
  @media (max-width: 576px) {
    .header-container {
      padding: 0 15px;
    }
    
    .logo img {
      max-height: 45px;
    }
    
    .language-btn {
      padding: 5px 8px;
      font-size: 12px;
    }
  }
  
  main {
    margin-top: 80px;
  }
</style>'

# HTML structure for the modern header and mobile menu
HEADER_HTML='<!-- HEADER -->
<header class="header" data-header>
  <div class="container header-container">
    <!-- Logo -->
    <a href="index.html" class="logo">
      <img src="./assets/images/wanderlogo1.png" alt="Wanderlust Albania logo" class="smaller-logo">
    </a>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <ul class="desktop-nav-list">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="hotels.html" class="nav-link">Hotels</a></li>
        <li><a href="travels.html" class="nav-link">Travels</a></li>
        <li><a href="guides.html" class="nav-link">Licensed Guides</a></li>
        <li><a href="places.html" class="nav-link">Places to Visit</a></li>
        <li><a href="about.html" class="nav-link">About Us</a></li>
      </ul>
    </nav>

    <!-- Right Header Section -->
    <div class="header-right">
      <!-- Contact Info -->
      <a href="tel:+355684170700" class="header-contact">
        <ion-icon name="call-outline" class="contact-icon"></ion-icon>
        <span>+355 684 170 700</span>
      </a>

      <!-- Language Selector -->
      <div class="language-selector">
        <button class="language-btn">
          <span>EN</span>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        <ul class="language-dropdown">
          <li><a href="#" data-lang="sq">Shqip</a></li>
          <li><a href="#" data-lang="de">Deutsch</a></li>
          <li><a href="#" data-lang="fr">Français</a></li>
          <li><a href="#" data-lang="en">English</a></li>
          <li><a href="#" data-lang="it">Italiano</a></li>
        </ul>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" data-mobile-menu-toggle>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu" data-mobile-menu>
  <div class="mobile-menu-container">
    <!-- Mobile Menu Header -->
    <div class="mobile-menu-header">
      <a href="index.html" class="logo">
        <img src="./assets/images/wanderlogo1.png" alt="Wanderlust Albania logo" class="smaller-logo">
      </a>
      <button class="mobile-menu-close" data-mobile-menu-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>

    <!-- Mobile Contact -->
    <a href="tel:+355684170700" class="mobile-contact">
      <ion-icon name="call-outline"></ion-icon>
      <div class="contact-info">
        <span class="contact-label">For inquiries:</span>
        <span class="contact-number">+355 684 170 700</span>
      </div>
    </a>

    <!-- Mobile Navigation -->
    <nav class="mobile-nav">
      <ul class="mobile-nav-list">
        <li><a href="index.html" class="mobile-nav-link">Home</a></li>
        <li><a href="hotels.html" class="mobile-nav-link">Hotels</a></li>
        <li><a href="travels.html" class="mobile-nav-link">Travels</a></li>
        <li><a href="guides.html" class="mobile-nav-link">Licensed Guides</a></li>
        <li><a href="places.html" class="mobile-nav-link">Places to Visit & Trips</a></li>
        <li><a href="about.html" class="mobile-nav-link">About Us</a></li>
      </ul>
    </nav>

    <!-- Mobile Language Selector -->
    <div class="mobile-language-selector">
      <h4 class="lang-title">Choose Language</h4>
      <ul class="mobile-language-list">
        <li><a href="#" data-lang="sq" class="lang-option">Shqip</a></li>
        <li><a href="#" data-lang="de" class="lang-option">Deutsch</a></li>
        <li><a href="#" data-lang="fr" class="lang-option">Français</a></li>
        <li><a href="#" data-lang="en" class="lang-option active">English</a></li>
        <li><a href="#" data-lang="it" class="lang-option">Italiano</a></li>
      </ul>
    </div>

    <!-- Social Links -->
    <div class="mobile-social">
      <h4 class="social-title">Follow Us</h4>
      <ul class="social-list">
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Overlay -->
<div class="overlay" data-mobile-overlay></div>'

# JavaScript code for the mobile menu functionality
MENU_JS='<!-- Additional script for improved navigation -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const header = document.querySelector(".header");
    const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
    const mobileMenuClose = document.querySelector("[data-mobile-menu-close]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");
    const overlay = document.querySelector("[data-mobile-overlay]");
    const langBtn = document.querySelector(".language-btn");
    const langDropdown = document.querySelector(".language-dropdown");
    
    // Set active menu item based on current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const desktopLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    
    function setActiveLinks(links) {
      links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
          link.classList.add("active");
        }
      });
    }
    
    setActiveLinks(desktopLinks);
    setActiveLinks(mobileLinks);
    
    // Mobile menu toggle
    function openMobileMenu() {
      if (mobileMenu) mobileMenu.classList.add("active");
      if (overlay) overlay.classList.add("active");
      document.body.classList.add("nav-active");
      if (mobileMenuToggle) mobileMenuToggle.classList.add("active");
      console.log("Opening mobile menu");
    }
    
    function closeMobileMenu() {
      if (mobileMenu) mobileMenu.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
      document.body.classList.remove("nav-active");
      if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
      console.log("Closing mobile menu");
    }
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function() {
        console.log("Menu toggle clicked");
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }
    
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", function() {
        console.log("Close button clicked");
        closeMobileMenu();
      });
    }
    
    if (overlay) {
      overlay.addEventListener("click", closeMobileMenu);
    }
    
    // Close mobile menu when clicking a link
    if (mobileLinks) {
      mobileLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
      });
    }
    
    // Language dropdown toggle
    if (langBtn) {
      langBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (langDropdown) langDropdown.classList.toggle("active");
      });
    }
    
    // Close language dropdown when clicking outside
    document.addEventListener("click", function() {
      if (langDropdown) {
        langDropdown.classList.remove("active");
      }
    });
    
    // Language selection in mobile menu
    const langOptions = document.querySelectorAll(".lang-option");
    if (langOptions) {
      langOptions.forEach(option => {
        option.addEventListener("click", function(e) {
          // Remove active class from all options
          langOptions.forEach(opt => opt.classList.remove("active"));
          
          // Add active class to clicked option
          this.classList.add("active");
          
          // Update the language button text
          const lang = this.getAttribute("data-lang").toUpperCase();
          const langBtnText = document.querySelector(".language-btn span");
          if (langBtnText) {
            langBtnText.textContent = lang;
          }
          
          // Close mobile menu
          closeMobileMenu();
        });
      });
    }
    
    // Header scroll effect
    window.addEventListener("scroll", function() {
      if (window.scrollY > 20) {
        if (header) header.classList.add("active");
      } else {
        if (header) header.classList.remove("active");
      }
    });
    
    // Handle ESC key to close mobile menu
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        closeMobileMenu();
        if (langDropdown) {
          langDropdown.classList.remove("active");
        }
      }
    });
    
    console.log("Menu script initialized with new data attributes");
  });
</script>'

echo "Starting the update process for the city HTML files..."

# Process each HTML file
for file in "${FILES[@]}"; do
  echo "Processing $file..."
  
  # Check if file exists
  if [ -f "$file" ]; then
    # Create a backup of the original file
    cp "$file" "${file}.bak"
    
    # Add CSS styles after the Google Fonts link
    sed -i 's|</head>|'"$HEADER_CSS"'\n</head>|' "$file"
    
    # Replace the old header with the new header
    sed -i 's|<header class="header" data-header>.*<div class="overlay".*<main>|'"$HEADER_HTML"'\n\n  <main>|s' "$file"
    
    # Add the JavaScript before the closing body tag
    sed -i 's|</body>|'"$MENU_JS"'\n</body>|' "$file"
    
    echo "✅ Updated $file successfully"
  else
    echo "❌ File $file not found"
  fi
done

echo "All files have been updated!" 