interface ComponentPropsRow {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface ComponentPropsProps {
  props: ComponentPropsRow[];
}

export default function ComponentProps({
  props,
}: ComponentPropsProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4">Prop</th>
            <th className="p-4">Type</th>
            <th className="p-4">Default</th>
            <th className="p-4">Description</th>
          </tr>
        </thead>

        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-t border-slate-200"
            >
              <td className="p-4 font-medium">{prop.name}</td>
              <td className="p-4">{prop.type}</td>
              <td className="p-4">
                {prop.defaultValue ?? "-"}
              </td>
              <td className="p-4">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}