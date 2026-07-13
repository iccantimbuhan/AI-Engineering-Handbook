import MainLayout from "@/layouts/MainLayout";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Grid from "@/components/layout/Grid";
import Surface from "@/components/layout/Surface";

export default function HomePage() {
  return (
    <MainLayout>
      <Container>
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
              Building an Open Source AI Engineering Platform from scratch using
              React, TypeScript, Tailwind CSS, shadcn/ui, and Ollama.
            </p>
          </Stack>
        </Section>

        <Section>
          <Stack gap="md">
            <h2 className="text-3xl font-semibold">
              Layout Components
            </h2>

            <Grid columns={3}>
              <Surface>Container</Surface>
              <Surface>Section</Surface>
              <Surface>Stack</Surface>
              <Surface>Grid</Surface>
              <Surface>Surface</Surface>
              <Surface>Coming Soon...</Surface>
            </Grid>
          </Stack>
        </Section>
      </Container>
    </MainLayout>
  );
}