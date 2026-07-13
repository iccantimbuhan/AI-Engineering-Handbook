import Alert from "./Alert";

export default function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert>
        Information alert.
      </Alert>

      <Alert variant="success">
        Successfully completed.
      </Alert>

      <Alert variant="warning">
        Warning message.
      </Alert>

      <Alert variant="destructive">
        Something went wrong.
      </Alert>
    </div>
  );
}