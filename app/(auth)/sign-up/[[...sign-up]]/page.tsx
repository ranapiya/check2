"use client";
import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Image from 'next/image';
import { useRef } from 'react';
import { BackgroundCircles } from "@/components/ui/BackgroundCircles";

export default function Page() {
  const parallaxRef = useRef(null); // Create a ref for the parallax background

  return (
    <div className="min-h-screen grid grid-cols-1 relative">
      <BackgroundCircles parallaxRef={parallaxRef} /> {/* Background component */}
      <div ref={parallaxRef} className="h-full flex flex-col items-center justify-center px-4" style={{ zIndex: 1, position: "relative" }}>

        {/* Container for gradient background */}
        <div className="bg-gradient-to-r from-[#1e1e2d] via-[#1e1e3f] to-[#1e1e2d]  p-8 rounded-lg shadow-lg text-white text-center space-y-1 pt-2 pb-2 ">
          <h1 className="font-bold text-3xl text-pink-600">
            Welcome!
          </h1>
          <p className="text-base">
            Log in or Create an account to get back to your dashboard!
          </p>
        </div>
        <div className='text-base text-[#7E8CA0] mt-4 '>
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
        <div className='h-full bg-black hidden lg:flex items-center justify-center'>
          <Image src="/bitcoin.webp" alt='logo' width={100} height={100}></Image>
        </div>
      </div>
    </div>
  );
}
