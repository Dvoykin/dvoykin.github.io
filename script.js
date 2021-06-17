$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 300;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});

$(function(){
    $('#simple_slider img:lt(-1)').hide(); //скрываем все изображения, кроме последнего в списке
    $('a.left_button').click(function(){
      $('#simple_slider > img:first-child').fadeIn().appendTo('#simple_slider').end().siblings('img').fadeOut();
    }); //показываем первую картинку, перемещаем в конец списка, скрываем все соседние элементы
    $('a.right_button').click(function(){
      $('#simple_slider > img:last-child').fadeOut().prev('img').fadeIn().end().prependTo('#simple_slider');
    }); //скрываем последнее изображение, показываем предыдущие, переносим в начало
   });

