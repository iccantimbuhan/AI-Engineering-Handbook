const colors = [
  {
    name: "Primary",
    className: "bg-indigo-600",
    hex: "#4F46E5",
  },
  {
    name: "Slate 900",
    className: "bg-slate-900",
    hex: "#0F172A",
  },
  {
    name: "Slate 600",
    className: "bg-slate-600",
    hex: "#475569",
  },
  {
    name: "Slate 200",
    className: "bg-slate-200",
    hex: "#E2E8F0",
  },
  {
    name: "Emerald",
    className: "bg-emerald-500",
    hex: "#10B981",
  },
  {
    name: "Amber",
    className: "bg-amber-500",
    hex: "#F59E0B",
  },
  {
    name: "Rose",
    className: "bg-rose-500",
    hex: "#F43F5E",
  },
];

export default function Colors() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Color Palette
        </h2>

        <p className="mt-2 text-slate-600">
          Core colors used throughout the AI Engineering Handbook.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <div className={`h-28 ${color.className}`} />

            <div className="space-y-1 p-4">
              <h3 className="font-semibold">{color.name}</h3>

              <p className="text-sm text-slate-500">
                {color.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}