class Bullet {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
    }

    update(x,y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height)
        this.y -= 25;
        this.draw();
    }
}