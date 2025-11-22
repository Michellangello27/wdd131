const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.querySelector('#lastModified');
if (lastModifiedP) {
  lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}


const menuBtn = document.getElementById('menu');
const nav = document.getElementById('primary-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake Utah, United States",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  },
  {
    templeName: "Belém Brazil",
    location: "Belém, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
  }
];

function getTempleYear(temple) {
  const yearPart = temple.dedicated.split(',')[0];
  const year = parseInt(yearPart, 10);
  return isNaN(year) ? null : year;
}

const cardsContainer = document.querySelector('#cards');

function renderTemples(list) {
  if (!cardsContainer) return;

  cardsContainer.innerHTML = '';

  list.forEach((temple) => {
    const figure = document.createElement('figure');
    figure.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = temple.templeName;

    const location = document.createElement('p');
    location.classList.add('meta');
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.classList.add('meta');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement('p');
    area.classList.add('meta');
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy'; 

    figure.appendChild(title);
    figure.appendChild(location);
    figure.appendChild(dedicated);
    figure.appendChild(area);
    figure.appendChild(img);

    cardsContainer.appendChild(figure);
  });
}

function setActiveLink(clickedLink) {
  document.querySelectorAll('#primary-nav a').forEach((link) => {
    link.classList.toggle('active', link === clickedLink);
  });
}

function applyFilter(filter) {
  let filtered = temples;

  switch (filter) {
    case 'old': // antes de 1900
      filtered = temples.filter((t) => {
        const year = getTempleYear(t);
        return year !== null && year < 1900;
      });
      break;
    case 'new': // después de 2000
      filtered = temples.filter((t) => {
        const year = getTempleYear(t);
        return year !== null && year > 2000;
      });
      break;
    case 'large': // > 90,000
      filtered = temples.filter((t) => t.area > 90000);
      break;
    case 'small': // < 10,000
      filtered = temples.filter((t) => t.area < 10000);
      break;
    case 'home':
    default:
      filtered = temples;
      break;
  }

  renderTemples(filtered);
}

document.querySelectorAll('#primary-nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const text = link.textContent.trim().toLowerCase();
    let filter = 'home';

    if (text === 'old') filter = 'old';
    else if (text === 'new') filter = 'new';
    else if (text === 'large') filter = 'large';
    else if (text === 'small') filter = 'small';
    else filter = 'home';

    setActiveLink(link);
    applyFilter(filter);

    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    }
  });
});


applyFilter('home');
const firstLink = document.querySelector('#primary-nav a');
if (firstLink) {
  setActiveLink(firstLink);
}