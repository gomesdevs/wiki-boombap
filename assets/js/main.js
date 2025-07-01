function togglePassword() {
  const passwordInput = document.getElementById('password');
  const passwordIcon = document.querySelector('.password-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.textContent = '👁️‍🗨️';
  } else {
    passwordInput.type = 'password';
    passwordIcon.textContent = '👁️';
  }
}

function initSubscriptionForm() {
  const subscriptionForm = document.getElementById('subscriptionForm');

  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Simulação de envio
      const submitBtn = document.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Processando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('Inscrição realizada com sucesso! Bem-vindo à FlowWiki!');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        this.reset();
      }, 2000);
    });
  }
}

function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');

      if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

function initSearch() {
  const searchInput = document.querySelector('.search-input');

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase();

      console.log('Searching for:', query);
    });
  }
}

function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tabs a');

  navTabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      navTabs.forEach(t => t.classList.remove('active'));

      this.classList.add('active');

      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
          });

          targetSection.style.display = 'block';
        }
      }
    });
  });
}

function initArtistPage() {
  const navTabs = document.querySelectorAll('.nav-tabs a');
  if (navTabs.length > 0) {
    navTabs[0].classList.add('active');
  }

  const contentSections = document.querySelectorAll('.content-section');
  if (contentSections.length > 0) {
    contentSections.forEach(section => section.style.display = 'none');
    contentSections[0].style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initSubscriptionForm();
  initSearch();
  initNavigation();
  initHamburgerMenu();
  initArtistPage();
});
