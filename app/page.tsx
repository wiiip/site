import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
        <div className="group">
          <h3 className="opacity-0 group-hover:opacity-100 transition-all mb-2">
            Tools
          </h3>
          <Item
            href="/test"
            name="Example Tool"
            description="This is a an example tool. It does this thing."
            logo={Logo}
          />
        </div>
        <div className="group">
          <h3 className="opacity-0 group-hover:opacity-100 transition-all mb-2">
            Resources
          </h3>
          <Item
            inProgress
            href="/test"
            name="Example Resource"
            description="This is a an example resource. It does this thing."
            logo={Logo}
          />
        </div>
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
  name,
  description,
  logo,
  inProgress = false,
  href,
}: {
  name: string;
  description: string;
  inProgress?: Boolean;
  logo?: string | StaticImport;
  href: string;
}) {
  return (
    <Link
      className="border-neutral-300 border-[1px] rounded-md transition-all bg-neutral-100 hover:bg-neutral-50 grid grid-cols-[auto_1fr_auto] gap-4 p-4"
      href={href}
    >
      <Image
        className="w-12 h-12 border rounded-md object-cover overflow-hidden"
        src={logo ?? ""}
        alt={`Logo for ${name}`}
      ></Image>
      <div>
        <h4>{name}</h4>
        <p className="text-muted font-light">{description}</p>
      </div>
      {inProgress && <p className="text-muted">In Progress</p>}
    </Link>
  );
}
