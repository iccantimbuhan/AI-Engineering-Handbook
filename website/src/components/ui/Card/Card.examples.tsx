import Button from "@/components/ui/Button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

export default function CardExamples() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>AI Engineering Handbook</CardTitle>

        <CardDescription>
          Learn AI Engineering from beginner to advanced.
        </CardDescription>
      </CardHeader>

      <CardContent>
        This card demonstrates the composable API that every future card in
        the application will use.
      </CardContent>

      <CardFooter>
        <Button>Start Learning</Button>
      </CardFooter>
    </Card>
  );
}