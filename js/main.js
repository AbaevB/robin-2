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


///scroll to top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function readMore(){
  alert('Функция Readmore еще не написана!');
}
