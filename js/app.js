var Game = require("./game.js");

var game = new Game();
game.showPlayer();
game.showItem();
game.startGame();

document.addEventListener("keydown", function (event) {
    game.turnPlayer(event);

});






