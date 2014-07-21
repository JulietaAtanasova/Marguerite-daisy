var canvas, ctx;
var player;

function handler(event) {
    var currentPos = {
        x: player.x,
        y: player.y
    };
    if (event.keyCode == 39) { //right
        player.move(10, 0);
        canvas.width = canvas.width;
        ctx.drawImage(player.img, currentPos.x, currentPos.y);
    }
    else if (event.keyCode == 37) { //left
        player.move(-10, 0);
        canvas.width = canvas.width;
        ctx.drawImage(player.img, currentPos.x, currentPos.y);
    }
    else if (event.keyCode == 40) { // down
        player.move(0, 10);
        canvas.width = canvas.width;
        ctx.drawImage(player.img, currentPos.x, currentPos.y);
    }
    else if (event.keyCode == 38) { // up
        player.move(0, -10);
        canvas.width = canvas.width;
        ctx.drawImage(player.img, currentPos.x, currentPos.y);
    }
}

function Player(img, x, y) {
    var self = this;
    self.img = new Image();
    self.img.src = img.src;
    self.x = x;
    self.y = y;
    self.move = function (x, y) {
        if(self.x < 10){
            self.x = 10;
            return;
        }
        else if(self.x > canvas.width - 65){
            self.x = canvas.width - 65;
            return;
        }
        else if(self.y < 10){
            self.y = 10;
            return;
        }
        else if(self.y > canvas.height - 100){
            self.y = canvas.height - 100;
            return;
        }
        else {
            player.x += x;
            player.y += y;
        }
    }
}

function startGame() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    player = new Player({ src: "hero.gif" }, 350, 250);
    ctx.drawImage(player.img, player.x, player.y);
    document.addEventListener('keydown', handler, false);
}