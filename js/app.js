// Enemies our player must avoid
class Enemy {
    constructor(x, y, pace) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.pace = pace;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's Location, required method for game
// Parameter: dt, a time delta between ticks
update (dt) {
    // You should multiply any pace by the dt parameter
    // which will ensure the game runs at the same pace for
    // all computers.
    this.x += this.pace * dt;

    // when off canvas, reset Location of enemy to move across again
    if (this.x > 550) {
        this.x = -100;
        this.pace = 100 + Math.floor(Math.random() * 256);
    }

    // Check for collision between player and enemies
    if (player.x < this.x + 80 &&
        player.x + 40 > this.x &&
        player.y < this.y + 27 &&
        35 + player.y > this.y) {
        player.x = 200;
        player.y = 390;
    }
};

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y, pace) {
    this.x = x;
    this.y = y;
    this.pace = pace;
    this.sprite = 'images/char-boy.png';
};

update() {
    // Prevent player from moving beyond canvas wall boundaries
    if (this.y > 390) {
        this.y = 390;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Check for player reaching top of canvas and winning the game
    if (this.y < 0) {
        this.x = 200;
        this.y = 390;
    }
};

render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

handleInput(keyPress) {
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (keyPress == 'right' && this.x < 390) {
        this.x += 100;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 70;
    }
    if (keyPres == 'down' && this.y < 390) {
        (this.y += 70) 
    }
    
}
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

// Location "y" where the enemies will are created
var enemyLocation = [70, 130, 230];
var player = new Player(200, 390, 100);
var enemy;

enemyLocation.forEach(function(LocY) {
    enemy = new Enemy(0, LocY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});