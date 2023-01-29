document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 8,
    autoScroll: {
      speed: 1,
    },
  });
  splide.mount(window.splide.Extensions);
});