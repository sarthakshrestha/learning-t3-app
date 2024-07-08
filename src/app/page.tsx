import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getOrderByOperators } from "drizzle-orm";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();

  async function Images() {
    const images = await db.query.images.findMany({
      orderBy: (model, { asc }) => asc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4 p-9">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
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
