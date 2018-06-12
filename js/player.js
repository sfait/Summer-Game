function Player() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
    this.direction = "direction";
}

module.exports = Player;
