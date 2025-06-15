// lib/get-mdx-page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getMDXPage({ type, slug }) {
  const baseDir = path.join(process.cwd(), 'content', type);
  const filePath = path.join(baseDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(rawContent);

  return {
    content,
    frontmatter: data,
  };
}
