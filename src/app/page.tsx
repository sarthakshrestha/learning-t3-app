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
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <Link
              href={`/img/${image.id}`}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt={image.name}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-center text-sm font-bold text-white">
                {image.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="mt-4 h-full w-full text-center text-2xl max-sm:mt-3 max-sm:max-w-md max-sm:text-xl">
          Please sign in to view your gallery on Pankekgram
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
