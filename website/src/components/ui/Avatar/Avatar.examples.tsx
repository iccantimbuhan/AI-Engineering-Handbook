import Avatar from "./Avatar";

export default function AvatarExamples() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar
        fallback="IC"
        size="sm"
      />

      <Avatar
        fallback="IC"
        size="md"
      />

      <Avatar
        fallback="IC"
        size="lg"
      />

      <Avatar
        fallback="IC"
        size="xl"
      />

      <Avatar
        fallback="ON"
        online
      />

      <Avatar
        fallback="OFF"
        online={false}
      />

      <Avatar
        src="https://i.pravatar.cc/150?img=8"
        alt="Avatar"
      />
    </div>
  );
}