import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api } from '../lib/api';

// types
import { Album } from '../types/Album';

export function Albums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAlbums();
  }, []);

  async function loadAlbums() {
    try {
      const data: Album[] = await api.getAlbums();
      setAlbums(data);
    } catch (err) {
      console.warn('Albums não carregados');
      setAlbums([]);
    }
  }

  function handleAccessAlbum(id: number) {
    navigate(`/album/${id}`);
  }

  return (
    <section className="flex flex-col gap-2">
      {albums.length > 0 && albums.map(album => (
        <article
          key={album.id}
          className="border rounded p-4 mx-5 hover:border-slate-500 transition-all cursor-pointer"
          onClick={() => handleAccessAlbum(album.id)}
        >
          {album.title}
        </article>
      ))}
    </section>
  );
}
