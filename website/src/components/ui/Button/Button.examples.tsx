import { Search } from "lucide-react";

import Button from "./Button";

export default function ButtonExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="link">
        Link
      </Button>

      <Button variant="icon">
        <Search size={18} />
      </Button>
    </div>
  );
}