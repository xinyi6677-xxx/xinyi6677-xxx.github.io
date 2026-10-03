const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.style.padding = "18px 7%";
  } else {
    navbar.style.padding = "28px 7%";
  }

});