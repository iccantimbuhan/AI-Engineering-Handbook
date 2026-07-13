const spacing = [
  { name: "4", value: "4px", className: "w-1 h-1" },
  { name: "8", value: "8px", className: "w-2 h-2" },
  { name: "12", value: "12px", className: "w-3 h-3" },
  { name: "16", value: "16px", className: "w-4 h-4" },
  { name: "24", value: "24px", className: "w-6 h-6" },
  { name: "32", value: "32px", className: "w-8 h-8" },
  { name: "48", value: "48px", className: "w-12 h-12" },
  { name: "64", value: "64px", className: "w-16 h-16" },
];

export default function Spacing() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Spacing</h2>

        <p className="mt-2 text-slate-600">
          Spacing scale used across the application.
        </p>
      </div>

      <div className="space-y-6">
        {spacing.map((space) => (
          <div
            key={space.name}
            className="flex items-center gap-6"
          >
            <div className="w-12 font-semibold">{space.value}</div>

            <div
              className={`${space.className} rounded bg-indigo-600`}
            />

            <span className="text-slate-500">
              Tailwind spacing scale
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}