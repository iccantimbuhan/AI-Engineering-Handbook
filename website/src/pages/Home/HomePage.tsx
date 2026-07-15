import AppLayout from "@/layouts/AppLayout";
import FeaturedProject from "@/components/home/FeaturedProject";
import Container from "@/components/layout/Container";

import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import Explore from "@/components/home/Explore";

export default function HomePage() {
  return (
        <AppLayout>

      <Container>

        <Hero />

        <FeaturedProject />

        <Explore />

        <TechStack />

      </Container>

    </AppLayout>
  );
}