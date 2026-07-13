import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <Section>
          <Stack gap="lg">
            <h1 className="text-5xl font-bold">
              AI Engineering Handbook
            </h1>

            <p className="max-w-2xl text-lg text-slate-600">
              Learn Open Source AI from first principles.
            </p>

            <button className="w-fit rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Start Learning
            </button>
          </Stack>
        </Section>
      </Container>
    </main>
  );
}

export default App;