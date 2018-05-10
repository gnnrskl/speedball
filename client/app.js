var movement = {
    up: false,
    down: false,
    left: false,
    right: false,
    stop: false,
    check: false,
    width: 0,
    height: 0
}
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 65: // A
            movement.left = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 87: // W
            movement.up = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 68: // D
            movement.right = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 83: // S
            movement.down = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 32:
            movement.stop = true
            movement.check = true;
            movement.width = w;
            movement.height = h;
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 65: // A
            movement.left = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 87: // W
            movement.up = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 68: // D
            movement.right = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 83: // S
            movement.down = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 32:
            movement.stop = false;
            movement.check = false;
            movement.width = 0;
            movement.height = 0;
            break;
    }
});

var socket = io()

socket.emit('new player');
//setInterval(function() {
//  socket.emit('movement', movement);
//}, 1000 / 60);

function movementemit() {
    requestAnimationFrame(movementemit)
    socket.emit('movement', movement);
}

movementemit()

var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');


var w = window.innerWidth
var h = window.innerHeight

canvas.width = w
canvas.height = h

socket.on('state', function(players) {
    
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'black';
    
  for (var id in players) {
      
    var player = players[id];
    ctx.beginPath();
    ctx.arc(player.x, player.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
});