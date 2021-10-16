import { Photo } from '../../types/photo';
import * as C from './styled';

import * as Photos from '../../services/photos';

type Props = {
    data: Photo;
}

export default ({ data } : Props) => {

    const handleDeleteItem = (item: Photo) => {
        Photos.deletePhoto(item);
    }

    return(
        <C.Container onClick={() => handleDeleteItem(data)}>
            <C.Image src={data.url}/>
            <C.Title>{data.name}</C.Title>
        </C.Container>
    )
}