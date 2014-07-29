var puzzle = [
    [
        [0, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 2, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0]
    ]
], player, scores = 0, level = 1,
levelPuzzle = puzzle[level - 1],
collectibles = [],
canvas, ctx,
playerImgFront, playerImgBack,
  collectIcons = [];

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
    if (player.direction == 1) {
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
  canvasRedraw();
  drawCollectibles();
}

function canvasRedraw() {
  canvas.width = canvas.width;
  ctx.drawImage(player.img, player.x, player.y);
}

function drawCollectibles() {
  for (var i = 0; i < collectibles.length; i += 1) {
    ctx.drawImage(collectIcons[level - 1], collectibles[i].x, collectibles[i].y);
  }
}

function initCollectibles() {
  var collectSize = 4;
  var paths = ['./IMG/cSharp.png', './IMG/eclipse.png', './IMG/html5.png', './IMG/css.png'];
  for (i = 0; i < collectSize; i += 1) {
    var img = new Image();
    img.src = paths[0];
    collectIcons.push(img);
  }
  for (var i = 0; i < levelPuzzle.length; i += 1) {
    for (var j = 0; j < levelPuzzle[i].length; j += 1) {
      if (levelPuzzle[i][j] === 2) {
        var colCoords = new Collectible(i, j);
        collectibles.push(colCoords);
      }
    }
  }
}

function init(lvl) {
  level = lvl
  canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');
}

function startGame(lvl) {
  init(lvl);
  initCollectibles();
  canvas.width = canvas.width;
  player = new Player(playerImgFront, 0, 120);
  ctx.drawImage(player.img, player.x, player.y);
  drawCollectibles();
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
  };
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
  };
  self.checkCurrentPosition = function() {
    for (i = 0; i < collectibles.length; i += 1){
      if(self.matrix.row === collectibles[i].row && self.matrix.col === collectibles[i].col){
        return true;
      }
    }
    return false;
  };
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
  };
  self.changeImage = function (newImg) {
    self.img = newImg;
    self.img.onload = undefined;
  }
}

function Collectible(row, col) {
  var self = this;
  self.row = row;
  self.col = col;
  self.x = (self.col) * 40;
  self.y = (self.row) * 60;
}
