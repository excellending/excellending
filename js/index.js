$('#scroll-to-top').click(function(event) {
  $('html, body').animate({scrollTop:0}, 'slow');
});

$(window).scroll(function(event) {
  shouldShowScrollToTopButton();
});


$('.fa-angle-down').click(function(event) {
  var pos = $('.main-image').height() - $('nav').height();
  $('html, body').animate({scrollTop: pos}, 'slow');
});

$('.fa-angle-down').hover(function() {
  /* Stuff to do when the mouse enters the element */
}, function() {
  /* Stuff to do when the mouse leaves the element */
});

function shouldShowScrollToTopButton() {
  if (window.scrollY > $(window).height()) {
    showScrollToTop(true);
    
  } else {
    showScrollToTop(false);
    
  }
}

function showScrollToTop(should) {
  if (should) {
    $('#scroll-to-top').css({
      visibility: 'visible',
      display: 'block'
    });
  } else {
    $('#scroll-to-top').css({
      visibility: 'hidden',
      display: 'none'
    });
  }
}