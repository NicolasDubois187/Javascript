// www.themealdb.com/api/json/v1/1/search.php?s=tomato

// Tester si le lien renvoie des données dans le navigateur

// Créer une fonction pour "fetcher" les données, passer ces données dans une variable. 

// Affiche les données (12max) via une fonction (map) :
// Recette, origine, image.

let recetteData = [];

async function fetchRecette() {
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search.value)
        .then((res) => res.json())
        .then((data) => (recetteData = data.meals));

    console.log(recetteData);   
    recetteDisplay();
}
function recetteDisplay() {
    if (recetteData === null) {
        mealContainer.innerHTML = "<h2>Aucun résultat</h2>";
        return;
    }
    mealContainer.innerHTML = recetteData
    .slice(0, 12)
    .map((meal) => {

    return `    
        <div class="card">
        <h2>${meal.strMeal}</h2>
        <h4>${meal.strArea}</h4>
        <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}"></img>
        </div>


}) `)
.join("");
}
// search.addEventListener("input", () => {
//     fetchRecette();
// })
Form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchRecette();
})




// window.addEventListener("load", fetchRecette);
