window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    navbar.style.height = "50px";

  if (window.scrollY > 200) {
    
    imgImprovise.style.opacity = 100;
    
  }

  if (window.scrollY > 700) {
    
    popup.style.right = "500px";
    popup.style.opacity = 100;
    
  }

});

closeBtn.addEventListener("click", () => {
    popup.style.right = "-500px";
  });
  

