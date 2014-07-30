var puzzle = [
    [
        [0, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 1, 3, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 3, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0]
    ],
    [
        [0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1],
        [0, 0, 1, 0, 0, 2, 1, 1, 0, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2]
    ],
    [
        [0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 1],
        [1, 1, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 2],
        [1, 1, 2, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
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
      if (currentCollectible.behave === '+') {
        level.collectiblesCount -= 1;
        scores += 10 * level.level;
      }
      else if (currentCollectible.behave === '-') {
        level.enemiesCount -= 1;
        scores -= 10 * level.level;
      }
    }
  }
  console.log(level.collectibles[9].row, level.collectibles[9].col);
  level.collectibles[9].checkAvailableDirections();
  level.collectibles[9].changeDirection(level.collectibles[9].availableDirections);
  level.collectibles[9].move();
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
  lvl = new Level(lvl, puzzle);
  scores = 0;
  lvl.renderScore();
  init(lvl);
  var collectPaths = [['./IMG/Img_Visual Studio1.png'], ['./IMG/eclipse.png'], ['./IMG/html5.png'], ['./IMG/css.png']];
  var enemyPaths = [['./IMG/planeta-tv.png', './IMG/blonde-girl.png', './IMG/beer.png'], ['./IMG/2048.png', './IMG/beer.png'], ['./IMG/2048.png', './IMG/beer.png', './IMG/girl2.png']];
  level.initCollectibles(collectPaths);
  level.initEnemyCollectibles(enemyPaths);
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
  self.behave = '+';
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
  self.enemyIcons = [];
  self.enemiesCount = 0;
  self.collectiblesCount = 0;
  self.collectObjectsCount = 0;
  self.initCollectibles = function (paths) {
    var collectSize = paths.length;
    var img = new Image();
    img.src = paths[level.level - 1][0];
    self.collectIcons.push(img);
    var count = 0;
    for (var i = 0; i < self.levelPuzzle.length; i += 1) {
      for (var j = 0; j < self.levelPuzzle[i].length; j += 1) {
        if (self.levelPuzzle[i][j] === 2) {
          var col = new Collectible(i, j);
          self.collectibles.push(col);
          count += 1;
        }
      }
    }
    self.collectiblesCount = count;
    self.collectObjectsCount += count;
  };
  self.initEnemyCollectibles = function (paths) {
    var collectSize = paths[level.level - 1].length;
    for (i = 0; i < collectSize; i += 1) {
      var img = new Image();
      img.src = paths[level.level - 1][i];
      self.enemyIcons.push(img);
    }
    var count = 0;
    for (var i = 0; i < self.levelPuzzle.length; i += 1) {
      for (var j = 0; j < self.levelPuzzle[i].length; j += 1) {
        if (self.levelPuzzle[i][j] === 3) {
          var enm = new Enemy(i, j);
          self.collectibles.push(enm);
          count += 1;
        }
      }
    }
    self.enemiesCount = count;
    self.collectObjectsCount += count;
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
    function prepareNextLevel() {
      // draw arrow for next level
      console.log('completed');
    }
    if (self.collectiblesCount <= 0 && self.enemiesCount > 0) {
      self.completed = true;
    }
    if (self.completed) {
      prepareNextLevel();
    }
  };
}

function Enemy(row, col) {
  var self = this;
  self.behave = '-';
  self.row = row;
  self.col = col;
  self.x = (self.col) * 40;
  self.y = (self.row) * 60;
  self.changeCoords = function () {
    self.x = (self.col) * 40;
    self.y = (self.row) * 60;
  };
  self.collected = false;
  function randomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  self.img = level.enemyIcons[randomIndex(level.enemyIcons.length)];
  self.checkIfCollected = function (player) {
    if (player.matrix.row === self.row && player.matrix.col === self.col) {
      self.collected = true;
      return true;
    }
    return false;
  };
  self.availableDirections = [];
  self.nextDirection = '';
  self.checkAvailableDirections = function () {
    self.availableDirections = new Array();
    if (level.levelPuzzle[self.row][self.col + 1] !== 0) { // right
      if (self.col + 1 > 0 && self.col + 1 < level.levelPuzzle[0].length - 1) {
        self.availableDirections.push('R');
      }
    }
    if (level.levelPuzzle[self.row][self.col - 1] !== 0) { // left
      if (self.col - 1 > 0 && self.col - 1 < level.levelPuzzle[0].length - 1) {
        self.availableDirections.push('L');
      }
    }
    if (level.levelPuzzle[self.row - 1][self.col] !== 0) { // up
      if (self.row - 1 > 0 && self.row - 1 < level.levelPuzzle.length - 1) {
        self.availableDirections.push('U');
      }
    }
    if (level.levelPuzzle[self.row + 1][self.col] !== 0) { // down
      if (self.row + 1 > 0 && self.row + 1 < level.levelPuzzle[0].length - 1) {
        self.availableDirections.push('D');
      }
    }
  };
  self.changeDirection = function (availableDirections) {
    var index = Math.floor(Math.random() * 4);
    if (availableDirections[index] !== undefined) {
      self.nextDirection = availableDirections[index];
    }
  };
  self.move = function (direction) {
    if (self.nextDirection === 'R') {
      self.col += 1;
      self.changeCoords();
    }
    else if (self.nextDirection === 'L') {
      self.col -= 1;
      self.changeCoords();
    }
    else if (self.nextDirection === 'U') {
      self.row -= 1;
      self.changeCoords();
    }
    else if (self.nextDirection === 'D') {
      self.row += 1;
      self.changeCoords();
    }
    console.log(self.nextDirection);
  };
}