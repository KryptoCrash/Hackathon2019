export default function dialogue(str, scene) {
  scene.add
    .text(16, 16, str, {
      font: "18px monospace",
      fill: "#eeeeee",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000"
    })
    .setScrollFactor(0);

    scene.input.keyboard.on("keydown_B", () => {
      console.log("test");
      return "bed";
    });
}
