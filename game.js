var canvas, ctx;
var player;
var plX, plY;

function handler(event) {
    console.log(event);
    plX = player.x;
    plY = player.y;
    if (event.keyCode == 39) { //right
        canvas.width = canvas.width;
        player.x += 10;
        ctx.drawImage(player.img, plX, plY);
        //console.log(player);
    }
    else if (event.keyCode == 37) { //left
        //console.log(player);
        canvas.width = canvas.width;
        player.x -= 10;
        ctx.drawImage(player.img, plX, plY);
    }
    else if(event.keyCode == 40){
        canvas.width = canvas.width;
        player.y += 10;
        ctx.drawImage(player.img, plX, plY);
    }
    else if (event.keyCode == 38) {
        canvas.width = canvas.width;
        player.y -= 10;
        ctx.drawImage(player.img, plX, plY);
    }

    if(player.x > 500){
        ctx.rect(50, 50, 100, 250);
        ctx.fill();
    }
}

function Player(img, x, y) {
    var self = this;
    self.img = new Image();
    self.img.src = img.src;
    self.x = x;
    self.y = y;
}

function startGame() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', handler, false);
    player = new Player({ src: "hero.gif" }, 350, 250);
    ctx.drawImage(player.img, player.x, player.y);
}