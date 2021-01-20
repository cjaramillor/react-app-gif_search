import React from "react";
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from "./GifGridItem";

const GifGrid = ({ category }) =>{

    const { data:images,loading } = useFetchGifs(category);
    
    
    return (
        <>
        <h3>{category}</h3>

        {loading && <p className="animate_animated animate__pulse">cargando</p>}
        <div className="card-grid">
         {
            images.map(img =>(
                <GifItem key={img.id} {...img}></GifItem>
            ))
         }
        </div>
        </>
    );
}

export default GifGrid;