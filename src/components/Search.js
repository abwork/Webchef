import React from 'react';

const Search = (props) => (
    <form onSubmit={props.getRecipe}>
        <input className="form_input" type="text" name="recipeName" />
        <button className="search_btn">Search</button>
    </form>
);

export default Search;