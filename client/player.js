export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, "player");
    this.direction;
    this.anims = this.scene.anims;
    this.anims.create({
      key: "player-idle",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    this.anims.create({
      key: "player-right",
      frames: this.anims.generateFrameNumbers("player", { start: 24, end: 31 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "player-left",
      frames: this.anims.generateFrameNumbers("player", { start: 16, end: 23 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "player-up",
      frames: this.anims.generateFrameNumbers("player", { start: 8, end: 15 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "player-down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.cursors = scene.input.keyboard.createCursorKeys();
  }
  update() {
    let speed = 175;
    this.sprite.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.sprite.setVelocityX(-speed);
      this.sprite.anims.play("player-left", true);
      this.direction = "left";
    } else if (this.cursors.right.isDown) {
      this.sprite.setVelocityX(speed);
      this.sprite.anims.play("player-right", true);
      this.direction = "right";
    } else if (this.cursors.up.isDown) {
      this.sprite.setVelocityY(-speed);
      this.sprite.anims.play("player-up", true);
      this.direction = "up";
    } else if (this.cursors.down.isDown) {
      this.sprite.setVelocityY(speed);
      this.sprite.anims.play("player-down", true);
      this.direction = "down";
    } else {
        this.sprite.anims.play('player-idle', true)
    }
  }
}
