import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe)=> {
            return (
                <div key={recipe.recipe_id} className="col-xs-6 col-sm-5 col-md-4">
                    <div className="recipes__box">
                        <img className="recipes__img" src={recipe.image_url} alt={recipe.title} />
                        <div className="recipe__desc">
                            <h4 className="recipes__title">
                                {recipe.title.length < 25 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`} 
                            </h4>
                            <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
                        </div>
                        <button className="recipe__buttons">
                            <Link to={{ 
                                pathname: `/recipe/${recipe.recipe_id}`,
                                state: {recipe : recipe.title}
                                }}>
                                Read Recipe
                            </Link>
                        </button> 
                    </div>
                </div> 
            );
            })
        } 
        </div>
    </div>
);

export default Recipes;


