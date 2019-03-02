import dialogue from "./dialouge.js";

export default class dialogueHandler {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;
  }

  checkResult = (str) => {
    if(str == 'bed') {
      this.scene.cameras.main.fade();
    }
  }

  async update() {
    this.time++;
    var result;
    if (this.time > 10) {
      result = await dialogue(
        "Do you want to go to bed or keep doing your homework?",
        this.scene,
        checkResult()
      );
      await console.log(result)
    }
  }
}
