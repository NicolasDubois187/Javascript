let totalSeconds;
let interval;

function countdown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    countdownDisplay.textContent = `${minutes} : ${
        seconds < 10 ? "0" + seconds : seconds
    }`;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        countdownDisplay.textContent = "c'est terminé !";
        clearInterval(interval);
    }
    
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isNaN(choice.value)) {
        alert("Veuillez entrer un numéro");
    } else {
        
    }

    totalSeconds = choice.value * 60;
    choice.value = "";
    interval = setInterval(countdown, 1000);
})
