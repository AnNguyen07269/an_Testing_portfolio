// Set year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (saves preference)
const btn = document.getElementById("themeBtn");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);

function updateIcon() {
  const t = root.getAttribute("data-theme");
  btn.textContent = (t === "light") ? "☀" : "☾";
}
updateIcon();

btn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = (current === "light") ? "" : "light";
  if (next) root.setAttribute("data-theme", next);
  else root.removeAttribute("data-theme");
  localStorage.setItem("theme", next || "");
  updateIcon();
});