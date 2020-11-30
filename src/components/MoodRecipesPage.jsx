import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #89c0a9;
  font-size: 50px;
`;

function MoodRecipesPage({ categories, areas, title }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const allCategoriesReq = categories
      ? categories.map((cat) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then((res) => res.data.meals)
        )
      : [];

    const allAreasReq = areas
      ? areas.map((ar) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ar}`)
            .then((res) => res.data.meals)
        )
      : [];

    const allRecipesReq = allCategoriesReq.concat(allAreasReq);
    Promise.all(allRecipesReq).then((r) => setRecipes(r.flat()));
  }, [categories, areas]);

  return (
    <>
      <Title>{title}</Title>
      <div className="recipes-display">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default MoodRecipesPage;
