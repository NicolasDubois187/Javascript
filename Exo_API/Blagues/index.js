function getQuote() {

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((joke) => {
        console.log(joke.data.content);
        const joke1 = joke.data.content;

        document.body.innerHTML = `
        <div class="app">
        <h3>${joke.data.content.text_head}</h3>
        <h4>${joke1.text !=="" ? joke1.text : joke1.text_hidden}</h4>
    
        <em>${joke.data.author.pseudo}</em>
        </div>
        `;
       const app = document.querySelector(".app");
       app.addEventListener("click", getQuote);
    }); 

}
getQuote();
