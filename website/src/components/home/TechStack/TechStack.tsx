const technologies = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Docker",
  "PostgreSQL",
  "OpenAI",
  "Claude",
  "Ollama",
  "n8n",
  "GitHub",
  "REST APIs",
];

export default function TechStack() {
  return (
    <section className="pb-24">
      <div className="border-y border-slate-200 py-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Technologies I Build With
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}