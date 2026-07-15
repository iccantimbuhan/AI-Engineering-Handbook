import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-5xl">
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
          Software Engineer • AI Automation
        </span>

        <h1 className="mt-8 text-6xl font-bold tracking-tight text-slate-950">
          Building software that combines
          <br />
          automation, AI, and
          <br />
          modern engineering.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          I build production-ready applications, AI-powered workflows,
          developer tools, and automation systems that solve real business
          problems through modern software engineering.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>View Projects</Button>

          <Button variant="outline">
            Explore Resources
          </Button>
        </div>
      </div>
    </section>
  );
}