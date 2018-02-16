  // Setup function
  function setup(){
    createCanvas(1000, 1000);
    console.log('Setup complete.gfhgr..')
  }

  // Draw function
  function draw(){
    noStroke();
    colorMode(HSB, 100);
    for (var i = 0; i < 51; i++) {
      for (var j = 0; j < 51; j++) {
      var x1 = 20 * i - 10;
      var y1 = 20 * j - 10;
        fill(2 * i, 2 * j, 100);
        rect(x1, y1, 25, 25);
      }
    }
  }
