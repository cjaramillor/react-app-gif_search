import React, { useState } from 'react';
import AddCategory from './components/addCategory';
import GifGrid from './components/GifGrid';

const ComponentPrincipal = () => {

    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2>GifsApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) =>
                        <GifGrid key={category} category = { category }></GifGrid>
                    )
                }
            </ol>
        </div>
    );
}


export default ComponentPrincipal;