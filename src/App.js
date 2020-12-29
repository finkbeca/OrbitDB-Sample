import React, {useState, useContext} from "react";
import RecipeCard from "./components/recipeCard/index.js";
import recipeCard from "./components/recipeCard/index.js";
import RecipeForm from "./components/recipeForm/index.js";
import "./App.css";
import "./components/recipeCard/recipeCard.css";


export const RecipeContext = React.createContext([{}, () => {}]);
function App() {
  const [recipes, setRecipes] = useState([])
 
  return (
    <div className="App">
      <div id ="App-Title">
          <h2 > Recipe Database</h2>
      </div> 

      <RecipeContext.Provider value={[recipes, setRecipes]}>
        <RecipeForm/>
      </RecipeContext.Provider>
      <div className="container">
        
        {recipes.map(item => ( 
            <RecipeCard key={item.id} rec={item.input} title={item.title} />
          ))}
      </div>
      
    </div>
  );
}

export default App;
