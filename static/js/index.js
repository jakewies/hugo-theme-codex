'use strict';

/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  var body = document.querySelector('body');
  body.classList.toggle('nav--active');
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleMobileNavState);
}

initBurger();