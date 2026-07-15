import { useSidebar } from "@/app/providers/useSidebar";
import { appNavigation } from "@/config/navigation/appNavigation";
import handbookNavigation from "@/generated/navigation.json";

import SidebarNode from "./SidebarNode";
import SidebarSection from "./SidebarSection";

export default function SidebarNavigation() {
  const { collapsed } = useSidebar();

  const mainItems = appNavigation.filter((item) =>
    ["Home", "Projects", "AI Automation"].includes(item.title)
  );

  const engineeringItems = appNavigation.filter((item) =>
    ["Labs", "Design System"].includes(item.title)
  );

  const personalItems = appNavigation.filter(
    (item) => item.title === "About"
  );

  return (
    <nav
      className="flex-1 overflow-y-auto px-4 py-6"
      style={{
        scrollbarGutter: "stable",
      }}
    >
      {/* MAIN */}

      <SidebarSection title="Main" collapsed={collapsed}>
        {mainItems.map((item) => (
          <SidebarNode
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
            collapsed={collapsed}
          />
        ))}
      </SidebarSection>

      {/* KNOWLEDGE */}

      <SidebarSection
        title="Knowledge Base"
        collapsed={collapsed}
      >
        <SidebarNode
          title="Resources"
          defaultExpanded={false}
          collapsed={collapsed}
        >
          {!collapsed && (
            <div className="space-y-5 pl-1">
              {handbookNavigation.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {group.title}
                  </h3>

                  <div className="space-y-1 border-l border-slate-200 pl-3">
                    {group.items.map((lesson) => (
                      <SidebarNode
                        key={lesson.href}
                        title={lesson.title}
                        href={lesson.href}
                        collapsed={collapsed}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </SidebarNode>
      </SidebarSection>

      {/* ENGINEERING */}

      <SidebarSection
        title="Engineering"
        collapsed={collapsed}
      >
        {engineeringItems.map((item) => (
          <SidebarNode
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
            collapsed={collapsed}
          />
        ))}
      </SidebarSection>

      {/* PERSONAL */}

      <SidebarSection title="Personal" collapsed={collapsed}>
        {personalItems.map((item) => (
          <SidebarNode
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
            collapsed={collapsed}
          />
        ))}
      </SidebarSection>
    </nav>
  );
}