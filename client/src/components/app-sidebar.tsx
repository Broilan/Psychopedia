import React, { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings, ChevronUp, ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const menuItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Contact",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Help",
    url: "#",
    icon: Calendar,
  },
  {
    title: "About",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const contributeItems = [
  {
    title: "Learn to edit",
    url: "#",
    icon: Home,
  },
  {
    title: "Recent changes",
    url: "#",
    icon: Inbox,
  },
];

const contentItems = [
  {
    title: "Introduction",
    url: "#",
    subsections: [
      { title: "History", url: "#history" },
      { title: "Theories", url: "#theories" },
    ],
    icon: Home,
  },
  {
    title: "Types of Learning",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Applications",
    url: "#",
    icon: Calendar,
  },
];

export function AppSidebar() {
  // State to track expanded items
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  // Toggle function for expanding/collapsing
  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Sidebar>
      <SidebarContent>
        {/* Menu Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Contribute Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Contribute</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contributeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Contents Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => toggleSection(item.title)}>
                    <item.icon />
                    <span>{item.title}</span>
                    {/* Chevron Up/Down */}
                    {item.subsections ? (
                      expandedSections[item.title] ? (
                        <ChevronUp className="ml-auto w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="ml-auto w-4 h-4 text-gray-500" />
                      )
                    ) : null}
                  </SidebarMenuButton>

                  {/* Subsections */}
                  {item.subsections && expandedSections[item.title] && (
                    <SidebarMenu className="ml-6 mt-2">
                      {item.subsections.map((subsection) => (
                        <SidebarMenuItem key={subsection.title}>
                          <SidebarMenuButton asChild>
                            <a href={subsection.url}>
                              <span>{subsection.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
