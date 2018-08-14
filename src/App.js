import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Recipes from './components/Recipes';
import Header from './components/Header';
import Footer from './components/Footer';

const API_KEY = "619791493c6727577559c260ba548e46";
// const URL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=619791493c6727577559c260ba548e46&q=shredded%20chicken&count=6";

class App extends Component {
  
  state = {
    recipes: []
  }

  //fetch recipes and store in state
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  //fetch data from the localstorage
  componentDidMount = () => {
    const data = localStorage.getItem("recipes");
    const recipes = JSON.parse(data);
    this.setState({
      recipes
    });
  }

  //save recipes to local storage 
  //to restore recipes data when we come back from the recipe view
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
