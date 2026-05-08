(function () {
  'use strict';

  var burgerBtn = document.getElementById('bn-burger');
  var mobileMenu = document.getElementById('bn-mobile-menu');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function () {
      burgerBtn.classList.toggle('bn_burger-open');
      mobileMenu.classList.toggle('bn_menu-visible');
    });

    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        burgerBtn.classList.remove('bn_burger-open');
        mobileMenu.classList.remove('bn_menu-visible');
      });
    }
  }

  var gameCards = document.querySelectorAll('.bn_game-card[data-reveal]');

  for (var c = 0; c < gameCards.length; c++) {
    gameCards[c].addEventListener('click', function () {
      var catKey = this.getAttribute('data-reveal');
      var hiddenBlock = document.querySelector('.bn_cat-hidden[data-category="' + catKey + '"]');

      if (!hiddenBlock) return;

      if (hiddenBlock.classList.contains('bn_cat-revealed')) {
        hiddenBlock.classList.remove('bn_cat-revealed');
        hiddenBlock.style.display = 'none';
        return;
      }

      var revealed = document.querySelectorAll('.bn_cat-revealed');
      for (var r = 0; r < revealed.length; r++) {
        revealed[r].classList.remove('bn_cat-revealed');
        revealed[r].style.display = 'none';
      }

      hiddenBlock.style.display = 'block';
      requestAnimationFrame(function () {
        hiddenBlock.classList.add('bn_cat-revealed');
      });
    });
  }

  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var a = 0; a < anchorLinks.length; a++) {
    anchorLinks[a].addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  }
})();
