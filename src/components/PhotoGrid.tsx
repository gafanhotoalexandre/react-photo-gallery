import { Link } from "react-router-dom";
import { Photo } from "../types/Photo";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      { photos.map(photo => (
        <div
          key={photo.id}
          className="border-2 rounded flex hover:bg-gray-200 transition-all"
        >
          <Link
            to={`/photos/${photo.id}`}
            className="bg-blue-500 flex-1 h-[150px] flex items-center justify-center p-10 m-5 rounded hover:rounded-2xl transition-all"
          >
            Photo title: {photo.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
