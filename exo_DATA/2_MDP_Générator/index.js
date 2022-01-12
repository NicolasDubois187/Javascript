const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "&é'-èè_çà()=$^ù!:;?,./";

// console.log(dataUpperCase);

// Créer une fonction pour générer le mot de passe

// Déclencher cette fonction quand on click sur le bouton

// Dans la fonction :
//      tester si les checkbox sont "checked" => lowerCase.checked
//      Si "checked" .push les données dans un nouveau tableau qui va
//      regrouper toutes les données à inclure dans le MDP




function generatePassword() {

    let data = [];
    let password = "";

    if (lowerCase.checked) data.push(...dataLowerCase);
        // console.log(data);
    if (upperCase.checked) data.push(...dataUpperCase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length ===0) {
        alert('Veuillez sélectionner au moins 1 critère');
        return;
    }
       
    for (i = 0; i < passwordLength.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutpout.value = password;
    passwordOutpout.select();
    document.execCommand("copy");

    generate.textContent = "Copié !";
    setTimeout(() => {
        generate.textContent = "Générer un mot de passe";
    }, 3000);
}

generate.addEventListener("click", generatePassword);
