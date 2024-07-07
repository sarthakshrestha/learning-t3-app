import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/8b034d5e-6e7a-45a4-b4c2-e641f672b1e8-eap3ia.JPG",
  "https://utfs.io/f/0b89fa39-e242-4e0e-a0df-ef1c0d281300-eap3ju.JPG",
  "https://utfs.io/f/5483f33c-dd3e-4875-83df-f60a0ac6d42f-eaqxg7.JPG",
  "https://utfs.io/f/2dc2ab77-d746-49f1-b62e-f5c604d07996-eaqxi2.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
