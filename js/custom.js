$(document).ready(function() {
  var mapShown = false;

  $('#mapClick').on('click', function() {
    if (!mapShown) {
      $('.google-maps').removeClass('hidden');
      $('#mapClose').removeClass('hidden');
      mapShown = true;
      var mapScroll = $("a[name='map']");
      $('html, body').animate({scrollTop: mapScroll.offset().top}, 'slow');
    };
  });

  $('#mapClose').on('click', function() {
    if (mapShown) {
      $('.google-maps').addClass('hidden');
      $('#mapClose').addClass('hidden');
      mapShown = false;
    };
  });
});