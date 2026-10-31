const steps = [
  {
    title: "Discover",
    text: "We learn how your business works, agree on the problem to solve, and give you a clear scope, timeline and cost.",
  },
  {
    title: "Design",
    text: "Wireframes and clickable prototypes you can test with your team before any code is written.",
  },
  {
    title: "Build",
    text: "Short sprints with a working demo every two weeks, so you see progress and can change course early.",
  },
  {
    title: "Launch & support",
    text: "We deploy, train your team and stay on for fixes, updates and new features.",
  },
];

// Draft copy for review.
export default function ProcessSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="bg-white p-6 sm:p-8">
          <span className="font-display text-sm font-semibold text-muted">0{i + 1}</span>
          <h3 className="mt-3 text-xl">{step.title}</h3>
          <p className="mt-2 text-[15px] text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
