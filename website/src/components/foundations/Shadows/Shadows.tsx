const shadows = [
  "shadow-sm",
  "shadow",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
];

export default function Shadows() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Shadows</h2>

        <p className="mt-2 text-slate-600">
          Elevation levels used throughout the interface.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shadows.map((shadow) => (
          <div
            key={shadow}
            className={`rounded-2xl border border-slate-200 bg-white p-8 ${shadow}`}
          >
            <h3 className="font-semibold">{shadow}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}