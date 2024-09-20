import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Home() {
  return (
    <Main>
      <Animate>
        <Image
          src={Logo}
          alt="WIP Design Logo"
          width={64}
          height={35.8}
          className="-ml-1"
        />
        <div></div>
        <h1>WIP Design, tools and resources for designers.</h1>
        <h2 className="text-muted">
          <em>Work in Progress</em> is a mindset. It is a way of living. Never
          stop learning. Never stop growing. Never stop becoming. A designer is
          constantly on that path. At{" "}
          <a className="inline-link" target="_blank" href="https://wip.ac">
            WIP
          </a>{" "}
          I wanted to build tools for the WIP Designer. This is a collection of
          those tools and resources created by your fellow designer,{" "}
          <a
            className="inline-link"
            target="_blank"
            href="https://bridger.to/x"
          >
            Bridger Tower
          </a>
          .
        </h2>
        <div></div>
        <h3>Tools</h3>
        <Item href="/test">Example Tool</Item>
        <div></div>
        <h3>Resources</h3>
        <Item href="https://bridger.to" inProgress>
          Example Resource
        </Item>
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
  inProgress = true,
  href,
}: {
  children: React.ReactNode;
  inProgress?: Boolean;
  href: string;
}) {
  return (
    <Link href={href}>
      {children}
      {inProgress && <span className="text-muted ml-2">(In Progress)</span>}
    </Link>
  );
}
