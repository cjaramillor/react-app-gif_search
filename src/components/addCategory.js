import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) =>{

    const [newCategory, setNewCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newCategory !== ''){
            setCategories([]);
            setCategories(categories => [newCategory,...categories]);
        }
    }

    const handleChange = (event) => {
        setNewCategory(event.target.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>Buscar gif:</p>
            <input id="categoria" type="text" value={newCategory} onChange={handleChange} placeholder="ingrese nueva categoria: electronica,decohogar" />
            <br></br>
        </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;