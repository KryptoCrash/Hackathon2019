import dialogue from "./dialouge.js";

export default class dialogueHandler {
  constructor(scene, player, map, worldLayer) {
    this.scene = scene;
    this.time = 0;
    this.player = player;
    this.map = map;
    this.worldLayer = worldLayer;
    this.result;
  }

  update() {
    //start Time Counter
    this.time++;

    //check if player is next to game object while trying to check it
    this.checkObject("book");
    this.checkObject("bed");
  }
  checkObject(obj) {
    var objs = this.worldLayer.filterTiles(
      tile => tile.properties.checkObject == obj
    );
    if (this.player.direction == "left") {
      let playerCoor = this.worldLayer.worldToTileXY(
        this.player.sprite.x,
        this.player.sprite.y
      );

      objs.forEach(tile => {
        if (playerCoor.y == tile.y && playerCoor.x - 1 == tile.x) {
          dialogue("Do you want to read?", this.scene, this.result);

          this.scene.input.keyboard.on("keydown_B", () => {
            this.scene.cameras.main.fade();
          });
        }
      });
    }

    if (this.player.direction == "right") {
      let playerCoor = this.worldLayer.worldToTileXY(
        this.player.sprite.x,
        this.player.sprite.y
      );
      objs.forEach(tile => {
        if (playerCoor.y == tile.y && playerCoor.x + 1 == tile.x) {
          dialogue("Do you want to read?", this.scene, this.result);
          this.scene.input.keyboard.on("keydown_B", () => {
            this.scene.cameras.main.fade();
          });
        }
      });
    }
    if (this.player.direction == "up") {
      let playerCoor = this.worldLayer.worldToTileXY(
        this.player.sprite.x,
        this.player.sprite.y
      );
      objs.forEach(tile => {
        if (playerCoor.x == tile.x && playerCoor.y - 1 == tile.y) {
          dialogue("Do you want to read?", this.scene, this.result);
          this.scene.input.keyboard.on("keydown_B", () => {
            this.scene.cameras.main.fade();
          });
        }
      });
    }
    if (this.player.direction == "down") {
      let playerCoor = this.worldLayer.worldToTileXY(
        this.player.sprite.x,
        this.player.sprite.y
      );
      objs.forEach(tile => {
        if (playerCoor.x == tile.x && playerCoor.y + 1 == tile.y) {
          dialogue("Do you want to read?", this.scene, this.result);
          this.scene.input.keyboard.on("keydown_B", () => {
            this.scene.cameras.main.fade();
          });
        }
      });
    }
    return;
  }
}
