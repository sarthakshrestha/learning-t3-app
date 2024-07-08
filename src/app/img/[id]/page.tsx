// import { Modal } from "./modal";

import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <div className="flex content-center justify-center py-11">
      <img src={image.url} className="w-96 justify-center" />
    </div>
  );
}
