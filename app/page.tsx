import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { Services } from '@/components/Services';
import { WhoWeWorkWith } from '@/components/WhoWeWorkWith';
import { Process } from '@/components/Process';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <WhoWeWorkWith />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
