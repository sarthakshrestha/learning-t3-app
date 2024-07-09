import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getOrderByOperators } from "drizzle-orm";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();

  async function Images() {
    const images = await getMyImages();

    return (
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <Link
              href={`/img/${image.id}`}
              className="flex h-48 w-48 items-center justify-center"
            >
              <Image
                src={image.url}
                width={192}
                height={192}
                alt={image.name}
                className="max-h-full max-w-full object-contain"
              />
            </Link>
            <div className="mt-2 text-center">{image.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above to view the gallery
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
