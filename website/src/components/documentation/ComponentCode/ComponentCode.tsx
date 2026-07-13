interface ComponentCodeProps {
  code: string;
}

export default function ComponentCode({
  code,
}: ComponentCodeProps) {
  return (
    <pre className="overflow-auto rounded-2xl bg-slate-900 p-6 text-sm text-slate-100">
      <code>{code}</code>
    </pre>
  );
}