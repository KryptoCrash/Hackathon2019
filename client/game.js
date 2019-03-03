import Player from "./player.js";
import dialogueHandler from "./AISolutions.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.dH;
  }
  preload() {
    this.load.image("tiles", "./client/assets/house_inside.png");
    this.load.tilemapTiledJSON("map", "./client/assets/RpgMap.json");
    this.load.spritesheet("player", "./client/assets/player.png", {frameWidth: 24, frameHeight: 32});
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage("house_inside", "tiles");
    const spawnPoint = map.findObject(
      "Object Layer",
      obj => obj.name === "spawnPoint"
    );

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const belowLayer = map.createStaticLayer("belowPlayer", tileset, 0, 0);
    const worldLayer = map.createStaticLayer("worldLayer", tileset, 0, 0);
    this.player = new Player(this, spawnPoint.x, spawnPoint.y);
    const aboveLayer = map.createStaticLayer("abovePlayer", tileset, 0, 0);
    const torchLayer = map.createStaticLayer('torchLayer', tileset, 0, 0)
    worldLayer.setCollisionByProperty({ collides: true });
    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;
    camera.startFollow(this.player.sprite);
    camera.setZoom(1.8)
    this.dH = new dialogueHandler(this, this.player, map, worldLayer);
    
    // Set up the arrows to control the camera
    this.physics.add.collider(this.player.sprite, worldLayer);

    // Help text that has a "fixed" position on the screen
  }

  update(time, delta) {
    this.dH.update();
    this.player.update();
    // Horizontal movement
  }
}
