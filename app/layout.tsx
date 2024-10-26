import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniPay",
  description: "Swaping made easier",
  icons: {
    icon: "/images/unipay.jpg",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ClerkProvider>
          <Provider>
            <SignedOut>

            </SignedOut>
            <SignedIn>
            </SignedIn>


            {children}
          </Provider>
        </ClerkProvider>

      </body>
    </html>

  );

}
