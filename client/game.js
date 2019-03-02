import Player from "./player.js";
import dialogueHandler from "./AISolutions.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.cursors;
    this.dH;
  }
  preload() {
    this.load.image("tiles", "./client/assets/house_inside.png");
    this.load.tilemapTiledJSON("map", "./client/assets/RpgMap.json");
    this.load.image("player", "./client/assets/player.png");
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

    this.player = new Player(this, spawnPoint.x, spawnPoint.y);
    console.log(this.player.sprite);

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const belowLayer = map.createStaticLayer("belowPlayer", tileset, 0, 0);
    this.player = new Player(this, spawnPoint.x, spawnPoint.y);
    const worldLayer = map.createStaticLayer("worldLayer", tileset, 0, 0);
    worldLayer.setCollisionByProperty({ collides: true });
    const aboveLayer = map.createStaticLayer("abovePlayer", tileset, 0, 0);
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    worldLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;
    this.dH = new dialogueHandler(this);

    camera.startFollow(this.player.sprite);
    // Set up the arrows to control the camera
    this.physics.add.collider(this.player, worldLayer);
    this.cursors = this.input.keyboard.createCursorKeys();

    // Help text that has a "fixed" position on the screen
  }

  update(time, delta) {
    // Apply the controls to the camera each update tick of the game
    this.dH.update();
    let speed = 175;
    // Stop any previous movement from the last frame
    this.player.sprite.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.sprite.setVelocityX(-speed);
    }
    if (this.cursors.right.isDown) {
      this.player.sprite.setVelocityX(speed);
    }
    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.sprite.setVelocityY(-speed);
    }
    if (this.cursors.down.isDown) {
      this.player.sprite.setVelocityY(speed);
    }
  }
}
