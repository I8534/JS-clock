var Target = document.getElementsByClassName("time");

function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    Target.innerHTML = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
        
}
clock();

setInterval(clock, 1000); // 1초마다 실행