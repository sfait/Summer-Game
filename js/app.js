import {Game} from "./game.js";

const game = new Game();
game.startGame();

document.addEventListener("keydown", function (event) {
    game.turnPlayer(event);

});






