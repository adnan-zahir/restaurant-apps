const hamburgerBtn = document.querySelector(".hamburger-button");
const navbar = document.querySelector(".navbar");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navbar.classList.toggle("open");
})