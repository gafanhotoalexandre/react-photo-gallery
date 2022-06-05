import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import { BackButton } from '../components/BackButton';
import { PhotoGrid } from '../components/PhotoGrid';

// types and libs
import { api } from '../lib/api';
import { Album } from '../types/Album';
import { Photo } from '../types/Photo';

export function AlbumPage() {
  const { id } = useParams();

  const [album, setAlbum] = useState<Album | null>(null);
  const [albumPhotos, setAlbumPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    loadAlbum();
    loadAlbumPhotos();
  }, []);

  async function loadAlbum() {
    try {
      const data = await api.getOne(Number(id));
      setAlbum(data);
    } catch (err) {
      console.warn('O album não pôde ser carregado');
      setAlbum(null);
    }
  }

  async function loadAlbumPhotos() {
    try {
      const data = await api.getAlbumPhotos(Number(id));
      setAlbumPhotos(data);
    } catch (err) {
      console.warn('As fotos no álbum não puderam ser carregadas');
      setAlbumPhotos([]);
    }
  }

  return (
    <section className="mx-5">
      <BackButton />

      <h2
        className="leading-tight text-3xl mt-0 mb-2 text-blue-600"
      >{ album && album.title }</h2>

      {albumPhotos &&
        <PhotoGrid
          photos={albumPhotos}
        />
      }
    </section>
  );
}
