import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

export default function Home() {
  return (
    <main>
      <p>
        <AnimatedText text="✎"></AnimatedText>
      </p>
      <h1>
        <AnimatedText text="WIP Design"></AnimatedText>
      </h1>
      <p>
        A collection of design tools and resources created by{" "}
        <a href="https://bridger.to/x">Bridger Tower</a>.
      </p>
    </main>
  );
}
