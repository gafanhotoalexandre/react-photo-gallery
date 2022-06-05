import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import { BackButton } from '../components/BackButton';

// types and libs
import { api } from '../lib/api';
import { Photo } from '../types/Photo';

export function PhotoPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>()

  useEffect(() => {
    loadPhoto();
  }, []);

  async function loadPhoto() {
    try {
      const data = await api.getPhoto(Number(id));
      setPhoto(data);
    } catch (err) {
      console.warn('Ocorreu um erro no carregamento dos dados.');
      setPhoto(null);
    }
  }

  return (
    <section className="mx-5">
      <BackButton />

      { photo &&
        <>
          <h2
            className="leading-tight text-3xl mt-0 mb-2 text-blue-600"
          >{photo.title}</h2>
          <img src={photo.url} alt="" />
        </>
      }
    </section>
  );
}
