// lib/get-all-frontmatters.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllFrontmatters(type) {
  const dir = path.join(process.cwd(), 'content', type);
  const files = fs.readdirSync(dir);

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ''),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first
}
