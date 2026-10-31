export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  // Advisors also gave testimonials. They're kept out of the homepage until you decide
  // whether to show them (and if so, labelled as advisors).
  isAdvisor?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Xyvin Tech transformed our business with their innovative solutions. Their team is professional, skilled, and truly understands our needs.",
    name: "PG Ramnath",
    role: "CEO",
    company: "GOEC",
  },
  {
    quote:
      "From strategy to execution, they transformed our manual workflows into fully automated systems using AI. Their team was proactive, skilled, and truly committed to our success. Working with them was a game-changer for our business.",
    name: "Ajith Kumar",
    role: "CEO",
    company: "Continuity Oman",
  },
  {
    quote:
      "They helped us automate several of our core business engineering processes using AI, saving us countless hours and significantly improving efficiency. Their expertise in AI-driven automation is top-notch. We're extremely happy with the results and would gladly work with them again!",
    name: "Nowshad Hameed",
    role: "CEO",
    company: "Exctel Engineering",
    isAdvisor: true,
  },
  {
    quote:
      "The best IT partner we have worked with. Their expertise in AI and modern technologies is remarkable.",
    name: "Suresh Kumar",
    role: "Founder & CEO",
    company: "Skybertech",
    isAdvisor: true,
  },
];

export const clientTestimonials = testimonials.filter((t) => !t.isAdvisor);

export default testimonials;
