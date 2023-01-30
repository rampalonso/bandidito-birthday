document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 8,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
  });
  splide.mount(window.splide.Extensions);
});