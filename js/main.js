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
      }, 700); // Задержка в 200 миллисекунд перед переходом по ссылке
    });
  });
});

function readMore(){
  alert('Функция Readmore еще не написана!');
}
