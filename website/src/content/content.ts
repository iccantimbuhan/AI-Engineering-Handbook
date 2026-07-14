import documents from "./index";

import navigation from "@/generated/navigation.json";

export function getAllDocuments() {
  return documents;
}

export function getLessons() {
  return documents.filter(
    (doc) => doc.metadata.type === "lesson"
  );
}

export function getRoadmap() {
  return documents.find(
    (doc) => doc.metadata.type === "roadmap"
  );
}

export function getDocumentBySlug(slug: string) {
  return documents.find(
    (doc) => doc.metadata.slug === slug
  );
}

export function getNavigation() {
  return navigation;
}