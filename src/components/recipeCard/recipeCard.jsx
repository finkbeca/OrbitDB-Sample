import React, {useState, useContext} from "react"
import {RecipeContext} from "../../App.js"
import "./recipeCard.css";

function RecipeCard(props) {
    const [recipes, setRecipes] = useContext(RecipeContext)

    return (
        <div className="Card" >
            <h2 className="Card-title" >{props.title}</h2>
            <div className="Card-content">
            {props.rec}
            </div>
            
        </div>

    );
}
export default RecipeCard;