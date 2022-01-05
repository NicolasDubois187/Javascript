let haut = 0;
let gauche = 0;

window.addEventListener("keydown", (e) => {
  console.log(e.key);

  switch (e.key) {
    case "ArrowDown":
      haut = haut + 20;
      cube.style.top = haut + "px";
      break;
    case "ArrowUp":
      haut = haut - 20;
      cube.style.top = haut + "px";
      break;
    case "ArrowLeft":
      gauche = gauche - 20;
      cube.style.left = gauche + "px";
      break;
    case "ArrowRight":
      gauche = gauche + 20;
      cube.style.left = gauche + "px";
      break;
    default:
      null;
  }
});

// BONUS
// Connaitre les dimensions de la fenetre
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// Connaitre l'emplacement de l'objet dans la fenetre
// console.log(cube.offsetLeft);
// console.log(cube.offsetTop);