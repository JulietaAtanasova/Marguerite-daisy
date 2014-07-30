function Timer(seconds) {
  var self = this;
  self.paused = false;
  self.time = seconds;
  self.minutes = seconds / 60 | 0;
  self.seconds = 0;
  self.INTERVAL = 1000;
  var a;
  self.start = function () {
    a = setInterval(function () {
      if (self.paused === true) {
        return;
      }
      if (self.time > 0) {
        self.time -= 1;
        self.minutes = parseInt(self.time / 60, 10);
        self.seconds = self.time % 60;
        self.render();
      } else {
        return false;
      }
    }, self.INTERVAL);
  }
  self.stop = function () {
    clearInterval(a);
  }
  self.reset = function () {
    self.stop();
    self.time = seconds;
  }
  self.pause = function () {
    if (self.paused === true) {
      self.paused = false;
      return;
    }
    if (self.paused === false) {
      self.paused = true;
      return;
    }
  }
  self.render = function () {
    var timeRender = self.time < 10 ? '0' + self.time : self.time; // only seconds
    $('#countdown').text(timeRender);
    //console.log(self.minutes + " : " + (self.seconds < 10 ? '0' + self.seconds : self.seconds));
  }
}