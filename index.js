const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-menu");
const mobileMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");

// Tabs
const tabsContainer = document.querySelector(".tabs");
const tabs = document.querySelectorAll(".tab");
const tabsContentContainer = document.querySelector(".features-section");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const tabNumber = tab.dataset.forTab;
		const tabToActivate = tabsContentContainer.querySelector(
			`.tab-content[data-tab="${tabNumber}"]`
		);

		tabs.forEach((tab) => {
			tab.classList.remove("tab-active");
		});

		tabsContentContainer
			.querySelectorAll(".tab-content")
			.forEach((tabContent) => {
				tabContent.classList.remove("tabs-content-active");
			});

		tab.classList.add("tab-active");
		tabToActivate.classList.add("tabs-content-active");
	});
});

// Select first tab
tabsContainer.querySelector(".tab").click();

hamburgerButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});

closeButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});

// FAQ section
const questions = document.querySelectorAll(".question-text");
const questionsContainer = document.querySelector(".questions");
const arrows = document.querySelectorAll(".answer");

questions.forEach((question) => {
	question.addEventListener("click", () => {
		const questionNumber = question.dataset.question;
		const answerToShow = questionsContainer.querySelector(
			`.answer[data-answer="${questionNumber}"]`
		);

		question.querySelector(".arrow").classList.toggle("rotate");

		answerToShow.classList.toggle("open-question");
	});
});

// Email validation
const input = document.getElementById("email-input");
const submitButton = document.querySelector(".submit");
const errorIcon = document.querySelector(".error-icon");
const successMessage = document.querySelector(".success");
const errorMessage = document.querySelector(".error");

input.addEventListener("focus", () => {
	input.placeholder = "";
});

input.addEventListener("focusout", () => {
	input.placeholder = "Enter you email address";
});

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

submitButton.addEventListener("click", () => {
	let value = input.value;
	if (validateEmail(value)) {
		successMessage.style.display = "flex";
		errorMessage.style.display = "none";
		errorIcon.style.display = "none";
		input.classList.remove("red-border");
		input.value = "";
	} else {
		errorMessage.style.display = "flex";
		errorIcon.style.display = "block";
		successMessage.style.display = "none";
		input.classList.add("red-border");
	}
});
