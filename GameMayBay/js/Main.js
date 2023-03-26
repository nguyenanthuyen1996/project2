let plane = new Plane( 80, 80);
plane.draw();

let bullets = [];

function createBullet() {
    for (let i = 0; i < 5; i++) {
        // tạo mới đối tượng bullet
        let bullet = new Bullet(300, 400, 10, 20);
        // cập nhật lại toạ độ đạn theo máy bay
        bullet.update(plane.x + plane.width/2 - bullet.width/2, plane.y - bullet.height );
        bullets.push(bullet)
    }
}


function shortBullet() {
    for (let i = 0; i < bullets.length; i++) {
        // tạo khoảng cách khi bắn
        bullets[i].y -= bullets[i].height - 20;
        bullets[i].move();
    }
}
window.addEventListener("mousemove", function (e) {
    let xMouse = e.clientX;
    plane.move(xMouse)
})
function play() {
    createBullet();
    shortBullet();
    requestAnimationFrame(play)
}

//setInterval(play, 50)
play()
