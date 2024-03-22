"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollUI() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                users={users}
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Take a look at my  <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Skillset
                            </span>
                        </h1>
                    </>
                }
            />
        </div>
    );
}

export const users = [
    {
        name: "HTML 5",
        designation: "HTML 5",
        image: "/Iconos/html.svg",
        badge: "HTML",
    },
    {
        name: "CSS",
        designation: "CSS",
        image: "/Iconos/css.svg",
        badge: "CSS",
    },
    {
        name: "JavaScript",
        designation: "JavaScript",
        image: "/Iconos/js.svg",
        badge: "JavaScript",
    },
    {
        name: "React.js",
        designation: "React.js",
        image: "/Iconos/react.svg",
        badge: "React.js",
    },
    {
        name: "UI5",
        designation: "UI5",
        image: "/Iconos/ui5.svg",
        badge: "UI5",
    },
    {
        name: "Node.js",
        designation: "Node.js",
        image: "/Iconos/node.svg",
        badge: "Node.js",
    },
    {
        name: "Bootstrap",
        designation: "Bootstrap",
        image: "/Iconos/bootstrap.svg",
        badge: "Bootstrap",
    },

    {
        name: "Sarah Brown",
        designation: "CEO, StartUp",
        image: "https://picsum.photos/id/17/300/300",
    },
    {
        name: "James Wilson",
        designation: "DevOps Engineer, CloudNet",
        image: "https://picsum.photos/id/18/300/300",
        badge: "Something",
    },
    {
        name: "Patricia Moore",
        designation: "Marketing Manager, MarketGrowth",
        image: "https://picsum.photos/id/19/300/300",
        badge: "Mentor",
    },
    {
        name: "Richard Taylor",
        designation: "Frontend Developer, WebSolutions",
        image: "https://picsum.photos/id/20/300/300",
    },
    {
        name: "Linda Anderson",
        designation: "Backend Developer, ServerSecure",
        image: "https://picsum.photos/id/21/300/300",
    },
    {
        name: "William Thomas",
        designation: "Full Stack Developer, FullStack",
        image: "https://picsum.photos/id/22/300/300",
        badge: "Badger",
    },
    {
        name: "Elizabeth Jackson",
        designation: "Project Manager, ProManage",
        image: "https://picsum.photos/id/23/300/300",
        badge: "Mentor",
    },
    {
        name: "David White",
        designation: "Database Administrator, DataSafe",
        image: "https://picsum.photos/id/24/300/300",
        badge: "Advocate",
    },
    {
        name: "Jennifer Harris",
        designation: "Network Engineer, NetConnect",
        image: "https://picsum.photos/id/25/300/300",
    },
    {
        name: "Charles Clark",
        designation: "Security Analyst, SecureIT",
        image: "https://picsum.photos/id/26/300/300",
    },
    {
        name: "Susan Lewis",
        designation: "Systems Analyst, SysAnalyse",
        image: "https://picsum.photos/id/27/300/300",
    },
    {
        name: "Joseph Young",
        designation: "Mobile Developer, AppDev",
        image: "https://picsum.photos/id/28/300/300",
        badge: "Mentor",
    },
    {
        name: "Margaret Hall",
        designation: "Quality Assurance, BugFree",
        image: "https://picsum.photos/id/29/300/300",
        badge: "Developer",
    },
];
