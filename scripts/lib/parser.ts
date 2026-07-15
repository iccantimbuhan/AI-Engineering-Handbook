import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { ContentDocument } from "./types";

function filenameToTitle(filename: string): string {
  return filename
    .replace(/^\d+-/, "")
    .replace(/\.md$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function filenameToSlug(filename: string): string {
  return filename
    .replace(/^\d+-/, "")
    .replace(/\.md$/, "")
    .toLowerCase();
}

function filenameToOrder(filename: string): number {
  const match = filename.match(/^(\d+)/);

  return match ? Number(match[1]) : 999;
}

export function parseMarkdownFile(
  filepath: string
): ContentDocument {
  const source = fs.readFileSync(filepath, "utf8");

  const { data, content } = matter(source);

  const filename = path.basename(filepath);

  return {
    metadata: {
      title:
        data.title ??
        filenameToTitle(filename),

      slug:
        data.slug ??
        filenameToSlug(filename),

      type:
        data.type ??
        "lesson",

      order:
        data.order ??
        filenameToOrder(filename),

      module:
        data.module,

      description:
        data.description,

      difficulty:
        data.difficulty,

      duration:
        data.duration,

      tags:
        data.tags ?? [],

      prerequisites:
        data.prerequisites ?? [],

      previous:
        data.previous,

      next:
        data.next,
    },

    content,

    source: filepath,
  };
}