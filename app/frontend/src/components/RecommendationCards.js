import PropTypes from 'prop-types';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect, useContext, useCallback } from 'react';
import DrinksContext from '../context/DrinksContext';
import MealsContext from '../context/MealsContext';


export default function RecommendationCards({ recommendations: propRecommendations = [] }) {
    const location = useLocation();
    const getId = useParams();
    const history = useHistory();
    const { apiMealsNameData } = useContext(MealsContext);
    const { apiDrinksNameData } = useContext(DrinksContext);
  
    function pathRenderRecommendationCards() {
      const four = 4;
      let data;
  
      if (apiMealsNameData || apiDrinksNameData) {
        data = location.pathname === '/meals' ? apiMealsNameData : apiDrinksNameData;
      }
  
      return data && data.map((item, index) => index < four && (
        <div
          key={ item.idMeal || item.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <button
            onClick={ () => history.push(`${location.pathname}/${item.idMeal || item.idDrink}`) }
            className="eachRecipe"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strMealThumb ?? item.strDrinkThumb }
              alt={ item.strMeal ?? item.strDrink }
            />
            <p data-testid={ `${index}-card-name` }>{item.strMeal || item.strDrink}</p>
          </button>
        </div>
      ));
    }
  
    return (
      <div className="recommendation-container">
        { propRecommendations ? pathRenderRecommendationCards() : <h4>Carregando...</h4> }
      </div>
    );
  }
  