// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Recipe from "./Recipe"
// eslint-disable-next-line import/no-unresolved
import "./style.css"

const res = await fetch('https://api.spoonacular.com/recipes/search?apiKey=8b36495f0cdc4b85a307f2fe0ff570f8&query=chicken');
const json = await res.json();
var results = json.results;
const App = () => {
    console.log(json);
    console.log(results)
    return (
      <div className="app">
        <h1> life is good ha</h1>
              {results.map((item)=> {
                  console.log(item);
                   return(
                     // eslint-disable-next-line react/jsx-key
                    <Recipe author={item.author} title={item.title} image={item.image} source={item.sourceUrl} ></Recipe>
                   )
              })}

      </div>
    );
};

export default App;
