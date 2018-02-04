//Get the canvas & context 
var c = $('#can');
var ct = c.get(0).getContext('2d');
var container = $(c).parent();

//Run function when browser resizes
$(window).resize( respondCanvas );

function respondCanvas(){
    c.attr('width', $(container).width() ); //max width
    c.attr('height', $(container).height() ); //max height
}

respondCanvas();

//NAV
$('#menuButton').click(function() {
  $('#menu').toggle('slide');
});

// Setup canvas .. 
var c = document.getElementById('can');
  ct = c.getContext('2d');

// setup lines styles .. 
ct.strokeStyle = "black";
ct.lineWidth = 2;

// some variables we'll need .. 
var drawing = false;
var mousePos = {x:0, y:0};
var lastPos = mousePos;
var isMobile = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

// mouse/touch events ..
c.addEventListener((isMobile ? 'touchstart' : 'mousedown'), function(e) {
  drawing = true;
  lastPos = getMousePos(c, e);
  mousePos = lastPos;
});
c.addEventListener((isMobile ? 'touchmove' : 'mousemove'), function(e) {
  mousePos = getMousePos(c, e);
});
c.addEventListener((isMobile ? 'touchend' : 'mouseup'), function(e) {
  drawing = false;
});

// helper functions .. 
function getMousePos(canvasDom, touchOrMouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: (isMobile ? touchOrMouseEvent.touches[0].clientX : touchOrMouseEvent.clientX) - rect.left,
    y: (isMobile ? touchOrMouseEvent.touches[0].clientY : touchOrMouseEvent.clientY) - rect.top
  };
};

// drawing .. 
window.requestAnimFrame = (function(callback) {
  return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000/60);
      };
})();

function renderCanvas() {
  if (drawing) {
    ct.moveTo(lastPos.x, lastPos.y);
    ct.lineTo(mousePos.x, mousePos.y);
    ct.stroke();
    lastPos = mousePos;
  }
};

(function drawLoop() {
  requestAnimFrame(drawLoop);
  renderCanvas();
})();


//DRAWING TOOLS
$('#black').on('click', function() {
    color(this);
});

$('#white').on('click', function() {
    color(this);
})

function color(obj) {
    switch (obj.id) {
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 30;
    else y = 2;
}