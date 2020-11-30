import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import data from "./recipe.json";
import Header from "./components/Header";
import Random from "./components/Random";
import RecipePage from "./components/RecipePage";
import MoodsPage from "./components/MoodsPage";
import RecipeLibrary from "./components/RecipeLibrary";
import MoodRecipesPage from "./components/MoodRecipesPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchBar from "./components/SearchBar";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const recipes = data.meals;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
      </div>

      <div className="content-container">
        <SearchBar />

        <Switch>
          <Route exact path="/search/:query" component={SearchPage} />

          <Route exact path="/">
            <RecipeLibrary recipes={recipes} />
          </Route>
          <Route exact path="/moods">
            <MoodsPage recipes={recipes} />
          </Route>
          <Route path="/recette/:recipeId">
            <RecipePage recipes={recipes} />
          </Route>
          {/* For each component MoodRecipesPage I send 3 different props  */}
          <Route path="/moods/dinner-with-friends">
            <MoodRecipesPage
              areas={["American"]}
              categories={["Pasta"]}
              title="Dinner with friends"
            />
          </Route>
          <Route path="/moods/healthy">
            <MoodRecipesPage
              areas={["Japanese", "Thai", "Greek"]}
              categories={["Vegetarian", "Vegan", "Seafood"]}
              title="Healthy"
            />
          </Route>
          <Route path="/moods/international-cuisine">
            <MoodRecipesPage
              areas={[
                "Moroccan",
                "Malaysian",
                "Egyptian",
                "Turkish",
                "Kenyan",
                "Polish",
                "Tunisian",
                "Russian",
                "Jamaican",
              ]}
              title="International cuisine"
            />
          </Route>
          <Route path="/moods/spicy">
            <MoodRecipesPage
              areas={["Tunisian", "Thai", "Indian", "Mexican"]}
              title="Spicy Food"
            />
          </Route>
          <Route path="/moods/comfort-food">
            <MoodRecipesPage
              areas={["American", "Chinese", "Italian", "Mexican", "Thai"]}
              categories={["Breakfast", "Dessert", "Pasta"]}
              title="Comfort Food"
            />
          </Route>
          <Route path="/moods/meat-lover">
            <MoodRecipesPage
              categories={["Beef", "Lamb", "Chicken", "Pork"]}
              title="Meat lover"
            />
          </Route>

          <Route path="/moods/local-cuisine">
            <MoodRecipesPage areas={["French"]} title="Local cuisine" />
          </Route>
          <Route path="/random">
            <Random recipes={recipes} />
          </Route>

          <Route path="/my-favorites">
            <FavoritesPage />
          </Route>

          <Route path="/recette/:recipeId">
            <RecipePage recipes={recipes} />
          </Route>
          {/* <Route path="/recette/:recipeId" component={RecipePage} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
