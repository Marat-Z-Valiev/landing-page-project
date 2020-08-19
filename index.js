const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-menu");
const mobileMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");

// Tabs
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

// const tab1 = document.querySelector(".tab1");
// const tab2 = document.querySelector(".tab2");
// const tab3 = document.querySelector(".tab3");
// const simpleBookingTab = document.getElementById("simple-bookmarking");
// const speedySearchTab = document.getElementById("speedy-searching");
// const easySharingTab = document.getElementById("easy-sharing");

// tab1.addEventListener("click", () => {
// 	tab1.classList.add("active");
// 	tab2.classList.remove("active");
// 	tab3.classList.remove("active");
// 	simpleBookingTab.classList.toggle("show");
// 	speedySearchTab.classList.toggle("show");
// 	easySharingTab.classList.toggle("show");
// });

// tab2.addEventListener("click", () => {
// 	tab2.classList.add("active");
// 	tab1.classList.remove("active");
// 	tab3.classList.remove("active");
// 	simpleBookingTab.classList.toggle("show");
// 	speedySearchTab.classList.toggle("show");
// 	easySharingTab.classList.toggle("show");
// });

// tab3.addEventListener("click", () => {
// 	tab3.classList.add("active");
// 	tab1.classList.remove("active");
// 	tab3.classList.remove("active");
// 	simpleBookingTab.classList.toggle("show");
// 	speedySearchTab.classList.toggle("show");
// 	easySharingTab.classList.toggle("show");
// });

hamburgerButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});

closeButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	logo.classList.toggle("hide");
});
