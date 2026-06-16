"use client";

import { BreadcrumbsProvider, useBreadcrumbs } from "@/app/breadcrumbs-context";
import Breadcrumbs from "@/components/breadcrumbs";

export default function WithBreadcrumbsLayout({ children }) {
  return (
    <BreadcrumbsProvider>
      <LayoutContent>{children}</LayoutContent>
    </BreadcrumbsProvider>
  );
}

function LayoutContent({ children }) {
  const { breadcrumbs } = useBreadcrumbs();

  return (
    <div className="container mx-auto max-w-3xl py-10">
      {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      {children}
    </div>
  );
}
