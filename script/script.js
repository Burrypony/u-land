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


function sendMail() {
  var name = $('#exampleInputEmail1').val()
  var phone = $('#exampleInputPassword1').val()
  var messageBody = 'імя: ' + name + '  телефон: ' + phone
  $.ajax({
    type: 'POST',
    url: 'smtp.mailtrap.io',
    data: {
      'key': 'fcd8f80888a120358c9048ab0ce41a8b',
      'message': {
        'from_email': 'YOUR@EMAIL.HERE',
        'to': [
            {
              'email': 'kiril.chernysh@gmail.com',
              'name': 'RECIPIENT NAME (OPTIONAL)',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'YOUR SUBJECT HERE!',
        'html': messageBody
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });
}