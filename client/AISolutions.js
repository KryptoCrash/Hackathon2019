export default class dialogueHandler {
    constructor(scene) {
        this.scene = scene;
        this.time = 0;
    }
    update(){
        this.time++
        if(time > 1030) {
            var result = dialogue("Do you want to go to bed or keep doing your homework?");
            if (result == 'bed') {
                this.scene.cameras.main.fade()
            }
        }
    }
    dialogue(str) {
        return 'bed'
    }
}