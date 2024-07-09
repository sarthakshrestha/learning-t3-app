import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-900 md:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-4">
        <img
          src={image.url}
          alt={image.name}
          className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
        />
        <h2 className="text-center text-xl font-bold text-white md:text-2xl">
          {image.name}
        </h2>
      </div>
      {/* <div className="w-full border-t border-zinc-700 bg-zinc-800 p-6 md:w-64 md:border-l"></div> */}
    </div>
  );
}
