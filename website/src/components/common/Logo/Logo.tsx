interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function Logo({
  size = "md",
}: LogoProps) {
  return (
    <div className={`font-bold tracking-tight ${sizes[size]}`}>
      <span className="text-slate-900">AI</span>{" "}
      <span className="text-indigo-600">Engineering</span>{" "}
      <span className="text-slate-500">Handbook</span>
    </div>
  );
}