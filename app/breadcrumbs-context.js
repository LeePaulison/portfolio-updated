'use client';

import { createContext, useContext, useState } from 'react';

const BreadcrumbsContext = createContext({
  breadcrumbs: [],
  setBreadcrumbs: () => {},
});

/**
 * Wrap your layouts in this provider to make breadcrumbs available everywhere.
 */
export function BreadcrumbsProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</BreadcrumbsContext.Provider>;
}

/**
 * Hook for any page or component to access breadcrumb functions.
 */
export function useBreadcrumbs() {
  return useContext(BreadcrumbsContext);
}
