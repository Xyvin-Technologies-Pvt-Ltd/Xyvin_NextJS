

import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const textInvert = () => {
	// Text Invert With Scroll 
  if (typeof window !== "undefined") {
    const split = new SplitText(".tp_text_invert, .tp_text_invert_2", { type: "lines" });
    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: 'top 85%',
          end: "bottom center"
        }
      });
    });
  }


};

export default textInvert;