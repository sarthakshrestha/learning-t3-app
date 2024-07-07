import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c9ffbee0-6cb6-43dc-9b8b-f00e9f1c9306-81vqxc.png",
  "https://utfs.io/f/814d41a5-d686-45c3-a13c-ea5b458f912d-81ebk4.png",
  "https://utfs.io/f/f73d9a28-497e-4eb1-9cb3-aef96b3b5721-81dui5.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
