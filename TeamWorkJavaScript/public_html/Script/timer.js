function Timer(seconds) {
  var self = this;
  self.time = seconds;
  self.minutes = seconds / 60 | 0;
  self.seconds = 0;
  self.INTERVAL = 1000;
  var a;
  self.start = function () {
    a = setInterval(function () {
      self.time -= 1;
      self.minutes = parseInt(self.time / 60, 10);
      self.seconds = self.time % 60;
      self.render();
    }, self.INTERVAL);
  };
  self.stop = function () {
    clearInterval(a);
  };
  self.reset = function () {
    self.stop();
    self.time = seconds;
  };
  self.render = function () {
    console.log(self.minutes + " : " + self.seconds);
  }
}