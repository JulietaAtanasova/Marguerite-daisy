var puzzle = [
    [
        [0, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0]
    ]
], player, scores = 0, level,
levelPuzzle,
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
  for (var i = 0; i < level.collectibles.length; i += 1) {
    var currentCollectible = level.collectibles[i];
    if (currentCollectible.checkIfCollected(player)) {
      level.collectibles.splice(i, 1);
      scores += 10 * level.level;
    }
  }
  canvasRedraw();
  level.drawCollectibles();
  level.renderScore();
  level.checkIfCompleted();
}

function canvasRedraw() {
  canvas.width = canvas.width;
  ctx.drawImage(player.img, player.x, player.y);
}

function init(lvl) {
  level = lvl;
  canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');
}

function startGame(lvl) {
  lvl = new Level(lvl,puzzle);
  scores = 0;
  lvl.renderScore();
  init(lvl);
  level.initCollectibles();
  canvas.width = canvas.width;
  player = new Player(playerImgFront, 0, 120);
  ctx.drawImage(player.img, player.x, player.y);
  level.drawCollectibles();
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
  self.checkCurrentPosition = function () {
    for (i = 0; i < collectibles.length; i += 1) {
      if (self.matrix.row === collectibles[i].row && self.matrix.col === collectibles[i].col) {
        return true;
      }
    }
    return false;
  };
  self.checkNextPosition = function (direction) {
    var condition;
    if (direction == "right") {
      condition = (player.matrix.col + 1 < level.levelPuzzle[player.matrix.row].length) && (level.levelPuzzle[player.matrix.row][player.matrix.col + 1] != 0);
    }
    else if (direction == "left") {
      condition = (player.matrix.col - 1 >= 0) && (level.levelPuzzle[player.matrix.row][player.matrix.col - 1] != 0);
    }
    else if (direction == "up") {
      condition = (player.matrix.row - 1 >= 0) && (level.levelPuzzle[player.matrix.row - 1][player.matrix.col] != 0);
    }
    else if (direction == "down") {
      condition = (player.matrix.row + 1 < level.levelPuzzle.length) && (level.levelPuzzle[player.matrix.row + 1][player.matrix.col] != 0);
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
  self.collected = false;
  self.img = level.collectIcons[level.level - 1];
  self.checkIfCollected = function (player) {
    if (player.matrix.row === self.row && player.matrix.col === self.col) {
      self.collected = true;
      return true;
    }
    return false;
  };
}

function Level(lvl, puzzle) {
  var self = this;
  self.completed = false;
  self.level = lvl;
  self.levelPuzzle = puzzle[self.level - 1];
  self.collectibles = [];
  self.collectIcons = [];
  self.initCollectibles = function () {
    var collectSize = 4;
    var paths = ['./IMG/cSharp.png', './IMG/eclipse.png', './IMG/html5.png', './IMG/css.png'];
    for (i = 0; i < collectSize; i += 1) {
      var img = new Image();
      img.src = paths[i];
      self.collectIcons.push(img);
    }
    for (var i = 0; i < self.levelPuzzle.length; i += 1) {
      for (var j = 0; j < self.levelPuzzle[i].length; j += 1) {
        if (self.levelPuzzle[i][j] === 2) {
          var colCoords = new Collectible(i, j);
          self.collectibles.push(colCoords);
        }
      }
    }
  };
  self.drawCollectibles = function () {
    for (var i = 0; i < self.collectibles.length; i += 1) {
      var currentCollectible = self.collectibles[i];
      if (!currentCollectible.collected) {
        ctx.drawImage(currentCollectible.img, currentCollectible.x, currentCollectible.y);
      }
    }
  };
  self.renderScore = function () {
    $('#points').text(scores);
  };
  self.checkIfCompleted = function () {
    function prepareNextLevel () {
      // draw arrow for next level
      console.log('completed');
    }
    if(self.collectibles.length === 0) {
      self.completed = true;
    }
    if (self.completed) {
      prepareNextLevel();
    }
  };
}
