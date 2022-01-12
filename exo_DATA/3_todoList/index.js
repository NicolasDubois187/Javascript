// Créer une app avec h1, form+input, ul

// Créer un évènement à la validation du formulaire (le form se valide en appuyant sur entrée).

// pour envoyer le texte saisi dans l'ul (ul.innerHTML += `<li>${contenudelinput}</li>`)

// Supprimer les todos terminés en cliquant dessus

// Stocker la liste à chaque fois qu'elle évolue, à stocker : ul.innerHTML

//  Récupérer la liste lorsque l'on lance l'app

const form = document.querySelector("form");

(() => {
    let storageContent = window.localStorage.todoList;
    
    if (!storageContent) {
        list.innerHTML = "<li>cliquez sur un todo pour le supprimer</li>";
    } else {
        list.innerHTML = storageContent;
    }
})();

function storage() {
    window.localStorage.todoList = list.innerHTML;
}

form.addEventListener("submit", (e) => {
  // Evite de recharger la page à la validation
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";

  storage();
})

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")) {
        e.target.remove();
    } else {

        e.target.classList.add("checked");
    }
storage();
})

