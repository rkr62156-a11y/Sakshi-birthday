const screens = [...document.querySelectorAll('.screen')];
const form = document.getElementById('unlock-form');
const codeInput = document.getElementById('code');
const error = document.getElementById('error');
const status = document.getElementById('music-status');
const video = document.getElementById('birthday-video');

function show(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startBirthdaySong() {
  video.src = 'https://www.youtube-nocookie.com/embed/ebZj_nrmH-c?autoplay=1&playsinline=1&rel=0';
  status.textContent = 'If autoplay is blocked, tap the music button below.';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const entered = codeInput.value.trim().replace(/\s+/g, ' ').toUpperCase();

  if (entered === 'BEAUTIFUL SUAR') {
    error.textContent = '';
    startBirthdaySong();
    show('reveal');
  } else {
    error.textContent = 'Wrong code, suar! Try again. 🐷';
    codeInput.focus();
  }
});

document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => show(button.dataset.go));
});

document.getElementById('music-retry').addEventListener('click', () => {
  video.src = 'https://www.youtube-nocookie.com/embed/ebZj_nrmH-c?autoplay=1&playsinline=1&rel=0&t=' + Date.now();
  status.textContent = 'Song refreshed — press play if needed.';
});

document.getElementById('replay').addEventListener('click', () => {
  codeInput.value = '';
  error.textContent = '';
  show('gate');
});
