export default function dialogue(str, scene, lastResult) {
  if(lastResult){
  lastResult.destroy()
  }
  let text = scene.add
    .text(scene.scale.width/3, (scene.scale.height*6)/9, str, {
      font: "18px Roboto Condensed",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000"
    })
    .setScrollFactor(0)
}
