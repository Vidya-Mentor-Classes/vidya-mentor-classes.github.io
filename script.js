// ===== CAROUSEL =====
  // To add a new slide: add one more object-like "slide" div above
  // with your image inside — that's all that's needed.
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('carouselDots');
  let current = 0;
  slides.forEach((s, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.dot');
  function goToSlide(i){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  function moveSlide(dir){ goToSlide(current + dir); }
  setInterval(() => moveSlide(1), 5000);

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
      document.getElementById('versionText').textContent = 'Version 1.0 — auto-update will show once hosted on GitHub';
    });
