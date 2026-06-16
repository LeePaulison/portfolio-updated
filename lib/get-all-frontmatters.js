// lib/get-all-frontmatters.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Reads all MDX files in a given folder under /content,
 * parses frontmatter, and returns sorted results.
 *
 * @param {string} type - The folder under /content (e.g. 'projects')
 * @returns {Array} Array of objects:
 *   [
 *     { slug: 'my-project', title: 'My Project', date: '2023-10-01', ... }
 *   ]
 */
export function getAllFrontmatters(type) {
  const dir = path.join(process.cwd(), "content", type);

  if (!fs.existsSync(dir)) {
    console.warn(`⚠️ Directory not found: ${dir}`);
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  const all = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    return {
      slug: file.replace(/\.mdx$/, ""),
      ...data,
    };
  });

  // Sort newest first if frontmatter includes date
  return all.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });
}

/**
 * Returns only slugs for all MDX pages under the given type.
 *
 * @param {string} type
 * @returns {Array<string>} e.g. ['project-one', 'another-project']
 */
export function getAllSlugs(type) {
  return getAllFrontmatters(type).map((item) => item.slug);
}

/**
 * Returns an array of `{ slug }` objects for Next.js
 * generateStaticParams().
 *
 * @param {string} type
 * @returns {Array<{slug: string}>}
 */
export function generateStaticParams(type) {
  return getAllFrontmatters(type).map((item) => ({
    slug: item.slug,
  }));
}
