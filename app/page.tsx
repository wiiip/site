import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "font-mono min-h-screen",
        "p-6 md:p-12",
        "border",
        "grid grid-cols-4",
        "divide-x divide-y",
      )}
    >
      <h1>WIP Design</h1>
    </main>
  );
}
