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
  }
}
