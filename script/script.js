AOS.init();

$(function () {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});
AOS.init({
  duration: 1200,
})


$("submit").on('click', 'a', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
});