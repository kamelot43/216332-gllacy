var controls = document.querySelector('.controls-slider');
var siteWrapper = document.querySelector('.site-wrapper');

controls.addEventListener("click", function (evt) {
  var activeSlide = document.querySelector('.slide--active');
  activeSlide.classList.remove('slide--active');
  var target = evt.target.id.substring(7);
  var slideTarget = document.getElementById('slide-' + target);
  slideTarget.classList.add('slide--active');

  var activeToggle = document.querySelector('.controls-slider__toggle--active');
  activeToggle.classList.remove('controls-slider__toggle--active');
  evt.target.classList.add('controls-slider__toggle--active');

  siteWrapper.style.backgroundColor = "#8996a6";
  siteWrapper.style.backgroundImage = "url('../img/plombir_1.png')";

});
