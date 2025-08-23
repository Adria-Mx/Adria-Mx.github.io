(function ($) {
  'use strict';

  /*UI VARS*/
  let logo = document.querySelector('.logo-04');

  /*  Sticky Header*/
  window.addEventListener('scroll', function () {
    let header = document.querySelectorAll('header');

    header.forEach((headItem) => {
      headItem.classList.toggle('sticky', window.scrollY > 0);
    });
    // it's only for homepage-3
    // window.scrollY > 0
    //   ? logo.setAttribute('src', 'assets/img/logo/logo.png')
    //   : logo.setAttribute('src', 'assets/img/logo/logo04.png');
  });

  /* back to top button */
  var topBtn = $('#to-top');
  topBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '600');
  });

  /* search box open */
  $('.search-bar').on('click', function () {
    $('.search-box').addClass('search-open');
  });
  $('.search-close').on('click', function () {
    $('.search-box').removeClass('search-open');
  });

  /* humberger menu */
  function toggleSidebar() {
    $('header aside').toggleClass('active');
    $('.hamburger-menu').toggleClass('open');

    var sidebarOpen = $('header aside').hasClass('active');
    if (sidebarOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }

  $('.hamburger-menu').on('click', function () {
    toggleSidebar();
  });

  $('.close-sidebar').on('click', function () {
    toggleSidebar();
  });

  $('aside .overlay').on('click', function () {
    toggleSidebar();
  });

  // aso js init

  AOS.init({
    duration: 1000,
    once: true,
  });
  
  
})(jQuery);

function enableScrolling() {
  throw new Error('Function not implemented.');
}

// smooth scroll
function smoothScroll(target, duration) {
  const start = window.pageYOffset;
  const end = document.querySelector(target).offsetTop;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Función de aceleración/desaceleración
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Listener
document.querySelectorAll('a.scroll-link').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'), 1000); // ⏳ 1000ms = 1 segundo
  });
});