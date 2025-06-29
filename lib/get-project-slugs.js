// lib/get-project-slugs.js

import { getAllSlugs } from './get-all-frontmatters.js';

export function getProjectSlugs() {
  return getAllSlugs('projects');
}
