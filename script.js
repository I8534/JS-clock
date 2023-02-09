var Target = document.querySelector(".time");

function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    Target.innerHTML = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
        
}

function init() {
    setInterval(clock, 1000); // 1초마다 실행
}

init(); // 이걸 넣어야 함수가 실행이 되는 것이다.

// lnb-nav-item의 a 태그가 클릭되었을 때
// 배경화면이 전환되게 만들기
// 방법은 클릭했을 때 벨류 값으로

$('.button').on('click', function() {

    let num = $(this).val();
  
    if(num == 0) {
    $('#clock').css({"background":"url(./images/phone_morning.png)"});
    }
    if(num == 1) {
    $('#clock').css({"background":"url(./images/phone_afternoon.png)"});
    }
    if(num == 2) {
    $('#clock').css({"background":"url(./images/phone_evening.png)"});
    }
    if(num == 3) {
    $('#clock').css({"background":"url(./images/phone_night.png)"});
    }

  })