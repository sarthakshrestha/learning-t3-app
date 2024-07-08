"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadingthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav
      className="flex w-full items-center justify-between border-b p-4 text-xl 
    font-semibold"
    >
      <div>
        <span className="text-4xl">🥞</span>
        <span className="text-3xl"> Pankekgram </span>
      </div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
