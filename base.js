// Afficher les données
// alert("test");
document.body.textContent = "Hello Javascript";
document.body.innerHTML += "<h1>Hello JS</h1>";
console.log(document.body);

//---------------------
// Les variables
var maVieilleVariable = "Coucou je suis une vieille variable";

// Const = valeur immuable
const prenom = "Julien";

// Let = peut évoluer au fil du code
let cours = "Cours JS - Blablbablabla";

console.log(cours);
cours = "Cours JS 2.0 - oekoekf";
console.log(cours);

//---------------------
// Fonction classique
function faireQuelqueChose() {
  console.log("Je fais un truc");
}
// Appel de la fonction
faireQuelqueChose();

function addition(a, b) {
  console.log(a + b);
}

addition(3, 23);

const faireUnTruc = (tache) => {
  console.log("Je fais " + tache);
};
faireUnTruc("le ménage");
faireUnTruc(cours);

// Structures des fonctions de base
function nomFonction() {
  // Algo des choses à exécuter
}
const nomDeLaFonction = () => {
  // Algo des choses à exécuter
};
