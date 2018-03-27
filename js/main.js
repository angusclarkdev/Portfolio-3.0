$(function() {

  // Smooth scrolling to sections

  var link = $('.scroll');

  link.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 46
    }, 1000);
  });

  // highlight nav link relative to section

  $(window).scroll(function(event) {
    var scrollbar = $(this).scrollTop(); // get position of window scroll

    link.each(function() { //for each link

      var sectionPosition = $(this.hash).offset().top - 81; // get position of hash elements - header

      if (sectionPosition <= scrollbar) { // if section position less/equal to window

        $(this).parent().find('a').removeClass('activeLink')
        $(this).addClass('activeLink');

      }
    })
  });

  // Form validation

    $('[type="submit"]').on('click', function() {
      // add required class to matched elements
      $(this)
        .closest('form')
        .find('[required]')
        .addClass('required');
    });

});
