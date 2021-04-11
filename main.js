let welcomeSection = document.getElementById("welcome");
let mainContentSection = document.getElementById("mainContent");
let webSites = document.getElementById("webSites");

let sectionsToAnimate = document.querySelectorAll(".animating");

welcomeSection.addEventListener("click", (e) => {
	welcomeSection.classList.add("hide");
	mainContentSection.classList.replace("hide", "showing2");
	webSites.classList.replace("hide", "showing2");
});

window.addEventListener("scroll", () => {
	let scrollTop = document.documentElement.scrollTop;
	for (let i = 0; i < sectionsToAnimate.length; i++) {
		let heigthAnimated = sectionsToAnimate[i].offsetTop;
		if (heigthAnimated- 200 < scrollTop) {
			sectionsToAnimate[i].style.opacity = 1;
		}
	}
});
