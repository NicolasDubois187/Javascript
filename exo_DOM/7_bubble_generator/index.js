function bubbleMaker() {
    const bubble = document.createElement("span");
    document.body.appendChild(bubble);

    let size = Math.random() * 200 + 50 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 80 + 60 + "%";
    bubble.style.left = Math.random() * 100 + "%";
}

bubbleMaker();
