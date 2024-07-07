import { getOrderByOperators } from "drizzle-orm";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.posts.findMany({
    order: (model, { asc }) => asc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-9">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
