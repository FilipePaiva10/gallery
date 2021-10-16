import { useState, useEffect, FormEvent } from 'react';

import { ThemeProvider } from "styled-components";

import * as C from './App.styled';
import * as Photos from './services/photos';
import { Photo } from './types/photo';

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

import GlobalStyles from './styles/global';

import ThemeSwitcher from './components/ThemeSwticher';
import PhotoItem from './components/PhotoItem';

const App = () => {

  const [theme, setTheme] = usePersistedState('Dark', dark);

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

  const handleDeleteItem = (item: Photo) => {
    Photos.deletePhoto(item);
    const UpdateList = photos.filter((CurrentItem) => {
      if (CurrentItem.id != item.id)
        return item;
    })
    setPhotos(UpdateList);
  }

  const toggleTheme = () => {
    if (theme.title !== 'Dark') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <C.Area>
          <C.HeaderArea>
            <C.Header>Galeria de fotos</C.Header>
            <ThemeSwitcher
              data-tip="Mudar tema"
              data-for="tip-top"
              toogleTheme={toggleTheme}
            />
          </C.HeaderArea>
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
                  onDeleteItem={item => handleDeleteItem(item)}
                />
              ))}
            </C.PhotoList>
          }
        </C.Area>
        <GlobalStyles />
      </C.Container>
    </ThemeProvider>
  )
}


export default App;