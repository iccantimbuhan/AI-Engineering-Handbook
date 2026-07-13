import MainLayout from "@/layouts/MainLayout";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Typography from "@/components/foundations/Typography";
import Colors from "@/components/foundations/Colors";
import Spacing from "@/components/foundations/Spacing";
import Shadows from "@/components/foundations/Shadows";
import Radius from "@/components/foundations/Radius";
import Icons from "@/components/foundations/Icons";

export default function DesignSystemPage() {
  return (
    <MainLayout>
      <Container>
        {/* ====================================================== */}
        {/* Page Header */}
        {/* ====================================================== */}
        <Section>
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              Foundations
            </span>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Design System
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              A living design system for the AI Engineering Handbook.
              Every color, typography style, layout primitive, and reusable
              component is documented here before being used throughout the
              platform.
            </p>
          </div>
        </Section>

        {/* ====================================================== */}
        {/* Typography */}
        {/* ====================================================== */}
        <Section>
          <Typography />
        </Section>

        {/* ====================================================== */}
        {/* Colors */}
        {/* ====================================================== */}
        <Section>
          <Colors />
        </Section>

        {/* ====================================================== */}
        {/* Spacing */}
        {/* ====================================================== */}
        <Section>
          <Spacing />
        </Section>

        {/* ====================================================== */}
        {/* Shadows */}
        {/* ====================================================== */}
        <Section>
          <Shadows />
        </Section>

        {/* ====================================================== */}
        {/* Border Radius */}
        {/* ====================================================== */}
        <Section>
          <Radius />
        </Section>

        {/* ====================================================== */}
        {/* Icons */}
        {/* ====================================================== */}
        <Section>
          <Icons />
        </Section>
      </Container>
    </MainLayout>
  );
}