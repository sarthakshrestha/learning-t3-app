"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadingthing";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  const router = useRouter();

  return (
    <nav
      className="flex w-full items-center justify-between border-b p-4 text-xl 
    font-semibold"
    >
      <div>
        <span
          className="cursor-pointer text-4xl"
          onClick={() => router.push("/")}
        >
          🥞
        </span>
        <span
          className="cursor-pointer text-3xl"
          onClick={() => router.push("/")}
        >
          {" "}
          Pankekgram{" "}
        </span>
      </div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
