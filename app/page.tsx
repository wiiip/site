import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { EmailForm } from "./email-form";

interface ItemData {
  href: string;
  name: string;
  description: string;
  inProgress?: boolean;
}

const items: ItemData[] = [
  {
    href: "https://wrk.so",
    name: "wrk.so",
    description: "Portfolios for creatives",
    inProgress: true,
  },
  {
    href: "https://craft-ds.com",
    name: "craft-ds.com",
    description: "Technical design system for React",
  },
  {
    href: "https://components.work",
    name: "components.work",
    description: "Collection of components for building websites",
  },
  {
    href: "https://designbooks.org",
    name: "designbooks.org",
    description: "A collection of the best books on design",
  },
  {
    href: "https://youtube.com/@bridgertower",
    name: "youtube.com",
    description: "Design tutorials and videos",
  },
  {
    href: "https://x.com/bridgertower",
    name: "x.com",
    description: "Follow along on X",
  },
];

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
        <div></div>
        <h1>
          <span className="font-semibold">Work In Progress</span> makes tools
          and resources for designers.
        </h1>
        <Description />
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
        <div className="my-8">
          <EmailForm label="Subscribe to Work In Progress" />
        </div>
        <p className="text-muted-foreground text-xs">
          © WIP & <a href="https://bridger.to">Bridger Tower</a>. All Rights
          Reserved
        </p>
      </Animate>
    </Main>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 md:py-24 md:px-12 grid max-w-2xl mx-auto gap-4">
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

function Item({ name, description, inProgress = false, href }: ItemData) {
  const ItemContent = () => (
    <>
      <div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-muted-foreground text-xs font-light">
          {description}
        </p>
      </div>

      {inProgress && (
        <p className="text-muted-foreground text-xs border h-fit w-fit py-px bg-muted rounded-sm px-1">
          In Progress
        </p>
      )}
    </>
  );

  return (
    <Link
      className="border rounded-sm transition-all bg-secondary/50 hover:bg-secondary/20 grid grid-cols-[1fr_auto] gap-4 p-2 hover:-mt-1 hover:mb-1"
      href={href}
    >
      <ItemContent />
    </Link>
  );
}

const Description = () => {
  return (
    <h2 className="text-muted-foreground mb-8">
      <em>Work in Progress</em>. A philosophy. A journey. Never settle. Always
      evolve. This is the designer&apos;s path. At{" "}
      <a className="inline-link" target="_blank" href="https://wip.ac">
        WIP
      </a>
      , we craft tools for the ever-evolving designer. Explore our curated
      collection—created by{" "}
      <a className="inline-link" target="_blank" href="https://bridger.to/x">
        Bridger Tower
      </a>
      , designed for you.
    </h2>
  );
};
