// Get a reference to the element.
var elem = document.getElementById('myCanvas');

// Always check for properties and methods, to make sure your code doesn't break in other browsers.
if (elem && elem.getContext) {
  // Get the 2d context.
  // Remember: you can only initialize one context per element.
  var context = elem.getContext('2d');
  var ctx = context;
  var x = elem.width;
  var y = elem.height;
  var gridList = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]];

  if (context) {
    var gridSize = (elem.width) / 10;
    var i, j;
    for (i = 0; i <= x; i += gridSize) {
      ctx.lineWidth = .5;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, y);
      ctx.stroke();
    }
    for (j = 0; j <= y; j += gridSize) {
      ctx.lineWidth = .5;
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(x, j);
      ctx.stroke();
    }
  buildGridList();
  }

  function buildGridList() {
    var i, j;
    for (i = 0; i < x; i += gridSize) {
      ctx.fillRect(i+gridSize/2.5, y/50, gridSize/5, gridSize/5)
    }
    ctx.fillRect(gridSize/2.5, gridSize/2.5, 5, 5)
  } 

}
