import React from 'react';

export const GifItem = ( props ) =>{

    return (
        <div className="card animate__animated animate__fadeInRight">
            <iframe src={props.url} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p>{props.title}</p>
        </div>
    )

}

export default GifItem;