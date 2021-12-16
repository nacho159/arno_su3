$(function(){
  $('.ins').click(function(){
    $('.popup').fadeIn();//show();
    $('body').addClass('hidden');
  });
  $('.popup a').click(function(){
    $('.popup').fadeOut();//hide();
    $('body').removeClass('hidden');
  });
});