$(function() {

  // Smooth scrolling to sections

  let link = $('.scroll');

  link.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 1000);
  });

  // highlight nav link relative to section

  $(window).scroll(function(event) {
    let scrollbar = $(this).scrollTop(); // get position of window scroll

    link.each(function() { //for each link

      let sectionPosition = $(this.hash).offset().top - 81; // get position of hash elements - header

      if (sectionPosition <= scrollbar) { // if section position less/equal to window

        $(this).parent().find('a').removeClass('activeLink')
        $(this).addClass('activeLink');

      }
    })
  });
});