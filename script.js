const openPrivate = document.getElementById('openPrivate');
const scrollPrivate = document.getElementById('scrollPrivate');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');
const privateGallery = document.getElementById('privateGallery');

const EXPECTED_HASH = '01394e0c11d2aa1447e2a138dc16b278ef6b7854c1d4c323e2e0df5851a8fe40';

function hashText(text) {
  const encoder = new TextEncoder();
  return crypto.subtle.digest('SHA-256', encoder.encode(text)).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  });
}

function openLogin() {
  loginError.textContent = '';
  passwordInput.value = '';
  loginModal.classList.remove('hidden');
}

function closeLogin() {
  loginModal.classList.add('hidden');
}

async function handleLogin(event) {
  event.preventDefault();
  const password = passwordInput.value.trim();
  if (!password) {
    loginError.textContent = 'Bitte gib ein Passwort ein.';
    return;
  }

  const hash = await hashText(password);
  if (hash === EXPECTED_HASH) {
    loginError.textContent = '';
    closeLogin();
    privateGallery.classList.remove('hidden');
    privateGallery.scrollIntoView({ behavior: 'smooth' });
  } else {
    loginError.textContent = 'Falsches Passwort. Bitte erneut versuchen.';
  }
}

openPrivate.addEventListener('click', openLogin);
scrollPrivate.addEventListener('click', openLogin);
closeModal.addEventListener('click', closeLogin);
loginForm.addEventListener('submit', handleLogin);

loginModal.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    closeLogin();
  }
});
