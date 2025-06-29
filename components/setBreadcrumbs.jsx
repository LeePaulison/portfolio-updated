"use client";

import { useEffect } from "react";
import { useBreadcrumbs } from "@/app/breadcrumbs-context";

export default function SetBreadcrumbs({ items }) {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs(items);
  }, [items, setBreadcrumbs]);

  return null;
}
