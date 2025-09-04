"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between border-b-1 border-gray-300 bg-[#0d0e11]">
      <div className="flex ml-2">
        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-white-glow bg-clip-text text-transparent">
          word<span className="text-blue-700 text-4xl">L</span>y
          {user && (
            <span className="text-blue-400 text-2xl px-2">
              {user.firstName}
            </span>
          )}
        </h1>
      </div>
      <Breadcrumbs />
      <div className="mr-2">
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <SignedOut>
            <Button>Sign Out</Button>
          </SignedOut>
        </SignedIn>
      </div>
    </div>
  );
}
export default Header;
