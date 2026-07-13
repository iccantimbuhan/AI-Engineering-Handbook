import { Eye, Search } from "lucide-react";

import Input from "./Input";

export default function InputExamples() {
  return (
    <div className="space-y-6 max-w-md">
      <Input
        label="Basic"
        placeholder="Type something..."
      />

      <Input
        label="Search"
        placeholder="Search..."
        leftIcon={<Search size={18} />}
      />

      <Input
        label="Password"
        type="password"
        rightIcon={<Eye size={18} />}
      />

      <Input
        label="Disabled"
        disabled
        placeholder="Disabled input"
      />

      <Input
        label="Error"
        error
        helperText="This field is required."
        placeholder="Enter email"
      />
    </div>
  );
}