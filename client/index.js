import Game from './game.js'
const config = {
  type: Phaser.AUTO,

  scale: {
    mode: Phaser.Scale.ZOOM_4X,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [Game]
};

const game = new Phaser.Game(config);
