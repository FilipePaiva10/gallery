import { Photo } from "../types/photo";
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL ,uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list : Photo[] = [];

    const imagesFolder = ref(storage, "Images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items){

        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            id: photoList.items[i].fullPath,
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}


export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){

        const randomName = createId();

        let newFile = ref(storage, `Images/${randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return { id:upload.ref.fullPath , name: upload.ref.name, url: photoUrl } as Photo;

    }else{
        return new Error('Tipo de arquivo inválido');
    }
}


export const deletePhoto = async ({id}: Photo) => {
    const DeleteRefFile = ref(storage, id);
    await deleteObject(DeleteRefFile);
}