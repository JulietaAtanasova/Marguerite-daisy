var canvas, ctx;
var player, level;
var puzzle = [ 
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

function handler(event) {
    if (event.keyCode == 39) { //right 1
        if(player.checkNextPosition([1, 0])){
            player.move(40, 0, 1);
        }
    }
    else if (event.keyCode == 37) { //left 2
        if (player.checkNextPosition([-1, 0])) {
            player.move(-40, 0, 2);
        }
    }
    else if (event.keyCode == 40) { // down 3
        if (player.checkNextPosition([0, 1])) {
            player.move(0, 60, 3);
        }
    }
    else if (event.keyCode == 38) { // up 4
        if (player.checkNextPosition([0, -1])) {
            player.move(0, -60, 4);
        }
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
        ctx.drawImage(self.img,480,480);
    };
    self.img.src = img.src;
    self.x = x;
    self.y = y;
    self.matrix = {row: 8, col: 12};
    self.move = function (x, y, direction) {
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
            if (direction == 1) {
                player.matrix.col += 1;
            }
            else if (direction == 2) {
                player.matrix.col -= 1;
            }
            else if (direction == 3) {
                player.matrix.row += 1;
            }
            else if (direction == 4) {
                player.matrix.row -= 1;
            }
        }
    }
    self.checkNextPosition = function(direction){
        if(puzzle[level - 1][player.matrix.row][player.matrix.col] != 0) {
            return true;
        }
        return false;
    }
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
}

function startGame() {
    init();
    player = new Player({ src: "./IMG/hero.png" }, 480, 480);
    ctx.drawImage(player.img, player.x, player.y);
    level = 1;
    document.addEventListener('keydown', handler, false);
}