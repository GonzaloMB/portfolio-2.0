import { FloatingNavUI } from "./FloatingNavUI";
import { WavyBackgroundUI } from "./WavyBackgroundUI";
import { MacbookScrollUI } from "./MacbookScrollUI";
import { HeroParallaxUI } from "./HeroParallaxUI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNavUI />
      <WavyBackgroundUI />
      <MacbookScrollUI />
      <HeroParallaxUI />
    </main>
  );
}
