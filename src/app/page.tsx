import Link from "next/link";
// import { useState } from "react";

const kpis = [
  { id: 1, title: "Total Partners", value: 42 },
  { id: 2, title: "Active Orders", value: 18, subtitle: "Picked: 12 | Delivered: 6" },
  { id: 3, title: "Success Ratio", value: "89%" },
];

const navLinks = [
  { id: 1, href: "/partners", title: "Manage Partners", desc: "View, add, edit, and assign partners." },
  { id: 2, href: "/orders", title: "Orders", desc: "Track and update orders, auto-assign partners." },
  { id: 3, href: "/metrics", title: "Performance Metrics", desc: "Partner and order success analytics." },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-10">
      <header className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-1">Smart Delivery System Dashboard</h1>
        <p className="text-muted-foreground max-w-md mx-auto sm:mx-0">
          Monitor partners, orders, and performance metrics at a glance.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {kpis.map(({ id, title, value, subtitle }) => (
          <div
            key={id}
            className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default select-none"
            tabIndex={0}
            aria-label={`${title} is ${value}${subtitle ? ", " + subtitle : ""}`}
          >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-4xl font-extrabold">{value}</p>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {navLinks.map(({ id, href, title, desc }) => (
          <Link
            key={id}
            href={href}
            className="block rounded-lg bg-foreground text-background p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-primary-400"
          >
            <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-105">{title}</h3>
            <p className="text-sm">{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
