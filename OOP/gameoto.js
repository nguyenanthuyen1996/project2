function  draw(){
    let ctx = document.getElementById('gameMove').getContext('2d')
    let img = new Image()
    img.onload = function () {
        ctx.drawImage(img,10,10,200,100)
        ctx.beginPath()
        ctx.stroke()
    }
    img.src ="oto2.png"
}
draw()

