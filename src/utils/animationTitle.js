
import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationTitle = () => {
  const title = document.querySelector('.tp_title_anim');
  const text = document.querySelector('.tp_text_anim p');
  if (typeof window !== "undefined") {
    if (title) {
      let splitTitleLines = gsap.utils.toArray(".tp_title_anim");
      splitTitleLines.forEach(splitTextLine => {
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
    
        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { 
        duration: 1, 
        delay: 0.3, 
        opacity: 0, 
        rotationX: -80, 
        force3D: true, 
        transformOrigin: "top center -50",
        stagger: 0.1 
        });
      });
    }
  
  
    if (text) {
      let splitTextLines = gsap.utils.toArray(".tp_text_anim p");
  
      splitTextLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        duration: 2,
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
        }
      });
  
      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { 
        duration: 1, 
        delay: 0.7, 
        opacity: 0, 
        rotationX: -80, 
        force3D: true, 
        transformOrigin: "top center -50",
         stagger: 0.1 });
      });
    }

    
  }
};

export default animationTitle;