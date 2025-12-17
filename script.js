// Enklere produktliste med plassholder-bilder (kan byttes ut til egne filer senere)
const products = [
  {
    id: 'sko',
    name: 'Brytesko',
    price: '1 199 kr',
    image: 'https://via.placeholder.com/400x250?text=Brytesko'
  },
  {
    id: 'singlet',
    name: 'Rød singlet',
    price: '799 kr',
    image: 'https://via.placeholder.com/400x250?text=Singlet'
  },
  {
    id: 'hjelm',
    name: 'Hodebeskyttelse',
    price: '599 kr',
    image: 'https://via.placeholder.com/400x250?text=Hodebeskyttelse'
  },
  {
    id: 'wraps',
    name: 'Håndwraps',
    price: '249 kr',
    image: 'https://via.placeholder.com/400x250?text=H%C3%A5ndwraps'
  },
  {
    id: 'bag',
    name: 'Treningsbag',
    price: '499 kr',
    image: 'https://via.placeholder.com/400x250?text=Treningsbag'
  },
];

const productGrid = document.getElementById('product-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const customCursor = document.getElementById('custom-cursor');

// Bruker et Set for å slippe duplikater
const favorites = new Set();

// Lager kort i butikkseksjonen
function renderProducts() {
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <p class="card-title">${product.name}</p>
        <p class="card-price">${product.price}</p>
        <button class="favorite-btn" data-id="${product.id}">Legg til favoritt</button>
      </div>
    `;
    fragment.appendChild(card);
  });

  productGrid.appendChild(fragment);
}

// Viser favoritter basert på Set-innholdet
function renderFavorites() {
  favoritesGrid.innerHTML = '';

  if (favorites.size === 0) {
    favoritesGrid.classList.add('empty-state');
    favoritesGrid.innerHTML = '<p>Ingen favoritter enda. Legg til produkter fra butikken.</p>';
    return;
  }

  favoritesGrid.classList.remove('empty-state');
  const fragment = document.createDocumentFragment();

  products
    .filter((p) => favorites.has(p.id))
    .forEach((product) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="card-content">
          <p class="card-title">${product.name}</p>
          <p class="card-price">${product.price}</p>
          <button class="favorite-btn active" data-id="${product.id}">Fjern favoritt</button>
        </div>
      `;
      fragment.appendChild(card);
    });

  favoritesGrid.appendChild(fragment);
}

// Bytter favoritt-status
function handleFavoriteToggle(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  updateButtons();
  renderFavorites();
}

// Oppdaterer knappetekst og stil
function updateButtons() {
  const buttons = document.querySelectorAll('.favorite-btn');
  buttons.forEach((btn) => {
    const id = btn.dataset.id;
    const isFav = favorites.has(id);
    btn.classList.toggle('active', isFav);
    btn.textContent = isFav ? 'Fjern favoritt' : 'Legg til favoritt';
  });
}

// Enkel custom cursor (skjules på touch)
function enableCustomCursor() {
  const pointerIsCoarse = window.matchMedia('(pointer: coarse)').matches;
  if (pointerIsCoarse) {
    customCursor.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Litt større cursor over interaktive elementer
  const interactive = ['a', 'button', '.card', '.btn'];
  interactive.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-grow'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-grow'));
    });
  });
}

// Smooth scroll for enkle ankerlenker
function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Viser seksjoner med enkel fade når de dukker opp
function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.section').forEach((section) => observer.observe(section));
}

// Lytter på klikk på alle favoritt-knapper (event delegation)
function wireEvents() {
  document.body.addEventListener('click', (e) => {
    // Klikk på knapp
    if (e.target.classList.contains('favorite-btn')) {
      const id = e.target.dataset.id;
      handleFavoriteToggle(id);
      return;
    }

    // Klikk på selve kortet (gjør hele kortet klikkbart)
    const card = e.target.closest('.card');
    if (card) {
      const btn = card.querySelector('.favorite-btn');
      if (btn) {
        const id = btn.dataset.id;
        handleFavoriteToggle(id);
      }
    }
  });
}

// Init
renderProducts();
renderFavorites();
updateButtons();
wireEvents();
enableCustomCursor();
enableSmoothScroll();
observeSections();

