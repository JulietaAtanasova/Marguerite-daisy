var puzzle = [
    [
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 2, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 0, 1, 0]
    ]
], player, level = 1,
levelPuzzle = puzzle[level - 1],
collectibles = [],
canvas, ctx,
playerImgFront, playerImgBack;

playerImgFront = new Image();
playerImgFront.src = "./IMG/pesho.png";
playerImgBack = new Image();
playerImgBack.src = "./IMG/pesho-back.png";

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
    else if (event.keyCode == 32) {
        if(player.direction == 1){
            player.shoot(1);
        }
        else if (player.direction == 2) {
            player.shoot(2);
        }
        else if (player.direction == 3) {
            player.shoot(3);
        }
        else if (player.direction == 4) {
            player.shoot(4);
        }
    }
    if (checkForCollectable(player.matrix.row, player.matrix.col)) {
      // add points and delete collectible
      // change checkForCollectable function implementation
    }
    canvasRedraw();
}

function checkForCollectable(row, col) {
  if(puzzle[level - 1][row][col] !== 0 && puzzle[level - 1][row][col] !== 1){
    return true;
  }
  return false;
}

function canvasRedraw() {
    canvas.width = canvas.width;
    ctx.drawImage(player.img, player.x, player.y);
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    for (var i = 0; i < levelPuzzle.length; i += 1){
      for (var j = 0; j < levelPuzzle[i].length; j += 1){
        if (levelPuzzle[i][j] === 2) {
          var colCoords = { row: i, col: j };
          collectibles.push(colCoords);
        }
      }
    }
}

function startGame() {
    init();
    player = new Player(playerImgFront, 0, 120);
    ctx.drawImage(player.img, player.x, player.y);
    level = 1;
    document.addEventListener('keydown', handler, false);
}

function Player(img, x, y) {
  var self = this;
  self.img = img;
  self.img.onload = function () {
    ctx.drawImage(self.img, 0, 120);
  };
  self.img.src = img.src;
  self.x = x;
  self.y = y;
  self.matrix = { row: 2, col: 0 };
  self.direction = 0;
  self.shoot = function (direction) {
    // TODO
  }
  self.move = function (x, y, direction) {
    self.x += x;
    self.y += y;
    player.changeImage(playerImgFront);
    if (direction == 1) {
      self.matrix.col += 1;
    }
    else if (direction == 2) {
      self.matrix.col -= 1;
    }
    else if (direction == 3) {
      self.matrix.row += 1;
    }
    else if (direction == 4) {
      self.changeImage(playerImgBack);
      self.matrix.row -= 1;
    }
    self.direction = direction;
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
      condition = (player.matrix.row - 1 >= 0) && (puzzle[level - 1][player.matrix.row - 1][player.matrix.col] != 0);
    }
    else if (direction == "down") {
      condition = (player.matrix.row + 1 < puzzle[level - 1].length) && (puzzle[level - 1][player.matrix.row + 1][player.matrix.col] != 0);
    }
    if (condition) {
      return true;
    }
    return false;
  }
  self.changeImage = function (newImg) {
    self.img = newImg;
    self.img.onload = undefined;
  }
}

function Collectible(row, col) {
  var self = this;
  self.row = row;
  self.col = col;
  self.x = (self.col + 1) * 40;
  self.y = (self.row + 1) * 60;
}