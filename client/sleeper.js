export default function sleeper(scene, result) {
  console.log(result);
  scene.cameras.main.fadeOut(3000);
  if(result){
    result.destroy()
  }
  setTimeout(() => {
    scene.cameras.main.fadeIn(2000);
  }, 3000);
}
