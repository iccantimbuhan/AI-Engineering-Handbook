export default function Typography() {
  return (
    <section className="space-y-10">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Display
        </p>

        <h1 className="text-6xl font-bold tracking-tight text-slate-900">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Heading 1
        </p>

        <h1 className="text-5xl font-bold text-slate-900">
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Heading 2
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Heading 3
        </p>

        <h3 className="text-3xl font-semibold text-slate-900">
          The quick brown fox jumps over the lazy dog.
        </h3>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Heading 4
        </p>

        <h4 className="text-2xl font-semibold text-slate-900">
          The quick brown fox jumps over the lazy dog.
        </h4>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Body
        </p>

        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          The quick brown fox jumps over the lazy dog. This is our default body
          text used throughout the AI Engineering Handbook.
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Small
        </p>

        <p className="text-sm text-slate-500">
          Small supporting text used for captions, helper text and metadata.
        </p>
      </div>
    </section>
  );
}