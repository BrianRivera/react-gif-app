import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

// const [images, setImages] = useState([])

const {data:images,loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__bounce">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
                {
                    images.map((resp) =>(
                        <GifGridItem 
                        key={resp.id}
                        img={resp}
                        ></GifGridItem>
                    ))
                }
        </div>
        </>
    )
}


/*
<GifGridItem 
key={img.id}
{...img}
></GifGridItem>
devuelve todas las propiedades contenidos en el objeto
como un prop individual
*/
