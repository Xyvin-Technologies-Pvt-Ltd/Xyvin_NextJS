import { gsap } from "gsap"; 

const servicesPanel = () => {

	let tl = gsap.timeline();
	const parent = document.querySelector('.tp-service-3__area')
	let servicesSpanels = document.querySelectorAll('.services-panel')

	servicesSpanels.forEach((section, index) => {
		tl.to(section, {
			scrollTrigger: {
				trigger: section,
				pin: section,
				scrub: 1,
				start: 'top 10%',
				end: "bottom 67%",
				endTrigger: '.services-panel-area',
				pinSpacing: false,
				markers: false,
			},
		})
	})

	
	if (parent) {
		let mm = gsap.matchMedia();
		mm.add("(min-width: 991px)", () => {
			gsap.to('.services-panel-pin', {
				opacity: 1,
				scrollTrigger: {
					trigger: '.tp-service-3__area',
					scrub: 1,
					start: 'top -7%',
					end: "bottom 63%",
					pin: '.services-panel-pin',
					markers: false,
				}
			})
		})
	}

};

export default servicesPanel;


