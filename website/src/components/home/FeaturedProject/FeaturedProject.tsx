import Button from "@/components/ui/Button";
import Surface from "@/components/layout/Surface";

export default function FeaturedProject() {
  return (
    <section className="py-24">
      <Surface>
        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Project
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            AI Engineering Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A production-ready platform showcasing AI automation,
            engineering resources, reusable UI architecture,
            markdown-driven documentation, and modern React
            engineering practices.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>
              View Project
            </Button>

            <Button variant="outline">
              View GitHub
            </Button>
          </div>

        </div>
      </Surface>
    </section>
  );
}