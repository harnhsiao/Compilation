var images = document.getElementsByClassName('tank');
var changeFrom = 500; // from which amount of scroll do you want the effect to appear ?

window.addEventListener('scroll', function() {
  // if (window.scrollY >= changeFrom ) {
  //   [].forEach.call(images, function(image) {
  //     // image.classList.add('bottle-color');
  //   });
  // }
  // else {
  //   [].forEach.call(images, function(image) {
  //     image.classList.remove('bottle-color');
  //   });
  // }
  var scrollTop = $(window).scrollTop();
  [].forEach.call(images, function(image) {
    // var elementOffset = $(this).offset().top;
    var elementOffset = image.offsetTop;
    console.log(elementOffset);
    var distance = (elementOffset - scrollTop);
    if (distance < 500) {
      // $(this).addClass('bottle-color');
      image.classList.add('tank-color');
    }
  });

  // var elementOffset1 = $(".bottle1").offset().top;
  // var elementOffset20 = $(".bottle20").offset().top;
  // var distance1 = (elementOffset1 - scrollTop);
  // var distance20 = (elementOffset20 - scrollTop);
  // if (distance1 < 50) {
  //   $('.bottle1').addClass('bottle-color');
  // }
  // if (distance20 < 50) {
  //   $('.bottle20 img').addClass('bottle-color');
  // }
});
