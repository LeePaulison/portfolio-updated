// lib/get-project-slugs.js

import fs from 'fs';
import path from 'path';

export function getProjectSlugs() {
  const dirPath = path.join(process.cwd(), 'content', 'projects');
  const files = fs.readdirSync(dirPath);

  // Strip ".mdx" to get slugs
  const slugs = files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));

  return slugs;
}
