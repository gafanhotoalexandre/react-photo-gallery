import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      console.log(photo);
    } catch (err) {
      console.warn('Ocorreu um erro no carregamento dos dados.');
      setPhoto(null);
    }
  }

  return (
    <div>Photo.</div>
  );
}
