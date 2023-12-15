import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import '../styles/favoriteRecipes.css';

function FavoriteRecipes() {
  const [filteredRecipes, setFilterRecipes] = useState([]);
  const [status, setStatus] = useState(false);
  const { isFavorite, setIsFavorite } = useContext(HeaderContext);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (Array.isArray(favoriteRecipes)) {
        setFilterRecipes(favoriteRecipes);
      }
    };
  
    fetchData();
  }, []);
  
  
  const handleFavorite = (id) => {
    if (isFavorite) {
      const updatedRecipes = filteredRecipes.filter((recipe) => recipe.id !== id);
      setFilterRecipes(updatedRecipes);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedRecipes));
    }
  };

  const mealsFilter = () => {
    const meals = filteredRecipes.filter((recipe) => recipe.type === 'meal');
    setFilterRecipes(meals);
  };

  const drinksFilter = () => {
    const drinks = filteredRecipes.filter((recipe) => recipe.type === 'drink');
    setFilterRecipes(drinks);
  };

  
  function renderMealsCards() {
    const twelve = 12;

    return filteredRecipes.map((item, index) => item.type === 'meals' && (
      <div key={item.idMeal}>
        <button
          onClick={() => history.push(`${location.pathname}/${item.idMeal}`)}
          className="eachFavoriteRecipe"
        >
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
          />
          <p>{item.strMeal}</p>
        </button>
      </div>
    ));
  }

  function renderDrinksCards() {
    const twelve = 12;

    return filteredRecipes.map((item, index) => item.type === 'drinks' && (
      <div key={item.idDrink}>
        <button
          onClick={() => history.push(`${location.pathname}/${item.idDrink}`)}
          className="eachFavoriteRecipe"
        >
          <img
            src={item.strDrinkThumb}
            alt={item.strDrink}
          />
          <p>{item.strDrink}</p>
        </button>
      </div>
    ));
  }

  function renderAllCards() {
   renderDrinksCards();
   renderMealsCards();
  }

  return (
    <section className="favorites-container">
      <nav className="tilte-container">
        <h1 className="myFavorites-title">My Favorites</h1>
        <div className="btn-container">
          <button
            type="button"
            name="all"
           className="eachFavoriteCategory-btn"
            value="all"
            onClick={ () => renderAllCards() }
          >
            All
          </button>
          <button
            type="button"
            name="meal"
            className="eachFavoriteCategory-btn"
            onClick={ () => renderMealsCards() }
          >
            Meals
          </button>
          <button
            type="button"
            className="eachFavoriteCategory-btn"
            onClick={ () => renderDrinksCards() }
          >
            Drinks
          </button>
        </div>
      </nav>
      <div>
        {filteredRecipes ? filteredRecipes.map((recipe, index) => (
          <div key={ recipe.id }>
            <button
              className="favorite-btn"
              onClick={ () => handleFavorite(recipe.id) }
            >
              { isFavorite? 
                <FaHeart
                  style={{
                    height: '17px',
                    width: '17px',
                    color:  "#af1d3d",
                    backgroundColor : '#dbe2ec00',
                    padding:  '0px',
                    margin: '2px',
                    }}
                /> :
                <FaHeart
                  style={{
                    height: '17px',
                    width: '17px',
                    color:  "#969ba1f1",
                    backgroundColor : '#dbe2ec00',
                    padding:  '0px',
                    margin: '2px',
                    }}
              />}
            </button>
          </div>
        )) : (<h4>Carregando...</h4>)}
        {filteredRecipes ? (
          renderAllCards()) : (<h4>Carregando...</h4>)}
        </div>
    </section>
  );
}

export default FavoriteRecipes;
