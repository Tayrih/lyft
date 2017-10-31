$(function() {
  var menuOffset = $('#Header').offset();

  $(document).on('scroll', function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > menuOffset.top) {
      $('#menu-nav').addClass('menu-white');
      $('#menu-nav').removeClass('menu-trasparent');
    } else {
      $('#menu-nav').removeClass('menu-white');
      $('#menu-nav').addClass('menu-trasparent');
    }
  });


});
