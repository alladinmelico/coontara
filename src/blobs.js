function getBlobColors() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return [
      'rgba(216, 155, 90, 0.22)', // dark orange
      'rgba(255, 184, 107, 0.18)', // lighter orange
      'rgba(123, 58, 27, 0.18)', // brown accent
      'rgba(40, 24, 12, 0.22)', // deep background
      'rgba(245, 238, 231, 0.07)', // subtle beige
    ];
  } else {
    return [
      'rgba(216, 155, 90, 0.18)', // dark orange
      'rgba(216, 155, 90, 0.28)', // dark orange, more visible
      'rgba(245, 238, 231, 0.13)', // background beige
      'rgba(185, 122, 42, 0.13)', // deeper orange
      'rgba(123, 58, 27, 0.10)', // brown accent
    ];
  }
}

let BLOB_COLORS = getBlobColors();

const NUM_BLOBS = 7;
const blobs = [];
const bg = document.getElementById('blobs-bg');

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createBlob() {
  const blob = document.createElement('div');
  const size = randomBetween(180, 420);
  blob.style.position = 'absolute';
  blob.style.width = `${size}px`;
  blob.style.height = `${size}px`;
  blob.style.borderRadius = '50%';
  blob.style.background = BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)];
  blob.style.left = `${randomBetween(-10, 90)}vw`;
  blob.style.top = `${randomBetween(-10, 90)}vh`;
  blob.style.filter = 'blur(2px)';
  blob.style.transition = 'background 0.5s';
  blob.style.zIndex = '0';
  bg.appendChild(blob);
  return {
    el: blob,
    x: parseFloat(blob.style.left),
    y: parseFloat(blob.style.top),
    size,
    dx: randomBetween(-0.03, 0.03),
    dy: randomBetween(-0.02, 0.02),
    color: blob.style.background,
    opacity: parseFloat(blob.style.background.match(/, ([0-9.]+)\)/)?.[1] || '0.15'),
  };
}

function animateBlobs() {
  const scrollY = window.scrollY;
  blobs.forEach((blob, i) => {
    blob.x += blob.dx;
    blob.y += blob.dy + Math.sin(scrollY / 200 + i) * 0.01;
    if (blob.x < -20) blob.x = 100;
    if (blob.x > 100) blob.x = -20;
    if (blob.y < -20) blob.y = 100;
    if (blob.y > 100) blob.y = -20;
    blob.el.style.left = `${blob.x}vw`;
    blob.el.style.top = `${blob.y}vh`;
    blob.el.style.opacity = `${0.13 + 0.12 * Math.abs(Math.sin((scrollY + i * 100) / 400))}`;
  });
  requestAnimationFrame(animateBlobs);
}

function setupBlobs() {
  BLOB_COLORS = getBlobColors();
  bg.innerHTML = '';
  blobs.length = 0;
  for (let i = 0; i < NUM_BLOBS; i++) {
    blobs.push(createBlob());
  }
  animateBlobs();
}

if (bg) setupBlobs();
window.addEventListener('resize', setupBlobs);
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setupBlobs);
} 