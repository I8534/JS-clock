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

var btn0 = document.querySelector("#morning");
var btn1 = document.querySelector("#afternoon");
var btn2 = document.querySelector("#evening");
var btn3 = document.querySelector("#night");

btn0.addEventListener('click', function () {
    document.querySelector("#clock").style.backgroundImage= 'url("./images/phone_morning.png")';
})

btn1.addEventListener('click', function () {
    document.querySelector("#clock").style.backgroundImage= 'url("./images/phone_afternoon.png")';
})

btn2.addEventListener('click', function () {
    document.querySelector("#clock").style.backgroundImage= 'url("./images/phone_evening.png")';
})

btn3.addEventListener('click', function () {
    document.querySelector("#clock").style.backgroundImage= 'url("./images/phone_night.png")';
})