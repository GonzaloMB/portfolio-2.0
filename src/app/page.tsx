import { FloatingNavUI } from "./FloatingNavUI";
import { WavyBackgroundUI } from "./WavyBackgroundUI";
import { MacbookScrollUI } from "./MacbookScrollUI";
import { HeroParallaxUI } from "./HeroParallaxUI";
import { HeroScrollUI } from "./HeroScrollUI";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <FloatingNavUI />
      <WavyBackgroundUI />
      <MacbookScrollUI />
      <HeroScrollUI />
      <HeroParallaxUI />
    </main>
  );
}
