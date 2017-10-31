$(function() {
  var menuOffset = $('#Header').offset();

  $(document).on('scroll', function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > menuOffset.top) {
      $('#menu-nav').addClass('menu-white');
      $('#menu-nav').removeClass('menu-transparent');
      document.getElementById('logoimg').src = "assets/images/logo-pink.png";
    } else {
      $('#menu-nav').removeClass('menu-white');
      $('#menu-nav').addClass('menu-transparent');
      document.getElementById('logoimg').src = "assets/images/logo-white.png";
    }
  });


});
