import Recipe from './Recipe';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {



  let App_ID = "27b51e74";
  let App_KEY = "a78900654a5018d205eef41819ba996a	";



  let [recipes, setRecipes] = useState([]);

  let [search, setSearch] = useState("");

  let [query, setQuery] = useState("chicken")



  const getRecipes = async () => {

    let response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`)
    let data = await response.json();
    setRecipes(data.hits);
  }


  useEffect(() => {

    getRecipes();

  }, [query]);


  let handleSubmit = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  }
  let getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");

  }

  return (

    <div className="App">

      <form cls="search-form" onSubmit={getSearch}>
        <input className='search-bar' placeholder="Enter your favourite dish" type="text" value={search} onChange={handleSubmit} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cuisineType={recipe.recipe.cuisineType}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>


    </div>

  );
}

export default App;
