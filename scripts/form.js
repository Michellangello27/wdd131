// Footer: año actual y última modificación
const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.querySelector("#lastModified");
if (lastModEl) {
  lastModEl.textContent = `Last modification: ${document.lastModified}`;
}

// Lista de productos
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Rellenar dinámicamente el <select> de productos
const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach((product) => {
    const opt = document.createElement("option");
    opt.value = product.id;          // value = id
    opt.textContent = product.name;  // texto visible = name
    productSelect.appendChild(opt);
  });
}

// Guardar timestamp de envío en el campo hidden
const form = document.querySelector("#reviewForm");
const hiddenTime = document.querySelector("#submittedAt");

if (form && hiddenTime) {
  form.addEventListener("submit", () => {
    hiddenTime.value = new Date().toISOString();
  });
}