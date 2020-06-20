/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  const body = document.querySelector("body");
  body.classList.toggle("nav--active");
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleMobileNavState);
}

initBurger();
