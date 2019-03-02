export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'player').setScale(0.1,0.1)
    }
    update(){
        console.log(this.sprite)
    }
}