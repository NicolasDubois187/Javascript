// CLICK EVENT
const title = document.querySelector(".title");

title.addEventListener("click", () => {
  title.classList.toggle("h1-js");
  // Le toggle teste si la classe est présente, si elle l'est il supprime, sinon il l'ajoute.
});

btn1.addEventListener("click", () => {
  title.style.fontFamily = "Segoe UI";
});

btn2.addEventListener("click", () => {
  img.style.animation = "shake 1s";
  img.style.filter = "blur(2px)";
});

const popup = document.querySelector(".popup");

btn3.addEventListener("click", () => {
  popup.style.right = "10px";
});

closeBtn.addEventListener("click", () => {
  popup.style.right = "-260px";
});

//----------------
// MOUSEMOVE EVENT
//----------------

window.addEventListener("mousemove", (e) => {
  img.style.left = e.x + "px";
  img.style.top = e.y + "px";
});
