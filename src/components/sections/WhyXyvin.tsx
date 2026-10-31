const reasons = [
  {
    title: "One team, start to finish",
    text: "Design, development, testing, launch and support under one roof. No hand-offs between agencies, and one team accountable for the result.",
  },
  {
    title: "Progress you can see",
    text: "A working demo every two weeks, a shared project board, and direct access to the people building your product.",
  },
  {
    title: "Built to last, and yours to keep",
    text: "Clean, documented code on mainstream technology. You own everything we build, so you're never locked in.",
  },
  {
    title: "Works across time zones",
    text: "From Kochi we share the working day with the Middle East and Asia-Pacific and overlap with European mornings. For the Americas, we schedule calls around you.",
  },
];

export default function WhyXyvin() {
  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {reasons.map((r) => (
        <div key={r.title} className="border-t border-line pt-5">
          <h3 className="text-xl">{r.title}</h3>
          <p className="mt-2 text-muted">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
