import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
// import LandingPage from "@/components/LandingPage";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Wordly",
  description: "Your all-in-one document collaboration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="scroll-y-hidden">
          <Header />
          <SignedIn>
            {/* When user is logged in */}
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 p-4 bg-blue-100 overflow-y-auto scrollbar-hide">
                {children}
              </div>
            </div>
          </SignedIn>

          <SignedOut>
            {/* When user is logged out */}
            <HomePage />
          </SignedOut>

          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
