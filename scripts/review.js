const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.querySelector("#lastModified");
if (lastModEl) {
    lastModEl.textContent = `Last modification: ${document.lastModified}`;
}

function prettyFromId(id) {
    if (!id) return "";
    return id
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, ch => ch.toUpperCase());
}

const params = new URLSearchParams(location.search);
const product = params.get("product") || "";
const rating = params.get("rating") || "—";
const when = params.get("submittedAt");

const productDisplay = /[-_]/.test(product)
    ? prettyFromId(product)
    : (product || "your product");

const summaryEl = document.getElementById("summary");
if (summaryEl) {
    summaryEl.textContent =
        `We received your ${rating}-star review for “${productDisplay || "your product"}”` +
        (when ? ` on ${new Date(when).toLocaleString()}` : "") +
        ".";
}

/* Contador */
const KEY = "reviewCount";

if (params.has("product")) {
    const current = Number(localStorage.getItem(KEY) || 0) + 1;
    localStorage.setItem(KEY, String(current));
}

const countEl = document.getElementById("count");
if (countEl) {
    countEl.textContent = localStorage.getItem(KEY) || 0;
}
