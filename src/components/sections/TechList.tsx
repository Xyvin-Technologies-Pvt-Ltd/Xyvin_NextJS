const groups = [
  { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Python", "Java", "PHP", "C#", "Go"] },
  { name: "Mobile", items: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"] },
  { name: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Elasticsearch"] },
  { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { name: "AI", items: ["OpenAI and Claude APIs", "TensorFlow", "PyTorch", "scikit-learn", "LangChain"] },
];

// Plain, grouped list of the technologies we use (replaces the old logo grid).
export default function TechList() {
  return (
    <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.name} className="border-t border-line pt-4">
          <dt className="font-display font-semibold">{group.name}</dt>
          <dd className="mt-2 text-[15px] text-muted">{group.items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}
