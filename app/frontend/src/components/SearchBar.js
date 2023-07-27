import { useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import HeaderContext from '../Context/HeaderContext';

export default function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const {
    mealFromFetch,
    setMeal,
    radioChoice,
    setRadio,
    inputSearchText,
    setFlag,
  } = useContext(HeaderContext);

  useEffect(() => {
    if (location.pathname === '/meals' && mealFromFetch && mealFromFetch.length === 1) {
      history.push(`/meals/${mealFromFetch[0].idMeal}`);
    }
    if (location.pathname === '/drinks'
      && mealFromFetch && mealFromFetch.length === 1) {
      history.push(`/drinks/${mealFromFetch[0].idDrink}`);
    }
  }, [mealFromFetch, location.pathname, history]);

  const fetchResults = async (url) => {
    const number12 = 12;
    const response = await fetch(url);
    const data = await response.json();
    if (!data.meals && !data.drinks) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return [];
    }
    return location.pathname === '/meals'
      ? data.meals.slice(0, number12) : data.drinks.slice(0, number12);
  };

  const handleExecuteSearchClick = async () => {
    setFlag('search');
    if (inputSearchText.length > 1 && radioChoice === 'FirstLetter') {
      global.alert('Your search must have only 1 (one) character');
      return;
    }

    let url;
    if (radioChoice === 'Ingredient') {
      url = location.pathname === '/meals' ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearchText}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputSearchText}`;
    } else if (radioChoice === 'Name') {
      url = location.pathname === '/meals' ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearchText}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearchText}`;
    } else if (radioChoice === 'FirstLetter') {
      url = location.pathname === '/meals' ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearchText}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputSearchText}`;
    }

    try {
      const results = await fetchResults(url);
      setMeal(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="ingredient">
        <input
          data-testid="ingredient-search-radio"
          id="ingredient"
          type="radio"
          name="RadioBtn"
          value="Ingredient"
          label="Ingredient"
          onClick={ ({ target }) => setRadio(target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          data-testid="name-search-radio"
          type="radio"
          name="RadioBtn"
          value="Name"
          id="name"
          label="Name"
          onClick={ ({ target }) => setRadio(target.value) }
        />
        Name
      </label>
      <label htmlFor="firstLetter">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="RadioBtn"
          value="FirstLetter"
          label="FirstLetter"
          onClick={ ({ target }) => setRadio(target.value) }
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleExecuteSearchClick() }
        src="../../src/images/searchIcon.svg"
      >
        SEARCH
      </button>
    </div>
  );
}
