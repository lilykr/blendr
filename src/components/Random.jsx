import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "./Random.css";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          recipe: data.meals[0],
        });
      });
  };

  render() {
    const { recipe } = this.state;

    return (
      <div className="card-container-random">
        <h1 className="title-random">Random</h1>
        <div className="random-container">
          <div className="random-recipe">
            <RecipeCard recipe={recipe} />
          </div>

          <button
            className="button-recipe"
            type="button"
            onClick={this.getRecipe}
          >
            Gimme another recipe !
          </button>
        </div>
      </div>
    );
  }
}

export default Random;
