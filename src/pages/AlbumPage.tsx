import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PhotoGrid } from '../components/PhotoGrid';
import { api } from '../lib/api';
import { Album } from '../types/Album';
import { Photo } from '../types/Photo';

export function AlbumPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <section className="mx-5">
      <nav>
        <button
          type="button"
          className="px-5 py-2 rounded border border-blue-400 hover:bg-blue-400 hover:text-white transition-all"
          onClick={handleBackButton}
        >Voltar</button>
      </nav>

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
