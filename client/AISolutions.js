import dialogue from "./dialouge.js";
import sleeper from './sleeper.js'
import washer from './washer.js'
import reader from './reader.js'
import eater from './eater.js'

export default class dialogueHandler {
  constructor(scene, player, map, worldLayer) {
    this.scene = scene;
    this.time = 0;
    this.player = player;
    this.map = map;
    this.worldLayer = worldLayer;
    this.result;
    this.dialogueLine;
  }
  
  update() {
    //start Time Counter
    this.time++;
    this.result = dialogue(
      this.player.exp + " XP",
      this.scene,
      false,
      this.scene.scale.width / 3.7,
      this.scene.scale.height / 3.7
    );
    //check if player is next to game object while trying to check it

    this.checkObject("book", reader);
    this.checkObject("bed", sleeper);
    this.checkObject("wash", washer);
    this.checkObject("eat", eater);
  }
  
  checkObject(obj, callback) {
    var newExp = 0;
    if (obj == "book") {
      this.dialogueLine = "Do you want to study?";
      newExp = 100;
    } else if (obj == "bed") {
      this.dialogueLine = "Do you want to sleep?";
      newExp = 10;
    } else if (obj == "wash") {
      this.dialogueLine = "Do you want to wash up?";
      newExp = 40;
    } else if (obj == "eat") {
      this.dialogueLine = "Do you want to eat?";
      newExp = 30;
    } else {
      newExp = 0;
    }
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
          this.result = dialogue(
            this.dialogueLine,
            this.scene,
            this.result,
            this.scene.scale.width / 2.5,
            (this.scene.scale.height * 5.8) / 9
          );

          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on("keyup_Y", () => {
              callback(this.scene, this.result)
              this.player.exp += newExp;
              return;
            });
          });
        } else if(this.result) {
          console.log(this.result)
          this.result.destroy()
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
          this.result = dialogue(
            this.dialogueLine,
            this.scene,
            this.result,
            this.scene.scale.width / 2.5,
            (this.scene.scale.height * 5.8) / 9
          );
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on("keyup_Y", () => {
              callback(this.scene, this.result)
              this.player.exp += newExp;
              return;
            });
          });
        } else if(this.result) {
          console.log(this.result)
          this.result.destroy()
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
          this.result = dialogue(
            this.dialogueLine,
            this.scene,
            this.result,
            this.scene.scale.width / 2.5,
            (this.scene.scale.height * 5.8) / 9
          );
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on("keyup_Y", () => {
              callback(this.scene, this.result)
              this.player.exp += newExp;
              return;
            });
          });
        } else if(this.result) {
          console.log(this.result)
          this.result.destroy()
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
          this.result = dialogue(
            this.dialogueLine,
            this.scene,
            this.result,
            this.scene.scale.width / 2.5,
            (this.scene.scale.height * 5.8) / 9
          );
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on("keyup_Y", () => {
              callback(this.scene, this.result)
              this.player.exp += newExp;
              return;
            });
          });
        } else if(this.result) {
          console.log(this.result)
          this.result.destroy()
        }
      });
    }
    return;
  }

}
