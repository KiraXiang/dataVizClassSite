  // Setup function
  function setup(){
    createCanvas(800, 800);
    console.log('Setup complete...')
  }

  // Draw function
  function draw(){
    noStroke();
    colorMode(HSB, 100);
    for (var i = 0; i < 100; i++) {
      for (var j = 0; j < 100; j++) {
        ellipse(i, j, 50, 50);
      }
    }
  }
