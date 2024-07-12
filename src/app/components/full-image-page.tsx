import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative aspect-square w-full">
            <img
              src={image.url}
              alt={image.name}
              className="absolute inset-0 h-full w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {image.name}
            </h2>
            <p className="text-sm text-gray-400 sm:text-base">
              Uploaded by: {userInfo.fullName}
            </p>
            <p className="text-xs text-gray-400 sm:text-base">
              Created on: {new Date(image.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(id);
            }}
          >
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}
