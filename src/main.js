import './style.css'

const detailIcons = {
  'Born': 'calendar',
  'Available for New Homes': 'home',
  'Breed': 'beaker',
  'Gender': 'user',
  'Coat Colors': 'paint-brush',
  'Traits': 'sparkles',
  'Litter Trained': 'check-circle',
  'Eating Solid Food': 'cake',
  'Rehoming Fee': 'currency-dollar',
};

const cats = [
  {
    name: 'Amora',
    images: [
      '/amora-1.JPG',
      '/amora-2.JPG',
      '/amora-3.JPG',
      '/amora-4.JPG',
      '/amora-5.JPG',
      '/amora-6.JPG',
    ],
    desc: 'A shy, sweet little kitty who shows her tummy when she wants attention.',
    details: [
      { label: 'Born', value: 'January 31, 2025' },
      { label: 'Available for New Homes', value: 'Yes' },
      { label: 'Breed', value: 'Maine Coon x Scottish Fold (Dominant Maine Coon)' },
      { label: 'Gender', value: 'Female' },
      { label: 'Coat Colors', value: 'Blue silver smoke' },
      { label: 'Traits', value: 'Tufted ears, long legs, shy yet affectionate.' },
      { label: 'Litter Trained', value: 'Yes' },
      { label: 'Eating Solid Food', value: 'Yes' },
      { label: 'Rehoming Fee', value: '₱15,000' },
    ],
  },
  {
    name: 'Amira',
    images: [
      '/amira-1.JPG',
      '/amira-2.JPG',
      '/amira-3.JPG',
      '/amira-4.JPG',
      '/amira-5.JPG',
    ],
    desc: 'She\'s our snuggle buddy—able to sleep anywhere and always letting out a little cry when no one\'s around.',
    details: [
      { label: 'Born', value: 'January 31, 2025' },
      { label: 'Available for New Homes', value: 'Under observation' },
      { label: 'Breed', value: 'Maine Coon x Scottish Fold (Dominant Maine Coon)' },
      { label: 'Gender', value: 'Female' },
      { label: 'Coat Colors', value: 'Blue silver smoke' },
      { label: 'Traits', value: 'Tufted ears, long legs, playful & observer.' },
      { label: 'Litter Trained', value: 'No - she prefers to do her business in the bathroom.' },
      { label: 'Eating Solid Food', value: 'Yes' },
      { label: 'Rehoming Fee', value: '₱15,000' },
    ],
  },
  {
    name: 'Amara',
    images: [
      '/amara-1.JPG',
      '/amara-2.JPG',
      '/amara-3.JPG',
      '/amara-4.JPG',
      '/amara-5.JPG',
      '/amara-6.JPG',
    ],
    desc: 'She\'s the girl with the big appetite: play all day, feast all night!',
    details: [
      { label: 'Born', value: 'January 31, 2025' },
      { label: 'Available for New Homes', value: 'Yes' },
      { label: 'Breed', value: 'Maine Coon x Scottish Fold (Dominant Scottish Fold)' },
      { label: 'Gender', value: 'Female' },
      { label: 'Coat Colors', value: 'Ticked tabby-tortoiseshell' },
      { label: 'Traits', value: 'Folded ears, long legs, gentle nature, and a big appetite.' },
      { label: 'Litter Trained', value: 'Yes' },
      { label: 'Eating Solid Food', value: 'Yes' },
      { label: 'Rehoming Fee', value: '₱15,000' },
    ],
  },
]

const parents = {
  mother: {
    name: 'Mother: Maine Coon',
    image: '/mother.JPG',
  },
  father: {
    name: 'Father: Scottish Fold',
    image: '/father.JPG',
  },
}

document.body.insertAdjacentHTML('afterbegin', '<div id="footprints-bg" style="position:fixed;z-index:0;top:0;left:0;width:100vw;height:100vh;pointer-events:none;"></div>');

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const footprintSVG = `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="19" cy="32" rx="7" ry="5" fill="#D89B5A"/><ellipse cx="7" cy="19" rx="3" ry="5" fill="#D89B5A"/><ellipse cx="31" cy="19" rx="3" ry="5" fill="#D89B5A"/><ellipse cx="13" cy="10" rx="2.2" ry="3.5" fill="#D89B5A"/><ellipse cx="25" cy="10" rx="2.2" ry="3.5" fill="#D89B5A"/></svg>`;

const footprintsBg = document.getElementById('footprints-bg');
const header = document.querySelector('header');
const main = document.querySelector('main');
const headerRect = header ? header.getBoundingClientRect() : {height: 180};
const mainRect = main ? main.getBoundingClientRect() : {height: window.innerHeight - (headerRect.height || 180)};

const numPrints = Math.floor(randomBetween(14, 22));
for (let i = 0; i < numPrints; i++) {
  const div = document.createElement('div');
  div.innerHTML = footprintSVG;
  const svg = div.firstChild;
  const top = randomBetween(0, 95); // 0 to 95vh
  const left = randomBetween(0, 95); // 0 to 95vw
  const rot = randomBetween(-30, 30);
  const opacity = randomBetween(0.13, 0.28);
  svg.style.position = 'absolute';
  svg.style.left = left + 'vw';
  svg.style.top = top + 'vh';
  svg.style.transform = `rotate(${rot}deg)`;
  svg.style.opacity = opacity;
  svg.style.pointerEvents = 'none';
  footprintsBg.appendChild(svg);
}

document.querySelector('#app').innerHTML = `
  <header class="hero" data-aos="fade-down">
    <div class="site-header-content">
      <img src="/logo.png" alt="Coontara Cattery Logo" class="site-logo" />
      <div class="site-title-group">
        <h1 class="site-title">Coontara Cattery</h1>
        <p class="site-tagline">Maine Coon x Scottish Fold kittens for sale</p>
      </div>
    </div>
  </header>
  <main>
    <h2 class="squiggle-highlight" data-aos="fade-up">Meet Our Kittens</h2>
    <section class="kittens">
      ${cats.map((cat, idx) => `
        <div class="cat-card" data-aos="fade-up" data-aos-delay="${100 + idx * 100}">
          <div class="cat-highlight">
            <img src="${cat.images[0]}" alt="${cat.name} highlight" class="highlight-photo" data-lightbox="${cat.images[0]}" />
          </div>
          <div class="cat-photos">
            ${cat.images.map((img, i) => `<img src="${img}" alt="${cat.name} photo ${i+1}" data-lightbox="${img}" class="cat-photo-variant${i+1}" />`).join('')}
          </div>
          <h3>${cat.name}</h3>
          <p>${cat.desc}</p>
          <ul class="cat-details-list">
            ${cat.details.map(d => `
              <li class="cat-detail-item">
                <span class="cat-detail-icon">
                  <img src="/icons/${detailIcons[d.label] || 'question-mark-circle'}.svg" alt="${d.label} icon" width="22" height="22" />
                </span>
                <span class="cat-detail-text">
                  <span class="cat-detail-label">${d.label}</span>
                  <span>${d.value}</span>
                </span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </section>
    <section class="parents-section" data-aos="fade-up">
      <h2 class="squiggle-highlight">Meet the Parents</h2>
      <div class="parents">
        <div class="parent" data-aos="fade-right">
          <img src="${parents.mother.image}" alt="Mother Maine Coon" class="parent-photo" />
          <span class="parent-label">Mother</span>
          <span class="parent-breed">Maine Coon</span>
        </div>
        <div class="parent" data-aos="fade-left">
          <img src="${parents.father.image}" alt="Father Scottish Fold" class="parent-photo" />
          <span class="parent-label">Father</span>
          <span class="parent-breed">Scottish Fold</span>
        </div>
      </div>
    </section>
    <section class="faq-section" data-aos="fade-up">
      <h2 class="squiggle-highlight">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item" data-aos="fade-up" data-aos-delay="0">
          <div class="faq-q">Are the kittens negotiable in price?</div>
          <div class="faq-a">Yes, prices are negotiable.</div>
        </div>
        <div class="faq-item" data-aos="fade-up" data-aos-delay="100">
          <div class="faq-q">Is shipping free?</div>
          <div class="faq-a">Yes, we offer free shipping within Metro Manila.</div>
        </div>
        <div class="faq-item" data-aos="fade-up" data-aos-delay="200">
          <div class="faq-q">How can I contact you?</div>
          <div class="faq-a">You can reach us via:<br>
            &ndash; <a href="https://www.facebook.com/espenidapatriciamae/" target="_blank">Facebook: Patricia Mae Espenida</a><br>
            &ndash; <a href="viber://chat?number=+639955613221" target="_blank">Viber</a> or <a href="tel:09955613221">Text: 0995 561 3221</a>
          </div>
        </div>
        <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
          <div class="faq-q">Are the kittens vaccinated, dewormed, and litter trained?</div>
          <div class="faq-a">Yes, all our kittens are vaccinated, dewormed, and litter trained before going to their new homes.</div>
        </div>
        <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
          <div class="faq-q">Can I request more photos of the kittens or parents?</div>
          <div class="faq-a">Absolutely! <a href="https://www.facebook.com/espenidapatriciamae/" target="_blank">Message us on Facebook</a> or <a href="viber://chat?number=+639955613221" target="_blank">Viber</a> and we'll be happy to send you more photos or videos.</div>
        </div>
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
          <div class="faq-q">Why is it called &quot;Coontara&quot;?</div>
          <div class="faq-a">“Coontara” is a name inspired by our love for Maine Coons. ‘Coon’ comes from the majestic breed we specialize in, while ‘tara’ is a Filipino expression meaning ‘let's go' or 'come along.' Together, it reflects an open invitation—to discover the charm of Maine Coons and to be part of a loving, cat-centered home. Coontara is more than a cattery; it's a welcoming space where Maine Coons are raised with warmth, care, and pride.</div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="footer-row">
      <span class="footer-icon"><img src="/icons/home.svg" width="22" height="22" alt="Location" /></span>
      <span>Tunasan, Muntinlupa</span>
    </div>
    <div class="footer-row">
      <span class="footer-icon"><img src="/icons/user.svg" width="22" height="22" alt="Contact" /></span>
      <span><a href="tel:09955613221">0995 561 3221</a> / <a href="https://www.facebook.com/espenidapatriciamae/" target="_blank">FB: Patricia Mae Espenida</a></span>
    </div>
    <div class="footer-row">
      <span class="copyright">&copy; 2025 Coontara Cattery. All rights reserved.</span>
    </div>
  </footer>
  <div id="lightbox-modal" class="lightbox-modal" style="display:none;">
    <span class="lightbox-close">&times;</span>
    <button id="lightbox-prev" class="lightbox-arrow" style="display:none;" aria-label="Previous image">&#8592;</button>
    <img class="lightbox-content" id="lightbox-img" src="" alt="cat photo large" />
    <button id="lightbox-next" class="lightbox-arrow" style="display:none;" aria-label="Next image">&#8594;</button>
  </div>
`;

// Lightbox slider state
let currentCatIdx = null;
let currentImgIdx = null;

const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

// Helper to update lightbox image and arrows
function updateLightbox() {
  if (currentCatIdx === null || currentImgIdx === null) return;
  const imgs = cats[currentCatIdx].images;
  lightboxImg.src = imgs[currentImgIdx];
  prevBtn.style.display = currentImgIdx > 0 ? 'block' : 'none';
  nextBtn.style.display = currentImgIdx < imgs.length - 1 ? 'block' : 'none';
}

// Add event listeners to kitten images
// We need to select all kitten images and know which cat and image index they belong to
cats.forEach((cat, catIdx) => {
  cat.images.forEach((img, imgIdx) => {
    const selector = `.cat-photo-variant${imgIdx+1}[src="${img}"]`;
    document.querySelectorAll(selector).forEach(photoEl => {
      photoEl.addEventListener('click', function() {
        currentCatIdx = catIdx;
        currentImgIdx = imgIdx;
        lightboxModal.style.display = 'flex';
        updateLightbox();
      });
    });
  });
});

// Add lightbox to parent images (single image, no slider)
document.querySelectorAll('.parent img').forEach(img => {
  img.addEventListener('click', function() {
    currentCatIdx = null;
    currentImgIdx = null;
    lightboxModal.style.display = 'flex';
    lightboxImg.src = this.src;
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  });
});

closeBtn.onclick = function() {
  lightboxModal.style.display = 'none';
  lightboxImg.src = '';
  currentCatIdx = null;
  currentImgIdx = null;
};

lightboxModal.onclick = function(e) {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = 'none';
    lightboxImg.src = '';
    currentCatIdx = null;
    currentImgIdx = null;
  }
};

prevBtn.onclick = function(e) {
  e.stopPropagation();
  if (currentCatIdx !== null && currentImgIdx > 0) {
    currentImgIdx--;
    updateLightbox();
  }
};

nextBtn.onclick = function(e) {
  e.stopPropagation();
  if (currentCatIdx !== null && currentImgIdx < cats[currentCatIdx].images.length - 1) {
    currentImgIdx++;
    updateLightbox();
  }
};

// Also allow arrow key navigation
window.addEventListener('keydown', function(e) {
  if (lightboxModal.style.display === 'flex' && currentCatIdx !== null) {
    if (e.key === 'ArrowLeft' && currentImgIdx > 0) {
      currentImgIdx--;
      updateLightbox();
    } else if (e.key === 'ArrowRight' && currentImgIdx < cats[currentCatIdx].images.length - 1) {
      currentImgIdx++;
      updateLightbox();
    } else if (e.key === 'Escape') {
      closeBtn.onclick();
    }
  }
});

window.AOS.init();
