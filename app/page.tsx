import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <Grid>
        <Item cols={4} rows={1}>
          <h1>WIP Design</h1>
        </Item>
        <Item cols={4} rows={1}>
          <p>
            A collection of design tools and resources created by{" "}
            <a href="https://bridger.to">Bridger Tower.</a>
          </p>
        </Item>
      </Grid>
    </main>
  );
}

const Grid = ({ children }: GridProps) => {
  return (
    <div
      className={cn(
        "max-w-screen-5xl mx-auto",
        "grid grid-cols-8 grid-rows-8 gap-2"
      )}
    >
      {children}
    </div>
  );
};

const Item = ({ children, cols = 1, rows = 1 }: ItemProps) => {
  return (
    <div
      className={cn("p-4 md:p-6", "border-neutral-300 border-[1px]")}
      style={{
        gridColumn: `span ${cols} / span ${cols}`,
        gridRow: `span ${rows} / span ${rows}`,
      }}
    >
      {children}
    </div>
  );
};
