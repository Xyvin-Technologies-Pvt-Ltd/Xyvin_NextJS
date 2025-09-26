

export function scrollTextAnimation () {
  if(typeof window !== "undefined") {
   	/* services animation start */
	gsap.set('.tp-services-bg-text', {
		x: window.innerWidth / 4
	});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.tp-services-bg-text-animation',
			start: '0% 0%',
			end: 'bottom -10%',
			scrub: true,
			invalidateOnRefresh: true
		}
	})
		.to('.tp-services-bg-text', {
			x: () => -window.innerWidth / 10
		});

	/* portfolio animation start */
	gsap.set('.tp-portfolio-bg-text', {
		x: '25%'
	});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.tp-portfolio-bg-text-animation',
			start: '-500 0%',
			end: 'bottom -10%',
			scrub: true,
			invalidateOnRefresh: true
		}
	})
		.to('.tp-portfolio-bg-text', {
			x: '-80%'
		});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.portfolio-list-scroll-text-animation',
			start: '-500 0%',
			end: 'bottom -10%',
			scrub: true,
			invalidateOnRefresh: true
		}
	})
		.to('.portfolio-list-scroll-text', {
			x: '-80%'
		});
  }
}