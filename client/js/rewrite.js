//rewrite
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var player = {
    x: getRandomInt(1330),
    y: getRandomInt(630),
    velY: 0,
    velX: 0,
    speed: 200,
    friction: 0.9999,
    keys: [],
    update: function() {
        requestAnimationFrame(player.update)
        
        if (player.keys[87] || player.keys[38]) {
            if (player.velY > -200) {
                player.velY--;
            }
        }
        
        if (player.keys[83] || player.keys[40]) {
            if (player.velY < 200) {
                player.velY++;
            }   
        }
        
        if (player.keys[68] || player.keys[39]) {
            if (player.velX < 200) {
                player.velX++;
            }
        }
        
        if (player.keys[65] || player.keys[37]) {
            if (player.velX > -player.speed) {
                player.velX--;
            }
        }
        
        player.velY *= player.friction;
        player.y += player.velY;

        player.velX *= player.friction;
        player.x += player.velX;
        
        if (player.x >= 1330) {
            player.x = 1325;
        } else if (player.x <= 5) {
            player.x = 5;
        }

        if (player.y > 630) {
            player.y = 625;
        } else if (player.y <= 5) {
            player.y = 5;
        }
        
        ctx.clearRect(0, 0, 1330, 630);
        ctx.beginPath();
        ctx.arc(player.x, player.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#000000";
        ctx.fill();
    },
    keydownevents: function() {
        document.body.addEventListener("keydown", function (e) {
            player.keys[e.keyCode] = true;
        });
        document.body.addEventListener("keyup", function (e) {
            player.keys[e.keyCode] = false;
        });
    }
}

player.keydownevents()

player.update()