import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Search from './components/Search';

const API_KEY = "619791493c6727577559c260ba548e46";
// const URL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=619791493c6727577559c260ba548e46&q=shredded%20chicken&count=6";

class App extends Component {
  
  state = {
    recipes: []
  }

  // getRecipe = (e) => {
  //   const recipeName = e.target.elements.recipeName.value;
  //   e.preventDefault();
  //   axios.get(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=6`)
  //         .then(function(response) {
  //           const data = response.data.recipes;
  //           console.log(data);
  //           this.setState({ recipes: data });   
  //         }).catch(function(error) {
  //           console.log(error.data);
  //         }); 
  //         console.log(this.state.recipes);
  // }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=6`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Webchef</h1>
        </header>
        <Search getRecipe={this.getRecipe}/>
        { this.state.recipes.map((recipe)=> {
          return (
            <div key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title} />
              <p> {recipe.title}</p>
            </div>
          )
        })} 
      </div>
    );
  } 
}

export default App;
