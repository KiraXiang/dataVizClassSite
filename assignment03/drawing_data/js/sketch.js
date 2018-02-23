//****Global variables****//
var BuildingTable;
var startX = 50;
var endX = 750;
var startY = 400;
var endY = 100;
var startYear = 1765;
var endYear = 2015;
var startFloor = 1;
var endFloor = 104;
var Floor = [120, 100, 80, 60, 40, 20, 0];
var Year = [1765, 1790, 1815, 1840, 1865, 1890, 1915, 1940, 1965, 1990, 2015];

//loading the table
function preload(){
  BuildingTable = loadTable('drawing_data/data/MN2017V11.csv', 'csv', 'header');
  console.log('table has been loaded...');
}

//Setup
function setup() {
  createCanvas(800, 800);
  textFont('Roboto');
  print('is this working?????');
  // print(BuildingTable.getRowCount());
  // print(BuildingTable.getColumnCount());
  textAlign(LEFT, TOP);
  textSize(14);
  console.log('Setup complete...');
  //background(100);
  noLoop();
}

//plotting the data
function draw() {
for (var i = 0; i < BuildingTable.getRowCount(); i++) {
  var floor = BuildingTable.getNum(i, 'NumFloors');
  var year = BuildingTable.getString(i, 'YearBuilt');
  var positionX = map(year, startYear, endYear, startX, endX);
  var positionY = map(floor, startFloor, endFloor, startY, endY);
  ellipse(positionX, positionY, 3, 3);
}
//Drawing the tendency line
//for (var i = 0; i < BuildingTable.getRowCount(); i++) {
//  for (var j = 0; j < BuildingTable.getRowCount(); j++) {
//    var medianfloor = BuildingTable.getNum(i, 'Median');
//    var year = BuildingTable.getString(j, 'Year');
//    var positionX1 = map(year, i, i + 1, startX, endX);
//    var positionY1 = map(medianfloor, j, j + 1, startY, endY);
//    var positionX2 = map(year, i + 1, i + 2, startX, endX);
//    var positionY2 = map(medianfloor, j + 1, j + 2, startY, endY);
//    line(positionX1, positionY1, positionX2, positionY2);
//  }
//  }
// Drawing the year labels
fill(20);
  for (var i = 0; i < Year.length; i++) {
    textAlign(RIGHT);
    text(Year[i], 50 + 70 * i, 420);
  }
  // Drawing the floor labels
  for (var i = 0; i < Floor.length; i++) {
    textAlign(LEFT);
    text(Floor[i], 0, 100 + 50 * i);
  }
}
