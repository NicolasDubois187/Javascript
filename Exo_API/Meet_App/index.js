// https://randomuser.me/api/?results=48

// 1 - tester le lien

// 2 - "fetcher" les données et les donner à une variable

// 3 - Créer une fonction d'affichage qui va "maper" la variable qui renferme les données : photos, prénom+nom, ville+date de naissance, membre depuis.

// 4 - Faire le css, rendre la taille responsive.

// BONUS
// 1 - Convertir la date de naissance au bon format

// 2 - Calculer depuis combien de temps l'utilisateur est membre

// 3 - Créer 2 boutons pour trier par age les utilisateurs (sort())

// 4 - Créer 2 checkbox pour filtrer par genre (filter())

let meetData = [];

async function fetchMeet() {
    await fetch("https://randomuser.me/api/?results=48")
    .then((res) => res.json())
    .then((data) => (meetData = data.results));
    
    console.log(meetData);   
    meetDisplay();
}

function meetDisplay() {
    
    meetContainer.innerHTML = meetData
    // .filter((country) => country.population > 60000000)
    // .sort((a, b) => b.population - a.population)
    // .slice(0, 10)
    .map(
        (member) =>
        `
        <div class="card" style="background: ${member.gender === "male" ? "skyblue" : "pink"}">
        <img src=${member.picture.medium} alt="photo ${member.picture.medium}"></img>
        <h2>${member.name.first} ${member.name.last}</h2>
        <p>${member.location.city},  ${member.dob.date}</p>
        <em>Membre depuis : ${member.registered.date}</em>

        </div>
        
        `)
        .join("");
        
}
    
fetchMeet();

