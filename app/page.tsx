import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <Grid>
        <Item cols={4} rows={1}>
          <h1 className="text-2xl font-bold">WIP Design</h1>
        </Item>
        <Item cols={4} rows={1}>
          <p className="text-lg">
            A collection of design tools and resources created by{" "}
            <a
              href="https://bridger.to"
              className="underline hover:text-blue-600 transition-colors"
            >
              Bridger Tower.
            </a>
          </p>
        </Item>
      </Grid>
    </main>
  );
}

const Grid = ({ children, cols = 8, rows = 8 }: GridProps) => {
  return (
    <div
      className={cn(
        "font-mono min-h-screen",
        `grid grid-cols-${cols} grid-rows-${rows}`,
        "max-w-screen-5xl mx-auto"
      )}
    >
      {children}
    </div>
  );
};

const Item = ({ children, cols = 1, rows = 1 }: ItemProps) => {
  return (
    <div
      className={cn("p-4 md:p-6", "border")}
      style={{
        gridColumn: `span ${cols} / span ${cols}`,
        gridRow: `span ${rows} / span ${rows}`,
      }}
    >
      {children}
    </div>
  );
};
