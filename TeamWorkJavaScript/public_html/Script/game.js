var canvas, ctx;
var player;

function handler(event) {
    if (event.keyCode == 39) { //right
        player.move(40, 0);
    }
    else if (event.keyCode == 37) { //left
        player.move(-40, 0);
    }
    else if (event.keyCode == 40) { // down
        player.move(0, 60);
    }
    else if (event.keyCode == 38) { // up
        player.move(0, -60);
    }
    canvasRedraw();
}

function canvasRedraw() {
    canvas.width = canvas.width;
    ctx.drawImage(player.img, player.x, player.y);
}

function Player(img, x, y) {
    var self = this;
    self.img = new Image();
    self.img.onload = function () {
        ctx.drawImage(self.img,40,60);
    };
    self.img.src = img.src;
    self.x = x;
    self.y = y;
    self.move = function (x, y) {
        if(self.x <= 0){
            self.x = 1;
            return;
        }
        else if(self.x > canvas.width - self.img.width){
            self.x = canvas.width - self.img.width;
            return;
        }
        else if(self.y < 0){
            self.y = 1;
            return;
        }
        else if(self.y > canvas.height - self.img.height){
            self.y = canvas.height - self.img.height;
            return;
        }
        else {
            player.x += x;
            player.y += y;
        }
    }
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
}

function startGame() {
    init();
    player = new Player({ src: "./IMG/hero.png" }, 40, 60);
    ctx.drawImage(player.img, player.x, player.y);
    document.addEventListener('keydown', handler, false);
}