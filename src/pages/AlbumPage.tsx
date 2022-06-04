import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/api';
import { Album } from '../types/Album';

export function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    loadAlbum();
  }, []);

  async function loadAlbum() {
    const data = await api.getOne(Number(id));
    setAlbum(data);
  }
  return (
    <section className="mx-5">
      <h2
        className="leading-tight text-3xl mt-0 mb-2 text-blue-600"
      >{ album && album.title }</h2>
    </section>
  );
}
