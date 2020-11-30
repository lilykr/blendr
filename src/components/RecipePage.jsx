import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt="meal" />
      <h1>Ingredients</h1>
      <div>
        {ingredients.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <div>
        {measures.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <h1>Description</h1>
      <div>{recipe.strInstructions}</div>
    </div>
  );
}

export default RecipePage;
