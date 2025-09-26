
import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationTitleChar = () => {
  const char = document.querySelector('.tp-char-animation');
  if (typeof window !== "undefined") {
    if (char) {
      let char_come = gsap.utils.toArray(".tp-char-animation");
      char_come.forEach(splitTextLine => {
        const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
        });
  
        const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
        gsap.set(splitTextLine, { perspective: 300});
        itemSplitted.split({ type: "chars, words"})
        tl.from(itemSplitted.chars, 
          {
            duration: 1,
            delay: 0.5,
            x: 100,
            autoAlpha: 0,
            stagger: 0.05 
          });
      });	
    }
  }


};

export default animationTitleChar;