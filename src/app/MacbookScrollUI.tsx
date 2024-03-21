import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollUI() {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScroll
        title={
          <span>
            If you want to check my GitHub click on the sticker. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://github.com/GonzaloMB" target="_blank">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <img style={{ height: "50px", width: "50px" }} src="/Iconos/github.png" />
  );
};
