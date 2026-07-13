import Badge from "./Badge";

export default function BadgeExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>AI</Badge>

      <Badge variant="secondary">
        React
      </Badge>

      <Badge variant="success">
        Completed
      </Badge>

      <Badge variant="warning">
        Pending
      </Badge>

      <Badge variant="destructive">
        Failed
      </Badge>

      <Badge variant="outline">
        Docker
      </Badge>
    </div>
  );
}