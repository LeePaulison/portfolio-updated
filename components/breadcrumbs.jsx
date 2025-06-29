"use client";

import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href || index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:underline text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-muted-foreground font-semibold">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-muted-foreground">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
