"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconFileCv, IconFolder, IconHome, IconMessage, IconPencil, IconPencilBolt, IconUser } from "@tabler/icons-react";
export function FloatingNavUI() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "/resume",
      icon: <IconFileCv className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skillset",
      link: "/skillset",
      icon: <IconPencil className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sideprojects",
      link: "/sideprojects",
      icon: (
        <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (

    <FloatingNav navItems={navItems} />

  );
}
