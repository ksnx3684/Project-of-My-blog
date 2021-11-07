$(document).ready(function(){

    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show();
        $('.sidebar_menu').show().animate({
            left:0
        });
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide();
        $('.sidebar_menu').animate({
            left: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();
                    });
    });
});
// btn1을 눌렀을 때 sound1.mp3 재생
document.querySelector(".menu_btn>a").addEventListener("click", function () {
  var audio1 = new Audio("カードをめくる.mp3");
  audio1.loop = false; // 반복재생하지 않음
  audio1.volume = 1; // 음량 설정
  audio1.play(); // sound1.mp3 재생
});
document.querySelector(".close_btn>a").addEventListener("click", function () {
  var audio1 = new Audio("カードをめくる.mp3");
  audio1.loop = false;
  audio1.volume = 1;
  audio1.play();
});
