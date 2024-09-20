import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <div className="grid max-w-2xl">
        <Item>
          <h1>
            <AnimatedText text="WIP Design"></AnimatedText>
          </h1>
          <p>
            <AnimatedText
              text="A collection of design tools and resources."
              delay={0.5}
            ></AnimatedText>
          </p>
        </Item>
        <div></div>
      </div>
    </main>
  );
}

const Item = ({ children, cols = 1, rows = 1 }: ItemProps) => {
  return <div>{children}</div>;
};
