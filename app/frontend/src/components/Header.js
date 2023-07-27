import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { inputSearchText, setInputSearchText } = useContext(HeaderContext);

  const handleOpenSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      <button
        data-testid="profile-top-btn"
        type="button"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img
          src={ profileIcon }
          alt="Ícone de perfil"
        />
      </button>

      {location.pathname === '/meals' || location.pathname === '/drinks' ? (
        <>
          <button
            data-testid="search-top-btn"
            type="button"
            onClick={ handleOpenSearchClick }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="Ícone de busca" />
          </button>
          {isSearchVisible && (
            <input
              type="text"
              value={ inputSearchText }
              placeholder="Search"
              data-testid="search-input"
              onChange={ ({ target }) => setInputSearchText(target.value) }
            />
          )}
        </>
      ) : null}
      {location.pathname === '/meals' && (
        <h1 data-testid="page-title">Meals</h1>
      )}
      {location.pathname === '/drinks' && (
        <h1 data-testid="page-title">Drinks</h1>
      )}
      {location.pathname === '/profile' && (
        <h1 data-testid="page-title">Profile</h1>
      )}
      {location.pathname === '/done-recipes' && (
        <h1 data-testid="page-title">Done Recipes</h1>
      )}
      {location.pathname === '/favorite-recipes' && (
        <h1 data-testid="page-title">Favorite Recipes</h1>
      )}
    </div>

  );
}
