import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {


    // const categorias = ['one punch man', 'Samurai x', 'Dragon Ball']
    const [categorias, setCategorias] = useState(['one punch man']);

    // const handleAdd = ()=> {
    //     setCategorias([...categorias,'naruto']);

    //importante, al declarar la priumera variable del set category se trae los datos del category
    //     setCategorias(cats =>[...cats,'naruto']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
            setCategorias={setCategorias}
             />
            <hr/>

        <ol>
            {
                categorias.map((resp) =>(
                <GifGrid 
                key={resp} 
                category={resp}>
                    {resp}
                </GifGrid>
                ))
            }
        </ol>
        </>
    )
}

export default GifExpertApp



/*
rafc = crear base completa
rafcp = crear base completa + proptyle
*/
