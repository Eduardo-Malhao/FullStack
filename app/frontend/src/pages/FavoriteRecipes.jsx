import { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import { FaHeart } from "react-icons/fa";
import '../styles/favoriteRecipes.css';

function FavoriteRecipes() {
  const [allFavoriteRecipes, setAllFavoriteRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { isFavorite, setIsFavorite } = useContext(HeaderContext);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (Array.isArray(favoriteRecipes)) {
        setAllFavoriteRecipes(favoriteRecipes);
      }
    };

    fetchData();
  }, []); 


  useEffect(() => {
    if (filteredRecipes.length === 0) {
      renderAllCards();
    } else {
      renderFilteredRecipes();
    }
  }, [filteredRecipes]);
  
  
  const handleFavorite = (id) => {
    const updatedRecipes = allFavoriteRecipes.filter((recipe) => recipe.id !== id);
    setAllFavoriteRecipes(updatedRecipes);
    
    if (filteredRecipes.length > 0) {
      const updatedFilteredRecipes = filteredRecipes.filter((recipe) => recipe.id !== id);
      setFilteredRecipes(updatedFilteredRecipes);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFilteredRecipes));
    } 
  };

  const mealsFilter = () => {
    const meals = allFavoriteRecipes.filter((recipe) => recipe.type === 'meal');
    setFilteredRecipes(meals);
  };

  const drinksFilter = () => {
    const drinks = allFavoriteRecipes.filter((recipe) => recipe.type === 'drink');
    setFilteredRecipes(drinks);
  };


  function renderFilteredRecipes() {
    console.log(filteredRecipes);
    return filteredRecipes.map((item) => 
    item.type === 'drinks' ? (
      <div key={item.idDrink} className="eachFavoritecard">  
        <img
          onClick={() => history.push(`${location.pathname}/${item.idDrink}`)}
          src={item.image}
          alt={item.strDrink}
        />
        <p>{item.name}</p>
      </div>
    ) : 
    <div key={item.idMeal} className="eachFavoritecard">    
    <img
      onClick={() => history.push(`${location.pathname}/${item.idMeal}`)}
      src={item.image}
      alt={item.strMeal}
    />
    <p>{item.name}</p>     
  </div>
    );
  }

  function renderAllCards() {
    return allFavoriteRecipes.map((item) => 
      <div key={item.idDrink || item.idMeal} className="eachFavoritecard">  
        <img
          onClick={() => history.push(`${location.pathname}/${item.idDrink || item.idMeal}`)}
          className="eachFavoriteRecipe"
          src={item.image || item.image}
          alt={item.strDrink || item.strMealThumb}
        />
        <p>{item.name || item.name}</p>
      </div>
    );
  }

  return (
    <body className="favorites-container">
      <nav className="tilte-container">
        <h1 className="myFavorites-title">My Favorites</h1>
        <div className="favorite-category-btn-container">
          <button
            type="button"
            name="all"
            className="eachFavoriteCategory-btn"
            value="all"
            onClick={ () => setFilteredRecipes([]) }
          >
            All
          </button>
          <button
            type="button"
            name="meal"
            className="eachFavoriteCategory-btn"
            onClick={ () => mealsFilter() }
          >
            Meals
          </button>
          <button
            type="button"
            className="eachFavoriteCategory-btn"
            onClick={ () => drinksFilter() }
          >
            Drinks
          </button>
        </div>
      </nav>
      <article className="favorite-recipes-container">
        <section className="favorite-cards-container">
        {filteredRecipes.length > 0 ? renderFilteredRecipes() : renderAllCards()}

        </section>
        <section className="heart-btn-container">
          {filteredRecipes.length > 0 ? filteredRecipes.map((recipe) => (
            <div key={ recipe.id }>
              <button
                className="heart-btn"
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
          )) : allFavoriteRecipes.map((recipe) => (
            <div key={ recipe.id }>
              <button
                className="heart-btn"
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
          )) }
        </section>
      </article>
    </body>
  );
}

export default FavoriteRecipes;


// *estados*
// ALL:
// sempre populado  atualizado (pag, remoção, add))
// toggle (ao clicar btn all, limpa estado FILTRADOS)

// FILTRADOS:
// atualizado (pag, remoção, add)
// ao clicar: limpa FILTRADOS => popula com meals/drinks (ver tempo)

// *renderização*
// condição: FILTRADOS ? renderiza FILTRADOS : renderiza ALL

// *handleFavorite*
// remoção/add dentro de FILTRADOS atualizar ALL e refazer o map dos FILTRADOS