  // Setup function
  function setup(){
    createCanvas(800, 800);
    console.log('Setup complete...')
  }

  // Draw function
  function draw(){
  background(255, 255, 255);
  for (var i= 1; i< 21; i++){
    for (var j= 1; j< 21; j++){
      var x1 = 40 * i - 20;
      var y1 = 40 * j - 20;
      var x2 = mouseX;
      var y2 = mouseY;
      var d = float (dist (x1, y1, x2, y2));
      var r = float (2 + 0.05 * d);
      var a = int (0.2 * d + 41);
      fill (a, a, a);
      ellipse(x1, y1, r, r);
    }
  }
}
