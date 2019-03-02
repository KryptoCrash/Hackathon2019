import Player from "./player.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.controls;
  }
  preload() {
    this.load.image("tiles", "./client/assets/house_inside.png");
    this.load.tilemapTiledJSON("map", "./client/assets/RpgMap.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage("house_inside", "tiles");
    const spawnPoint = map.findObject("Object Layer", obj => obj.name === "spawnPoint");
    
    this.player = new Player(this, spawnPoint.x, spawnPoint.y);

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const belowLayer = map.createStaticLayer("belowPlayer", tileset, 0, 0);
    const worldLayer = map.createStaticLayer("worldLayer", tileset, 0, 0);
    const aboveLayer = map.createStaticLayer("abovePlayer", tileset, 0, 0);

    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;


    // Set up the arrows to control the camera

    // Help text that has a "fixed" position on the screen
    this.add
      .text(16, 16, "Arrow keys to scroll", {
        font: "18px monospace",
        fill: "#ffffff",
        padding: { x: 20, y: 10 },
        backgroundColor: "#000000"
      })
      .setScrollFactor(0);
  }

  update(time, delta) {
    // Apply the controls to the camera each update tick of the game

  }
}
