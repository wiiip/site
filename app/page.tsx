import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Animate>
        <h1>WIP Design, tools and resources for designers.</h1>
        <h2 className="text-muted">
          <em>Work in Progress</em> is a mindset. It is a way of living. Never
          stop learning. Never stop growing. Never stop becoming. A designer is
          constantly on that path. At <a href="https://wip.ac">WIP</a> I wanted
          to build tools for the WIP Designer. This is a collection of those
          tools and resources created by your fellow designer,{" "}
          <a href="https://bridger.to/x">Bridger Tower</a>.
        </h2>
        <div></div>
        <h3>Tools</h3>
        <Item href="/test">Example</Item>
        <div></div>
        <h3>Resources</h3>
      </Animate>
    </Main>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 md:py-24 md:px-12 grid max-w-2xl mx-auto gap-6">
      {children}
    </main>
  );
}

function Animate({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <section
          key={index}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          {child}
        </section>
      ))}
    </>
  );
}

function Item({
  children,
  inProgress = false,
  href,
}: {
  children: React.ReactNode;
  inProgress: Boolean;
  href: URL;
}) {
  return <Link href={href}>{children}</Link>;
}
