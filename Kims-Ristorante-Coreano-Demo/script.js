
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (!button || !nav) return;

  const closeMenu = () => {
    nav.dataset.open = "false";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Apri il menu");
  };

  const toggleMenu = () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    nav.dataset.open = String(open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Chiudi il menu" : "Apri il menu"
    );
  };

  button.addEventListener("click", toggleMenu);

  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
});