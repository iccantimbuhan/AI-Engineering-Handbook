import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <Section>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            AI Engineering Handbook
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Learn Open Source AI from first principles.
          </p>
        </Section>

        <Section className="border-t border-slate-200">
          <h2 className="text-3xl font-semibold">
            Learning Roadmap
          </h2>

          <p className="mt-4 text-slate-600">
            AI Fundamentals → Open Source Models → RAG → AI Applications →
            Deployment
          </p>
        </Section>
      </Container>
    </main>
  );
}

export default App;