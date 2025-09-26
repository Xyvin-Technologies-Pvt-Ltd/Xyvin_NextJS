
import { gsap } from 'gsap';

const linesAnimation = () => {
 //home 1 line styles start

	// for brand
	let allHorizontalLine = document.querySelectorAll('.tp-brand-border');

	allHorizontalLine.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: line,
				start: 'top 80%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});

	let allVerticalLine = document.querySelectorAll('.tp-brand-inner-border');

	allVerticalLine.forEach((line, index) => {
		gsap.set(line, {
			height: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: line,
				start: 'top 80%',
				end: "bottom 80%",
			},
			height: "100%"
		});
	});

	// for services
	let allServicesHorizontalBorder = document.querySelectorAll('.tp-services-inner-border');

	allServicesHorizontalBorder.forEach((line, index) => {
		gsap.set(line, {
			height: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: line,
				start: 'top 60%',
				end: "bottom 80%",
			},
			height: "100%"
		});
	});

	// services accordion
	let allServicesAccordion = document.querySelectorAll('.tp-services-accordion-border');

	allServicesAccordion.forEach((line, index) => {
		gsap.set(line, {
			height: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: line,
				start: 'top 60%',
				end: "bottom 80%",
			},
			height: "100%"
		});
	});


	// services accordion
	let allServicesAccordionItem = document.querySelectorAll('.accordion-item-border');

	allServicesAccordionItem.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-services-accordion',
				start: 'top 40%',
				end: "bottom 80%",
			},
			width: "100%"
		});
	});


	// services accordion
	let aboutLine = document.querySelectorAll('.tp-about-inner-border');

	aboutLine.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-about-inner',
				start: 'top 40%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});


	// services accordion
	let awardtLine_2 = document.querySelectorAll('.tp-award-bottom-border');

	awardtLine_2.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-award-bottom-border',
				start: 'top 90%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});


	// services accordion
	let award_tLine_3 = document.querySelectorAll('.tp-award-inner-border');

	award_tLine_3.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-award-inner-border',
				start: 'top 90%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});

	// services accordion
	let testi_Line_1 = document.querySelectorAll('.tp-testimonial-user-border');

	testi_Line_1.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-testimonial-user-border',
				start: 'top 90%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});

	// services accordion
	let footer_Line_1 = document.querySelectorAll('.tp-footer-anim-border');

	footer_Line_1.forEach((line, index) => {
		gsap.set(line, {
			width: 0
		});
		gsap.to(line, {
			scrollTrigger: {
				trigger: '.tp-footer-anim-border',
				start: 'top 90%',
				end: "bottom 80%",
				markers: false,
			},
			width: "100%"
		});
	});


  
};

export default linesAnimation;