$(function() {

  // Smooth scrolling to sections

  let scroll = $('.scroll');
  let home = $('.home');

  scroll.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 48
    }, 1000);
  });

  // smooth scrolling to top of page

  home.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });

  // highlight nav link relative to section


  if (window.scrollTop == 0) {

  }


});