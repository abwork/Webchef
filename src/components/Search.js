import React from 'react';

const Search = (props) => (
    <form onSubmit={props.getRecipe}  style={{marginBottom: "1.5rem"}}>
        <input className="form__input" type="text" name="recipeName"/>
        <button className="form__button">Search</button>
    </form>
);

export default Search;