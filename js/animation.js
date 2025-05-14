let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');

const speed = 4;
let positon = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall () {
    if(positon + radius > 640) {
        moveSpeed = -speed;
    } else if(positon - radius < 0) {
        moveSpeed = speed;
    }
    positon += speed
}

function drawBall() {
    context.clearRect(0, 0, 640, 480);

    context.fillStyle = '62687f';
    context.beginPath ();
    context.arc(positon, 50, radius, 0, 2 * Math.PI);
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);