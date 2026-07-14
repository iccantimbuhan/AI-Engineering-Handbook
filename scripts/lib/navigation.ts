import type { ContentDocument } from "./types";

export interface NavigationItem {
  title: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export function buildNavigation(
  documents: ContentDocument[]
): NavigationGroup[] {
  const groups = new Map<string, NavigationItem[]>();

  for (const document of documents) {
    const module =
      document.metadata.module ?? "General";

    if (!groups.has(module)) {
      groups.set(module, []);
    }

    groups.get(module)!.push({
      title: document.metadata.title,
      href: `/lessons/${document.metadata.slug}`,
    });
  }

  return [...groups.entries()].map(
    ([title, items]) => ({
      title,
      items,
    })
  );
}