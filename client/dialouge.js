export default function dialogue(str, scene, lastResult, x, y) {
  if(lastResult){
  lastResult.destroy()
  }
  var text = scene.add
    .text(x, y, str, {
      font: "18px Roboto Condensed",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000"
    })
    .setScrollFactor(0)

}
