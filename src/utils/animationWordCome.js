import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationWordCome = (wordAnim, staggerTime = 0.05) => {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      let word_come = wordAnim;
      let split_word_come = new SplitText(word_come, {
        type: "chars words",
        position: "absolute",
      });
      gsap.from(split_word_come.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: staggerTime,
      });
    });
    return () => tHero.revert();
  }
};

export default animationWordCome;
