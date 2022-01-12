// Structure d'une fetch
// fetch("mon-lien-api.com")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// Avant fetch => controler si le lien renvoie des données dans le navigateur

 // Afficher les données à l'ecran (citation+ auteur)
    // changer de citation quand on clic dessus
    

    function getQuote() {

        fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            document.body.innerHTML = `
            <div class="quote">
            <h3>${data.content}</h3>
            <em>${data.author}</em>
            </div>
            `;
        }); 
    }
    getQuote();
    
    document.body.addEventListener("click", getQuote);


    
        
    


