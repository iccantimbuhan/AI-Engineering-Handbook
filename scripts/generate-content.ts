console.log("🚀 NEW GENERATOR IS RUNNING");

import { generateContent } from "./lib/generator";
import { buildNavigation } from "./lib/navigation";
import { writeJson } from "./lib/writer";

const documents = generateContent();

console.log("Documents:", documents.length);

const navigation = buildNavigation(documents);

console.log("Navigation groups:", navigation.length);

writeJson("content.json", documents);
writeJson("navigation.json", navigation);

console.log("Finished!");