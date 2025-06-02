// Force content to be visible
document.addEventListener('DOMContentLoaded', function() {
  // Function to force element visibility
  function forceVisible(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
      
      // Force reflow
      void el.offsetWidth;
      
      // Re-apply important display styles based on element type
      if (el.classList.contains('popular-list') || el.classList.contains('features-list')) {
        el.style.display = 'grid';
      }
    });
  }
  
  // Fix section titles and text
  forceVisible('.section-subtitle');
  forceVisible('.section-title');
  forceVisible('.section-text');
  
  // Fix container sections
  forceVisible('.popular');
  forceVisible('.package');
  
  // Fix lists
  forceVisible('.popular-list');
  forceVisible('.features-list');
  
  // Fix cards
  forceVisible('.popular-card');
  forceVisible('.feature-card');
  forceVisible('.card-content');
  
  // Create fallback content if elements are still missing
  setTimeout(() => {
    // Check if destination section is visible
    const popular = document.querySelector('.popular');
    const popularContent = document.querySelector('.popular .section-title');
    
    if (!popularContent || getComputedStyle(popularContent).display === 'none') {
      console.log('Fixing popular destinations section');
      
      // Create replacement content
      const newPopular = document.createElement('section');
      newPopular.className = 'popular fixed-section';
      newPopular.innerHTML = `
        <div class="container">
          <p class="section-subtitle">Destinations That Redefine Discovery</p>
          <h2 class="h2 section-title">These aren't "popular spots." They're revelations.</h2>
          <p class="section-text">
            Each place on this map isn't just beautiful it's alive with soul, story, and silence you can feel. 
            We don't just show you where to go we guide you into the unknown side of Albania the world never told you about.
          </p>
          <div class="cards-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 30px;">
            <div class="card" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
              <div style="height: 200px; overflow: hidden;">
                <img src="./assets/images/berat.jpg" alt="Berat" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div style="padding: 20px;">
                <h3>Berat</h3>
                <p>Discover the "City of a Thousand Windows" with its unique Ottoman architecture and UNESCO World Heritage status.</p>
              </div>
            </div>
            <div class="card" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
              <div style="height: 200px; overflow: hidden;">
                <img src="./assets/images/shkoder1.jpg" alt="Shkodra" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div style="padding: 20px;">
                <h3>Shkodra</h3>
                <p>Explore Albania's cultural capital with its stunning Rozafa Castle, rich history, and beautiful lakeside setting.</p>
              </div>
            </div>
            <div class="card" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
              <div style="height: 200px; overflow: hidden;">
                <img src="./assets/images/tirana1.jpg" alt="Tirana" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div style="padding: 20px;">
                <h3>Tirana</h3>
                <p>Discover Albania's vibrant capital city with its colorful buildings, lively atmosphere, and fascinating mix of history and modernity.</p>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Replace or insert after hero
      if (popular) {
        popular.parentNode.replaceChild(newPopular, popular);
      } else {
        const hero = document.querySelector('.hero');
        if (hero) {
          hero.insertAdjacentElement('afterend', newPopular);
        }
      }
    }
    
    // Check if features section is visible
    const features = document.querySelector('.package');
    const featuresContent = document.querySelector('.package .section-title');
    
    if (!featuresContent || getComputedStyle(featuresContent).display === 'none') {
      console.log('Fixing features section');
      
      // Create replacement content
      const newFeatures = document.createElement('section');
      newFeatures.className = 'package fixed-section';
      newFeatures.innerHTML = `
        <div class="container">
          <p class="section-subtitle">🌍 Features That Elevate Every Journey</p>
          <h2 class="h2 section-title">Handpicked tools. Seamless experiences. Real-world travel, redefined.</h2>
          <div class="cards-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 30px;">
            <div class="card" style="background: white; border-radius: 15px; padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
              <div style="margin-bottom: 20px; color: #0066cc; font-size: 24px;">
                <ion-icon name="person-outline"></ion-icon>
              </div>
              <h3>Curated Itineraries</h3>
              <p>Trips shaped around your style and pace, crafted to match you, not the masses.</p>
            </div>
            <div class="card" style="background: white; border-radius: 15px; padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
              <div style="margin-bottom: 20px; color: #0066cc; font-size: 24px;">
                <ion-icon name="videocam-outline"></ion-icon>
              </div>
              <h3>Lasting Moments</h3>
              <p>Every location, handpicked to help you live stories worth telling, not just take pictures.</p>
            </div>
            <div class="card" style="background: white; border-radius: 15px; padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
              <div style="margin-bottom: 20px; color: #0066cc; font-size: 24px;">
                <ion-icon name="map-outline"></ion-icon>
              </div>
              <h3>Smart Navigation</h3>
              <p>Find your way with precision, from major sights to secret local spots, always at your fingertips.</p>
            </div>
          </div>
        </div>
      `;
      
      // Replace or insert after popular
      if (features) {
        features.parentNode.replaceChild(newFeatures, features);
      } else {
        const newPopular = document.querySelector('.popular.fixed-section') || document.querySelector('.popular');
        if (newPopular) {
          newPopular.insertAdjacentElement('afterend', newFeatures);
        }
      }
    }
  }, 500);
}); 