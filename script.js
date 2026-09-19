// ============================================================
// SLIDES — edit this list to change what appears in the slider.
// Each line needs an image file name (upload the image into the
// same folder as index.html on GitHub). title/text are optional —
// leave them as "" if you just want the plain image with no caption.
// ============================================================
const slidesConfig = [
  { image: "", title: "", text: "" },
  // { image: "new-batch.jpg", title: "New Batch Starting", text: "Admissions open now" },
  // { image: "result-2026.png", title: "", text: "" },
];

// ===== CAROUSEL (no need to edit below this line) =====
const carousel = document.getElementById('carousel');
const dotsWrap = document.getElementById('carouselDots');
let current = 0;

slidesConfig.forEach((cfg, i) => {
  const slide = document.createElement('div');
  slide.className = 'slide' + (i === 0 ? ' active' : '');

  const img = document.createElement('img');
  img.src = cfg.image;
  img.alt = cfg.title || 'Vidya Mentor Classes update';
  slide.appendChild(img);

  if (cfg.title || cfg.text) {
    const caption = document.createElement('div');
    caption.className = 'slide-caption';
    if (cfg.title) {
      const h = document.createElement('h3');
      h.textContent = cfg.title;
      caption.appendChild(h);
    }
    if (cfg.text) {
      const p = document.createElement('p');
      p.textContent = cfg.text;
      caption.appendChild(p);
    }
    slide.appendChild(caption);
  }

  carousel.insertBefore(slide, carousel.firstChild);

  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsWrap.appendChild(dot);
});

const slides = document.querySelectorAll('.slide');
const dots = dotsWrap.querySelectorAll('.dot');

function goToSlide(i){
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (i + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function moveSlide(dir){ goToSlide(current + dir); }
if (slides.length > 1) setInterval(() => moveSlide(1), 5000);

// ===== VERSION / UPDATE CHECK =====
// Host version.json alongside the app on GitHub. Whenever you upload
// a new APK, just update the versionCode/versionName in that file —
// both the website and the app will pick up the new update automatically.
fetch('version.json')
  .then(r => r.json())
  .then(data => {
    document.getElementById('versionText').textContent = 'Latest version: ' + data.versionName;
    document.getElementById('downloadBtn').href = data.apkUrl;
  })
  .catch(() => {
    document.getElementById('versionText').textContent = 'Version 1.0';
  });
