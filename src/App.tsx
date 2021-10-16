import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styled';
import * as Photos from './services/photos';
import { Photo } from './types/photo';

import PhotoItem from './components/PhotoItem';

const App = () => {

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();


  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }

    }

  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit} >
          <C.Input type="file" name="image" />
          <C.Input type="submit" value="Enviar" />
          {uploading && <C.Label>Enviando...</C.Label>}
        </C.UploadForm>

        {loading &&
          <C.ScreenWarning>
            Carregando....
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, key) => (
              <PhotoItem
                key={key}
                data={item}
              />
            ))}
          </C.PhotoList>
        }
      </C.Area>
    </C.Container>
  )
}


export default App;