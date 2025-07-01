function initArtistCards() {
  const artistCards = document.querySelectorAll('.artist-card');

  artistCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
}

function initGridItems() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.addEventListener('click', function () {
      const title = this.querySelector('.grid-item-title').textContent;
      console.log('Playing:', title);

      this.style.opacity = '0.8';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });

    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });
}

function initFollowButtons() {
  const followButtons = document.querySelectorAll('.follow-btn');

  followButtons.forEach(button => {
    button.addEventListener('click', function () {
      const isFollowing = this.textContent === 'Seguindo';

      if (isFollowing) {
        this.textContent = 'Siga-o';
        this.style.backgroundColor = '#1db954';
      } else {
        this.textContent = 'Seguindo';
        this.style.backgroundColor = '#1ed760';
      }
    });
  });
}

function initHeroSection() {
  const heroSection = document.querySelector('.hero-section');
  const greeting = document.querySelector('.greeting');

  if (greeting) {
    const currentHour = new Date().getHours();
    let greetingText = 'Boa Tarde';

    if (currentHour < 12) {
      greetingText = 'Bom Dia';
    } else if (currentHour >= 18) {
      greetingText = 'Boa Noite';
    }

    greeting.textContent = greetingText;
  }
}

function initFeaturedAlbum() {
  const featuredImage = document.querySelector('.featured-album img');

  if (featuredImage) {
    const albums = [
      'src/images/Home/febre90.jpg',
      'src/images/Home/autodominio.jpg',
      'src/images/Home/euaindatenhocoracao.jpg',
      'src/images/Home/garoto.jpg',
      'src/images/Home/caos.jpg',
    ];

    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % albums.length;
      featuredImage.src = albums[currentIndex];
    }, 3000);
  }
}

function showLoading() {
  const loadingDiv = document.createElement('div');
  loadingDiv.innerHTML = '<div class="loading-spinner">Carregando...</div>';
  loadingDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
    `;
  document.body.appendChild(loadingDiv);

  setTimeout(() => {
    document.body.removeChild(loadingDiv);
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  initArtistCards();
  initGridItems();
  initFollowButtons();
  initHeroSection();
  initFeaturedAlbum();

  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      if (!e.ctrlKey && !e.metaKey) {
        showLoading();
      }
    });
  });
});
