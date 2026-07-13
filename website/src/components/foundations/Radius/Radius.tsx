const radius = [
  "rounded-none",
  "rounded-sm",
  "rounded",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-full",
];

export default function Radius() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Border Radius</h2>

        <p className="mt-2 text-slate-600">
          Corner radius used across the design system.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {radius.map((item) => (
          <div
            key={item}
            className="space-y-3"
          >
            <div
              className={`h-24 border border-slate-200 bg-indigo-600 ${item}`}
            />

            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}