// ***** Global variables ***** //
var BuildingTable;
var topY = 100;
var bottomY = 400;
var leftX = 50;
var rightX = 1150;
var textLeft = 30;
var buttonLabels = ['All Buildings', '< 40 Floor', '40-79 Floor', '80-120 Floor'];
var buttonStartX = 0;
var buttonStartY = 15;
var buttonLength = 120;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;
var topfloor = new p5.Table;
var midfloor = new p5.Table;
var bottomfloor = new p5.Table;

// ***** Preload function ***** //
function preload(){
  BuildingTable = loadTable('drawing_data/data/MN2017V11.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(1200, 1200);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(BuildingTable.getRowCount() + ' rows loaded...');
  print(BuildingTable.getColumnCount() + ' columns loaded...');
  createNewTable();
  noLoop();
}

// ***** Labels Function ********* //
function drawLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  text("FLOOR OF SELECTED BUILDINGS", textLeft - 15, topY - 25);
  textAlign(RIGHT, CENTER);
  for (var i = 0; i < 121; i+=20) {
    noStroke();
    text(i, textLeft, map(i, 0, 120, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 120, bottomY, topY), rightX + 10, map(i, 0, 120, bottomY, topY));
  }
  textAlign(CENTER, CENTER);
  for (var i = 1765; i < 2016; i+=10) {
    noStroke();
    text(i, map(i, 1765, 2015, leftX, rightX), bottomY + 25);
    stroke(200);
    line(map(i, 1765, 2015, leftX, rightX), bottomY + 12, map(i, 1765, 2015, leftX, rightX), bottomY + 5);
  }
}

function createNewTable(){
  topfloor.addColumn('YearBuilt');
  topfloor.addColumn('NumFloors');
  midfloor.addColumn('YearBuilt');
  midfloor.addColumn('NumFloors');
  bottomfloor.addColumn('YearBuilt');
  bottomfloor.addColumn('NumFloors');
  for (var i = 0; i < BuildingTable.getRowCount(); i++) {
    var floor = BuildingTable.getNum(i, 'NumFloors');
    if (floor >= 80) {
      var newRow = topfloor.addRow();
      newRow.setString('YearBuilt', BuildingTable.getString(i, 'YearBuilt'));
      newRow.setNum('NumFloors', BuildingTable.getNum(i, 'NumFloors'));
        }
        else if (floor >= 40 && floor < 80) {
          var newRow = midfloor.addRow();
          newRow.setString('YearBuilt', BuildingTable.getString(i, 'YearBuilt'));
          newRow.setNum('NumFloors', BuildingTable.getNum(i, 'NumFloors'));
        }
        else {
          var newRow = bottomfloor.addRow();
          newRow.setString('YearBuilt', BuildingTable.getString(i, 'YearBuilt'));
          newRow.setNum('NumFloors', BuildingTable.getNum(i, 'NumFloors'));
        }
      }
      print('New tables created...');
    }



// ***** Draw Buildings function ***** //
function drawBuildings(){
  if (selectedButton == 0) {
    fill(0);
    noStroke();
    for (var i = 0; i < BuildingTable.getRowCount(); i++) {
      var year = BuildingTable.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var floorPosition = map(BuildingTable.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, floorPosition, 3, 3);
      text('There are ' + BuildingTable.getRowCount() + ' buildings in Manhattan.', 120, 50);
    }
  }
  else if (selectedButton == 1){
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var floorPosition = map(bottomfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, floorPosition, 3, 3);
      fill(0);
      text('There are ' + bottomfloor.getRowCount() + ' buildings less than 40 floors in Manhattan.', 120, 50);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
  }
  else if (selectedButton == 2){
    fill(220);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var floorPosition = map(bottomfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, floorPosition, 3, 3);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
      fill(0);
      text('There are ' + midfloor.getRowCount() + ' buildings between 40-79 floors in Manhattan.', 120, 50);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
  }
  else{
    fill(220);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var floorPosition = map(bottomfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, floorPosition, 3, 3);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1765, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'NumFloors'), 0, 120, bottomY, topY);
      ellipse(yearPosition, scorePosition, 3, 3);
      fill(0);
      text('There are ' + topfloor.getRowCount() + ' buildings more than 80 floors in Manhattan.', 120, 50);
    }
  }
}

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(200);
    }
    else {
      fill(240);
    }
    stroke(100);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  drawLabels();
  drawBuildings();
  drawButtons();
}

// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseX <= (buttonStartX + buttonLength * 4 + buttonSpacing * 3) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 3;
    redraw();
  }
}
