const ball = document.querySelector("#ball");
let left = 0;
let direction = "right";
let interval;
function move(){
    if(direction == "right"){
        left +=10;
        if(left > 790) direction = "left"
    }else{
        left -=10;
        if(left < 1) direction = "right";
    }
    ball.style.left = `${left}px`;
}

function start(){
    clearInterval(interval);
    interval =  setInterval(move,10);
}

function stop(){
    clearInterval(interval);
}