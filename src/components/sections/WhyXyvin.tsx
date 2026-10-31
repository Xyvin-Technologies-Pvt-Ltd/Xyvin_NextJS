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
    text: "We work around all time zones. Whether your team is in the Middle East, Asia-Pacific, Europe or the Americas, we find hours that work for everyone.",
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
