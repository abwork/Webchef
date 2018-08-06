import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "619791493c6727577559c260ba548e46";

class Recipe extends React.Component {
    
    state = {
        viewedRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const request = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const response = await request.json();
        this.setState({
            viewedRecipe: response.recipes[0]
        });
        console.log(this.state.viewedRecipe);
    }

    render() {
        const recipe = this.state.viewedRecipe;
        console.log(this.props);
        return (
            <div className="container">
                <div className="viewed__recipe">
                    <img className="viewed__recipe__img" src={recipe.image_url} alt={recipe.title} />
                    <h3 className="viewed__recipe__title">{recipe.title}</h3>
                    <h4 className="viewed__recipe__publisher">
                        Publisher: <span>{recipe.publisher}</span>
                    </h4>
                    <p className="viewed__recipe__publisher__url">
                        Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="viewed__recipe__btn">
                        <Link to={{
                            pathname: `/`
                        }}>Back
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
};

export default Recipe;