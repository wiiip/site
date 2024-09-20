import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

export default function Home() {
  return (
    <main>
      <h1>
        <AnimatedText text="WIP Design"></AnimatedText>
      </h1>
      <p>
        <AnimatedText
          text="A collection of design tools and resources."
          delay={0.5}
        ></AnimatedText>
      </p>
    </main>
  );
}

const Item = ({ children, cols = 1, rows = 1 }: ItemProps) => {
  return <div>{children}</div>;
};
