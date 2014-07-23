var canvas, ctx;
var player, level;
var puzzle = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

function handler(event) {
    if (event.keyCode == 39) { //right 1
        if (player.checkNextPosition("right")) {
            player.move(40, 0, 1);
        }
    }
    else if (event.keyCode == 37) { //left 2
        if (player.checkNextPosition("left")) {
            player.move(-40, 0, 2);
        }
    }
    else if (event.keyCode == 40) { // down 3
        if (player.checkNextPosition("down")) {
            player.move(0, 60, 3);
        }
    }
    else if (event.keyCode == 38) { // up 4
        if (player.checkNextPosition("up")) {
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
        ctx.drawImage(self.img, 0, 60);
    };
    self.img.src = img.src;
    self.x = x;
    self.y = y;
    self.matrix = { row: 1, col: 0 };
    self.move = function (x, y, direction) {
        player.x += x;
        player.y += y;
        player.changeImage('./IMG/pesho.png');
        if (direction == 1) {
            1
            player.matrix.col += 1;
        }
        else if (direction == 2) {
            player.matrix.col -= 1;
        }
        else if (direction == 3) {
            player.matrix.row += 1;
        }
        else if (direction == 4) {
            player.changeImage('./IMG/pesho-back.png');
            player.matrix.row -= 1;
        }
    }
    self.checkNextPosition = function (direction) {
        var condition;
        if (direction == "right") {
            condition = (player.matrix.col + 1 < puzzle[level - 1][player.matrix.row].length) && (puzzle[level - 1][player.matrix.row][player.matrix.col + 1] != 0);
        }
        else if (direction == "left") {
            condition = (player.matrix.col - 1 >= 0) && (puzzle[level - 1][player.matrix.row][player.matrix.col - 1] != 0);
        }
        else if (direction == "up") {
            condition = (player.matrix.row - 1 > 0) && (puzzle[level - 1][player.matrix.row - 1][player.matrix.col] != 0);
        }
        else if (direction == "down") {
            condition = (player.matrix.row + 1 < puzzle[level - 1].length) && (puzzle[level - 1][player.matrix.row + 1][player.matrix.col] != 0);
        }
        if (condition) {
            return true;
        }
        return false;
    }
    self.changeImage = function (path) {
        self.img.src = path;
        self.img.onload = undefined;
    }
}



function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
}

function startGame() {
    init();
    player = new Player({ src: "./IMG/pesho.png" }, 0, 60);
    //ctx.drawImage(player.img, player.x, player.y);
    level = 1;
    document.addEventListener('keydown', handler, false);
}