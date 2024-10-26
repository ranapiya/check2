"use client";
import { useRef } from "react";
import { BackgroundCircles } from "@/components/ui/BackgroundCircles";
import CentreBody from "@/components/CentreBody";

import Header from '@/components/Header';
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // Create a reference for the parallax container
  const parallaxRef = useRef(null);

  return (
    <div>
      <Header />
      <UserButton></UserButton>
      <BackgroundCircles parallaxRef={parallaxRef} />
      {/* Main content */}
      <div ref={parallaxRef} style={{ zIndex: 1, position: "relative" }}>
        <CentreBody />
      </div>
    </div>
  );
}

