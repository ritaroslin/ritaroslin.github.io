$(document).ready(function () {

  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    horizontalOrder: true,
    gutter:22,
  });
  
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry();
  });

  $(window).resize(function(){
    $grid.masonry();
  });

});



