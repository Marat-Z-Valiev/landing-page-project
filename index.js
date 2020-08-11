const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-menu");
const mobileMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");

hamburgerButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});

closeButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});
