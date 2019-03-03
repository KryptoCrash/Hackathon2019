import dialogue from "./dialouge.js";

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
    dialogue(this.player.exp + " XP", this.scene, false, this.scene.scale.width/8, (this.scene.scale.height)/8);
    //check if player is next to game object while trying to check it
    
    
    this.checkObject("book");
    this.checkObject("bed");
    this.checkObject('wash')
    this.checkObject('eat')
  }
  checkObject(obj) {
    var newExp = 0;
    if (obj == 'book'){
      this.dialogueLine = 'Do you want to study?'
      newExp = 100
    } else if (obj == 'bed'){
      this.dialogueLine = 'Do you want to sleep?'
      newExp = 10
    } else if (obj == 'wash'){
      this.dialogueLine = 'Do you want to wash up?'
      newExp = 40
    } else if (obj == 'eat'){
      this.dialogueLine = 'Do you want to eat?'
      newExp = 30
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
          dialogue(this.dialogueLine, this.scene, this.result, this.scene.scale.width/3, (this.scene.scale.height*6)/9);

          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on('keyup_Y', () => {this.player.exp += newExp;
            return})
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
          dialogue(this.dialogueLine, this.scene, this.result, this.scene.scale.width/3, (this.scene.scale.height*6)/9);
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on('keyup_Y', () => {this.player.exp += newExp;
            return})
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
          dialogue(this.dialogueLine, this.scene, this.result, this.scene.scale.width/3, (this.scene.scale.height*6)/9);
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on('keyup_Y', () => {this.player.exp += newExp;
            return})
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
          dialogue(this.dialogueLine, this.scene, this.result, this.scene.scale.width/3, (this.scene.scale.height*6)/9);
          this.scene.input.keyboard.on("keydown_Y", () => {
            this.scene.input.keyboard.on('keyup_Y', () => {this.player.exp += newExp;
            return}); //Ends the thingy
          });
        }
      });
    }
    return;
  }
}
