import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Grid from "@/components/layout/Grid";
import Surface from "@/components/layout/Surface";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        {/* Hero */}
        <Section>
          <Stack gap="lg">
            <div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                Design System v1
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              AI Engineering Handbook
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Building an Open Source AI Engineering Platform from scratch
              using React, TypeScript, Tailwind CSS, shadcn/ui, and Ollama.
            </p>
          </Stack>
        </Section>

        {/* Layout Components Showcase */}
        <Section>
          <Stack gap="md">
            <h2 className="text-3xl font-semibold text-slate-900">
              Layout Components
            </h2>

            <p className="text-slate-600">
              These are the foundation components used throughout the platform.
            </p>

            <Grid columns={3}>
              <Surface>
                <h3 className="mb-2 text-xl font-semibold">Container</h3>
                <p className="text-slate-600">
                  Centers content with a consistent maximum width.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 text-xl font-semibold">Section</h3>
                <p className="text-slate-600">
                  Provides consistent vertical spacing between sections.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 text-xl font-semibold">Stack</h3>
                <p className="text-slate-600">
                  Vertically stacks content with configurable spacing.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 text-xl font-semibold">Grid</h3>
                <p className="text-slate-600">
                  Responsive grid layout for cards and content.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 text-xl font-semibold">Surface</h3>
                <p className="text-slate-600">
                  Standard card container with border, radius, and shadow.
                </p>
              </Surface>

              <Surface className="flex items-center justify-center border-dashed">
                <span className="text-slate-400">
                  More components coming soon...
                </span>
              </Surface>
            </Grid>
          </Stack>
        </Section>
      </Container>
    </main>
  );
}

export default App;