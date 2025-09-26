import { gsap } from "gsap";

const PortfolioPanel = () => {
	let otherSections = document.querySelectorAll('.portfolio-panel');
	const pin_section = document.querySelector('.tp-personal-info-pin-section');
	let tl = gsap.timeline();
	otherSections.forEach((section, index) => {

		gsap.set(otherSections, {
			scale: 1
		});

		tl.to(section, {
			scale: .8,
			scrollTrigger: {
				trigger: section,
				pin: section,
				scrub: 1,
				start: 'top 10%',
				end: "bottom 60%",
				endTrigger: '.tp-project-3__area',
				pinSpacing: false,
				markers: false,
			},
		})
	})

	if (pin_section) {
		let mm = gsap.matchMedia();
		mm.add("(min-width:991px)", () => {
			gsap.to('.tp-personal-info-pin', {
				opacity: 1,
				scrollTrigger: {
					trigger: '.tp-personal-info-pin-section',
					end: "bottom bottom",
					scrub: 1,
					start: 'top 10%',
					pin: '.tp-personal-info-pin',
					markers: false
				}
			})
		})
	}

};

export default PortfolioPanel;


