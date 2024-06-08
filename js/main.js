document.addEventListener('DOMContentLoaded', function(){
///// scroll
$(document).ready(function(){
  $('.header__link').on('click', function(event){
    event.preventDefault();

    let href = $(this).attr('href');
    let offset = $(href).offset().top;

    $('body,html').animate({
      scrollTop: offset,
    }, 700, function(){
      setTimeout(function(){
        window.location.href = href;
      }, 1000);
    });
  });
});


///// scroll to top

$(window).on('scroll', function() {
  if ($(document).scrollTop() > 20) {
      $('#toTop').fadeIn();
  } else {
      $('#toTop').fadeOut();
  }
});

$('#toTop').on('click', function() {
  $('html, body').animate({scrollTop: 0}, 800);
});

function readMore(){
  alert('Функция Readmore еще не написана!');
}


//// read more

//function readMore() {
 // var dots = $("#dots");
 // var moreText = $("#more");
 // var btnText = $("#moreBtn");

 // if (dots.css('display') === 'none') {
  //  dots.css('display', 'inline');
 //   moreText.css('display', 'none');
 // } else {
 //   dots.css('display', 'none');
 //   moreText.css('display', 'inline');
 // }
//}

///// tabs

$('.photography__link ').on('click', function(e){
  e.preventDefault();

  $('.photography__link ').removeClass('active');
  $(this).addClass('active');

  let href = $(this).attr('href');
  $('.tab-pane').removeClass('active').removeClass('in');
  $(href).addClass('active');

  setTimeout(function(){
      $(href).addClass('in');
  }, 300);
} );




});


