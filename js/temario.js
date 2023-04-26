$(document).ready(function() {
    $('.temario a').click(function() {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
      return false;
    });
  });
  