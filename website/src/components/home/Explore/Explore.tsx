import {
  Bot,
  BookOpen,
  Briefcase,
  Code2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const sections = [
  {
    title: "AI Automation",
    description:
      "Workflow automation, AI agents, APIs, voice AI, and business process automation.",
    icon: Bot,
  },
  {
    title: "Software Engineering",
    description:
      "Modern web applications, frontend architecture, APIs, and developer tooling.",
    icon: Code2,
  },
  {
    title: "Projects",
    description:
      "Production-ready engineering projects with architecture, documentation, and source code.",
    icon: Briefcase,
  },
  {
    title: "Resources",
    description:
      "Guides, case studies, engineering notes, and implementation patterns.",
    icon: BookOpen,
  },
];

export default function Explore() {
  return (
    <section className="py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight">
          What I Build
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          My work focuses on building practical software that combines AI,
          automation, and modern engineering practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <section.icon className="mb-4 h-8 w-8 text-slate-800" />

              <CardTitle>{section.title}</CardTitle>

              <CardDescription>
                {section.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <span className="text-sm font-medium text-primary">
                Learn More →
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}