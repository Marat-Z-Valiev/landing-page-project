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
