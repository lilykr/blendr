import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "./recipePage.css";

function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.data.meals[0])
      .then(setRecipe);
  }, []);

  function extractListOf(recipeToExtractFrom, propertyToExtract) {
    const list = [];
    let i = 1;
    while (
      recipeToExtractFrom[`${propertyToExtract}${i}`] !== "" &&
      recipeToExtractFrom[`${propertyToExtract}${i}`] !== null &&
      recipeToExtractFrom[`${propertyToExtract}${i}`] !== " "
    ) {
      list.push(recipeToExtractFrom[`${propertyToExtract}${i}`]);
      i += 1;
    }
    return list;
  }

  useEffect(() => {
    if (recipe.length !== 0) {
      setIngredients(extractListOf(recipe, "strIngredient"));
      setMeasures(extractListOf(recipe, "strMeasure"));
      console.log(extractListOf);
    }
  }, [recipe]);

  return (
    <div>
      <div className="recipe-page-div-img">
        <h1 className="recipe-page-h1">{recipe.strMeal}</h1>
        <img src={recipe.strMealThumb} alt="meal" className="recipe-page-img" />
      </div>
      <div className="recipe-page-title-ingredients-description">
        <div className="recipe-page-block-ingredients">
          <h1 className="recipe-page-h1-ingredients">Ingredients</h1>
          <div className="recipe-page-ingredients-measure">
            <div className="recipe-page-ingredients">
              {ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </div>
            <div className="recipe-page-measure">
              {measures.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        </div>
        <div className="recipe-page-block-description">
          <h1 className="recipe-page-h1-description">Description</h1>
          <div className="recipe-page-instructions">
            {recipe.strInstructions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
