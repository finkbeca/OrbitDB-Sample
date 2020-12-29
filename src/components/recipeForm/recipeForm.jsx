import React, {useState, useContext} from "react"
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {RecipeContext} from "../../App.js"
import "./recipeForm.css"

function RecipeForm() {
    const [recipes, setRecipes] = useContext(RecipeContext)
    const [userInput, setUserInput] = useState("")
    const [titleInput, settitleInput] = useState("")

    function onInputChange(e) {
        setUserInput(e.target.value)
    }

    function ontitleChange(e) {
        settitleInput(e.target.value)
    }

    function onButtonClick() {
        setRecipes([...recipes, {
            id: recipes.length,
            title: titleInput,
            input: userInput
        }])
        setUserInput('')
        settitleInput('')
    
    }

    return (
        <div className="rcpForm">
             <>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            className="rcpForm-input" value={titleInput} onChange={ontitleChange}

            />
            </InputGroup>

            <InputGroup className="mb-3">
            <FormControl
            as="textarea"
            placeholder="Content"
            aria-label="Content"
            aria-describedby="basic-addon1"
            className="rcpForm-text" value={userInput} onChange={onInputChange}
            />
            </InputGroup>
    
            
            <Button variant="light" onClick={onButtonClick}>Add</Button>
            </>
        </div>
        

        
    );
}

export default RecipeForm;