// lib/mdx-utils.js
import fs from 'fs';
import path from 'path';

export function generateStaticParams(type) {
  const dir = path.join(process.cwd(), 'content', type);
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}
