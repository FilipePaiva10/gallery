import React, {EventHandler} from 'react';
import { Photo } from '../../types/photo';
import * as C from './styled';

import { FaTrash } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';

type Props = {
    data: Photo;
    onDeleteItem: (item: Photo) => void
}

export default ({ data, onDeleteItem }: Props) => {

    const handleDeleteItem = (item: Photo) => {
        onDeleteItem(item);
    }

    const download = (e : any) => {
        e.preventDefault();
        fetch(e.target.href, {
          method: "GET",
          headers: {
              
          }
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <C.Container>
            <C.IconArea>
                <FaTrash onClick={() => handleDeleteItem(data)} />
                <C.DownloadArea href={data.url} onClick={e => download(e)}>
                    <FaFileDownload />
                </C.DownloadArea>
            </C.IconArea>
            <C.Image src={data.url} />
            <C.Title>{data.title}</C.Title>
        </C.Container>
    )
}