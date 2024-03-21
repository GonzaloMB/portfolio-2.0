"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundUI() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <img style={{ maxHeight: "600px", minHeight: "auto" }} src="/GMB-Header-Light.png" />
    </WavyBackground>
  );
}
