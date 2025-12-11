const crafts = [
  {
    id: "cer-001",
    name: "Cusco ceremonial pot",
    category: "Ceramics",
    region: "Cusco",
    price: 215,
    image: "images/gal-ceramics-cusco-pot.webp"
  },
  {
    id: "cer-002",
    name: "Nazca geometric vase",
    category: "Ceramics",
    region: "Ica",
    price: 150,
    image: "images/gal-ceramics-nazca-vase.webp"
  },
  {
    id: "cer-003",
    name: "Ayacucho storytelling jar",
    category: "Ceramics",
    region: "Ayacucho",
    price: 80,
    image: "images/gal-ceramics-ayacucho-jar.webp"
  },
  {
    id: "cer-004",
    name: "Amazonas bird motif bowl",
    category: "Ceramics",
    region: "Amazonas",
    price: 60,
    image: "images/gal-ceramics-amazonas-bowl.webp"
  },
  {
    id: "cer-005",
    name: "Lambayeque coastal vessel",
    category: "Ceramics",
    region: "Lambayeque",
    price: 70,
    image: "images/gal-ceramics-lambayeque-vessel.webp"
  },

  {
    id: "tex-006",
    name: "Cusco striped shawl",
    category: "Textiles",
    region: "Cusco",
    price: 190,
    image: "images/gal-textiles-cusco-shawl.webp"
  },
  {
    id: "tex-007",
    name: "Puno festival poncho",
    category: "Textiles",
    region: "Puno",
    price: 155,
    image: "images/gal-textiles-puno-shawl.webp"
  },
  {
    id: "tex-008",
    name: "Ayacucho embroidered manta",
    category: "Textiles",
    region: "Ayacucho",
    price: 145,
    image: "images/gal-textiles-ayacucho-manta.webp"
  },
  {
    id: "tex-009",
    name: "Huancavelica natural-dye scarf",
    category: "Textiles",
    region: "Huancavelica",
    price: 115,
    image: "images/gal-textiles-huancavelica-scarf.webp"
  },
  {
    id: "tex-010",
    name: "Piura coastal cotton throw",
    category: "Textiles",
    region: "Piura",
    price: 135,
    image: "images/gal-textiles-piura-throw.webp"
  },
  {
    id: "tex-011",
    name: "Apurímac checker pattern cloth",
    category: "Textiles",
    region: "Apurímac",
    price: 90,
    image: "images/gal-textiles-apurimac-cloth.webp"
  },

  {
    id: "wood-012",
    name: "Cusco carved saint figure",
    category: "Wood carving",
    region: "Cusco",
    price: 140,
    image: "images/gal-wood-cusco-saint.webp"
  },
  {
    id: "wood-013",
    name: "Ayacucho retablo-style panel",
    category: "Wood carving",
    region: "Ayacucho",
    price: 160,
    image: "images/gal-wood-ayacucho-panel.webp"
  },
  {
    id: "wood-014",
    name: "Amazonas jungle mask",
    category: "Wood carving",
    region: "Amazonas",
    price: 95,
    image: "images/gal-wood-amazonas-mask.webp"
  },
  {
    id: "wood-015",
    name: "Ancash floral relief box",
    category: "Wood carving",
    region: "Ancash",
    price: 110,
    image: "images/gal-wood-ancash-box.webp"
  },
  {
    id: "wood-016",
    name: "Junín ceremonial staff",
    category: "Wood carving",
    region: "Junín",
    price: 130,
    image: "images/gal-wood-junin-staff.webp"
  },
  {
    id: "wood-017",
    name: "Huánuco decorative mask",
    category: "Wood carving",
    region: "Huánuco",
    price: 105,
    image: "images/gal-wood-huanuco-mask.webp"
  },
  {
    id: "wood-018",
    name: "Arequipa baroque frame",
    category: "Wood carving",
    region: "Arequipa",
    price: 150,
    image: "images/gal-wood-arequipa-frame.webp"
  },

  {
    id: "sil-019",
    name: "Nazca lines filigree pendant",
    category: "Silver filigree",
    region: "Ica",
    price: 175,
    image: "images/gal-silver-nazca-pendant.webp"
  },
  {
    id: "sil-020",
    name: "Lima colonial-style earrings",
    category: "Silver filigree",
    region: "Lima",
    price: 165,
    image: "images/gal-silver-lima-earrings.webp"
  },
  {
    id: "sil-021",
    name: "Cusco sun motif brooch",
    category: "Silver filigree",
    region: "Cusco",
    price: 155,
    image: "images/gal-silver-cusco-brooch.webp"
  },
  {
    id: "sil-022",
    name: "Piura floral filigree ring",
    category: "Silver filigree",
    region: "Piura",
    price: 90,
    image: "images/gal-silver-piura-ring.webp"
  },
  {
    id: "sil-023",
    name: "Cajamarca heart filigree locket",
    category: "Silver filigree",
    region: "Cajamarca",
    price: 145,
    image: "images/gal-silver-cajamarca-locket.webp"
  },
  {
    id: "sil-024",
    name: "Lambayeque wave filigree bracelet",
    category: "Silver filigree",
    region: "Lambayeque",
    price: 135,
    image: "images/gal-silver-lambayeque-bracelet.webp"
  },
  {
    id: "sil-025",
    name: "Puno festival filigree earrings",
    category: "Silver filigree",
    region: "Puno",
    price: 125,
    image: "images/gal-silver-puno-earrings.webp"
  },
  {
    id: "sil-026",
    name: "Ancash star filigree pendant",
    category: "Silver filigree",
    region: "Ancash",
    price: 115,
    image: "images/gal-silver-ancash-pendant.webp"
  },
  {
    id: "sil-027",
    name: "Apurímac spiral filigree necklace",
    category: "Silver filigree",
    region: "Apurímac",
    price: 185,
    image: "images/gal-silver-apurimac-necklace.webp"
  },
  {
    id: "sil-028",
    name: "Junín leaf filigree brooch",
    category: "Silver filigree",
    region: "Junín",
    price: 140,
    image: "images/gal-silver-junin-brooch.webp"
  }
];

const cardsContainer = document.querySelector("#crafts-list");
const categorySelect = document.querySelector("#filter-category");
const regionSelect = document.querySelector("#filter-region");
const priceSelect = document.querySelector("#filter-price");
const sortSelect = document.querySelector("#sort-by");
const favoritesToggle = document.querySelector("#only-favorites");
const clearButton = document.querySelector("#clear-filters");

const STORAGE_KEY = "hpg-gallery-favorites";
let favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function getPriceRange(price) {
  if (price <= 60) return "low";
  if (price <= 120) return "medium";
  return "high";
}

function renderCrafts(list) {
  if (!cardsContainer) return;

  if (!list.length) {
    cardsContainer.innerHTML = `
      <p class="empty-message">
        No crafts match your current filters. Try changing the options above.
      </p>
    `;
    return;
  }

  cardsContainer.innerHTML = list
    .map((craft) => {
      const isFavorite = favorites.includes(craft.id);
      const favClass = isFavorite ? "fav-btn is-favorite" : "fav-btn";

      return `
        <article class="card craft-card" data-id="${craft.id}">
          <figure class="card-figure">
            <img
              src="${craft.image}"
              alt="${craft.name}"
              loading="lazy"
              width="600"
              height="450"
            />
          </figure>

          <div class="card-body">
            <h3 class="card-title">${craft.name}</h3>

            <p class="craft-meta">
              <span>${craft.category}</span> ·
              <span>${craft.region}</span> ·
              <span>$${craft.price.toFixed(0)}</span>
            </p>

            <button
              type="button"
              class="${favClass}"
              aria-pressed="${isFavorite}"
            >
              ${isFavorite ? "Saved to favorites" : "Save to favorites"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function applyFilters() {
  const category = categorySelect ? categorySelect.value : "any";
  const region = regionSelect ? regionSelect.value : "any";
  const priceRange = priceSelect ? priceSelect.value : "any";
  const sortBy = sortSelect ? sortSelect.value : "name-asc";
  const onlyFavs = favoritesToggle ? favoritesToggle.checked : false;

  let result = crafts.filter((craft) => {
    if (category !== "any" && craft.category !== category) return false;
    if (region !== "any" && craft.region !== region) return false;

    if (priceRange !== "any") {
      const craftRange = getPriceRange(craft.price);
      if (craftRange !== priceRange) return false;
    }

    if (onlyFavs && !favorites.includes(craft.id)) return false;

    return true;
  });

  if (sortBy === "name-asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  renderCrafts(result);
}

function setupGallery() {
  if (!cardsContainer) return; 

  [categorySelect, regionSelect, priceSelect, sortSelect, favoritesToggle]
    .filter(Boolean)
    .forEach((control) => {
      control.addEventListener("change", applyFilters);
    });

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (categorySelect) categorySelect.value = "any";
      if (regionSelect) regionSelect.value = "any";
      if (priceSelect) priceSelect.value = "any";
      if (sortSelect) sortSelect.value = "name-asc";
      if (favoritesToggle) favoritesToggle.checked = false;
      applyFilters();
    });
  }

  cardsContainer.addEventListener("click", (event) => {
    const btn = event.target.closest(".fav-btn");
    if (!btn) return;

    const card = btn.closest(".craft-card");
    if (!card) return;

    const id = card.dataset.id;
    const index = favorites.indexOf(id);

    if (index === -1) {
      favorites.push(id);
    } else {
      favorites.splice(index, 1);
    }

    saveFavorites();
    applyFilters();
  });

  applyFilters();
}

document.addEventListener("DOMContentLoaded", setupGallery);
