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
        [1, 1, 1, 3, 0, 1, 1, 3, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1],
        [0, 0, 1, 0, 0, 2, 1, 1, 0, 1, 3, 1, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3, 1, 0, 0, 1],
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
], player, level,
scores = 0, minScores = [70, 80, 90],
speed = [800, 700, 600],
levelPuzzle,
canvas, ctx,
playerImgFront, playerImgBack,
enemyMovement, gameOver;
var collectPaths = [['./IMG/Img_Visual Studio1.png'], ['./IMG/eclipse.png'], ['./IMG/html5.png'], ['./IMG/css.png']];
var enemyPaths = [['./IMG/planeta-tv.png', './IMG/blonde-girl.png', './IMG/beer.png'], ['./IMG/2048.png', './IMG/beer.png'], ['./IMG/2048.png', './IMG/beer.png', './IMG/girl2.png']];
var playerImgs = [['./IMG/pesho.png', './IMG/pesho-back.png'], ['./IMG/pesho-level-up.png', './IMG/pesho-level-up-back.png'], ['./IMG/pesho-the-student.png', './IMG/pesho-the-student-back.png']];

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
        level.scores += 10 * level.level;
        level.levelPoints += 10 * level.level;
      }
      else if (currentCollectible.behave === '-') {
        level.enemiesCount -= 1;
        scores -= 10 * level.level;
        level.scores -= 10 * level.level;
        level.levelPoints -= 10 * level.level;
      }
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
  lvl = new Level(lvl, puzzle);
  scores = 0;
  lvl.renderScore();
  init(lvl);
  playerImgFront = new Image();
  playerImgFront.src = playerImgs[level.level - 1][0];
  playerImgBack = new Image();
  playerImgBack.src = playerImgs[level.level - 1][1];
  level.initCollectibles(collectPaths);
  level.initEnemyCollectibles(enemyPaths);
  canvas.width = canvas.width;
  player = new Player(playerImgFront, 0, 120);
  ctx.drawImage(player.img, player.x, player.y);
  level.drawCollectibles();
  document.addEventListener('keydown', handler, false);
  enemyMovement = setInterval(function () {
    for (var i = 0; i < level.enemiesCount; i += 1) {
      var enemy = level.collectibles[i + level.collectiblesCount]; // only enemies
      enemy.checkAvailableDirections();
      enemy.changeDirection(enemy.availableDirections);
      enemy.move(enemy.nextDirection);
      canvasRedraw();
      level.drawCollectibles();
    }
  }, speed[level.level - 1]);
  var isOver = false;
  gameOver = setInterval(function () {
    if ((level.collectiblesCount === 0 && level.levelPoints < minScores[level.level - 1]) || timer.time === 0) {
      isOver = true;
      clearInterval(enemyMovement);
      document.removeEventListener('keydown', handler, false);
      $(function () {
        $.get('message.html', function (data) {
          $('#msg').html(
            "<p>Game Over!!!</p>" +
            "<button id='playAgain'><a href = 'index.html'>Replay</a></button>"
            );
          $('#msg').show();
        });
      });
    }
  }, speed[level.level - 1]);
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
    self.img.onload = null;
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
  self.img = level.collectIcons[0];
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
  self.levelPoints = 0;
  self.levelsPicPaths = ['./IMG/background_V1_2.jpg', './IMG/backgroundV2_2.jpg', './IMG/backgroundV2_3.jpg'];
  self.endPoint = [{ x: 920, y: 540 }, { x: 960, y: 540 }, { x: 920, y: 540 }];
  self.levelPuzzle = puzzle[self.level - 1];
  self.collectibles = [];
  self.collectIcons = [];
  self.enemyIcons = [];
  self.enemiesCount = 0;
  self.collectiblesCount = 0;
  self.collectObjectsCount = 0;
  self.initCollectibles = function (paths) {
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
      var nextLevelImg = new Image();
      nextLevelImg.src = './IMG/next-down.png';
      nextLevelImg.onload = function () {
        ctx.drawImage(nextLevelImg, level.endPoint[level.level - 1].x, level.endPoint[level.level - 1].y);
      }
      if (level.level === 3) {
        $(function () {
          $.get('message.html', function (data) {
            $('#msg').html(
              "<p>You Win!!!</p>" +
              "<button id='playAgain'><a href = 'index.html'>Replay</a></button>"
              );
            $('#msg').show();
          });
        });
        if (player.x == level.endPoint[level.level - 1].x && player.y == level.endPoint[level.level - 1].y) {
          var nextLvl = level.level + 1;
          var bgUrl = 'url(\'' + level.levelsPicPaths[level.level] + '\')';
          $('#game').css('background-image', bgUrl);
          startGame(nextLvl);
        }
      }
    }

    if (self.collectiblesCount <= 0 && self.enemiesCount >= 0) {
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
    if ((self.col + 1 < level.levelPuzzle[player.matrix.row].length) && (level.levelPuzzle[self.row][self.col + 1] != 0)) {
      self.availableDirections.push('R');
    }
    if ((self.col - 1 >= 0) && (level.levelPuzzle[self.row][self.col - 1] != 0)) {
      self.availableDirections.push('L');
    }
    if ((self.row - 1 >= 0) && (level.levelPuzzle[self.row - 1][self.col] != 0)) {
      self.availableDirections.push('U');
    }
    if ((self.row + 1 < level.levelPuzzle.length) && (level.levelPuzzle[self.row + 1][self.col] != 0)) {
      self.availableDirections.push('D');
    }
  };
  self.changeDirection = function (availableDirections) {
    var index = Math.floor(Math.random() * availableDirections.length);
    self.nextDirection = availableDirections[index];
  };
  self.move = function (direction) {
    if (direction === 'R') {
      self.col += 1;
      self.changeCoords();
    }
    else if (direction === 'L') {
      self.col -= 1;
      self.changeCoords();
    }
    else if (direction === 'U') {
      self.row -= 1;
      self.changeCoords();
    }
    else if (direction === 'D') {
      self.row += 1;
      self.changeCoords();
    }
    else {
      self.changeCoords();
    }
  };
}
