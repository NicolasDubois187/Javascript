const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pseudo.value.length > 3 && pseudo.value.length < 16 && (mdp.value = cmdp.value) && cgv.checked) {
        alert("Merci votre formulaire est bien envoyé");
        pseudo.value = "";
        cvg.checked = false;
        errorPseudo.textContent = "";

    }
    if (pseudo.value.length < 3 || pseudo.value.length > 16) {
        errorPseudo.textContent = "Le Pseudo doit faire entre 3 et 16 caractère";
    } 
    if (mdp.value != cmdp.value) {
        errorCmdp.textContent = "les mots de passes ne sont pas identiques";
    }

})
