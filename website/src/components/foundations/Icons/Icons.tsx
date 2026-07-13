import {
  BookOpen,
  Brain,
  Database,
  FolderGit,
  Home,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

const icons = [
  { name: "Home", icon: Home },
  { name: "Book Open", icon: BookOpen },
  { name: "Brain", icon: Brain },
  { name: "Database", icon: Database },
  { name: "Sparkles", icon: Sparkles },
  { name: "Folder Git", icon: FolderGit },
  { name: "Search", icon: Search },
  { name: "Settings", icon: Settings },
];

export default function Icons() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Icons</h2>

        <p className="mt-2 text-slate-600">
          Iconography used throughout the AI Engineering Handbook.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {icons.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <Icon
              size={28}
              className="text-slate-800"
            />

            <p className="mt-4 text-center text-sm font-medium text-slate-600">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}