import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationCharCome = (charAnim, staggerTime = 0.05) => {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      let char_come = charAnim;

      let split_char = new SplitText(char_come, { type: "chars, words" });
      gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: staggerTime,
      });
    });
    return () => tHero.revert();
  }
};

export default animationCharCome;


