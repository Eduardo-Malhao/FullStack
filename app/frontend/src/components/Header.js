import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/header.css';

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { inputSearchText, setInputSearchText } = useContext(HeaderContext);

  const handleOpenSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="container-header">
      <div className="nav-container">
        <div className="nav">
          <Link to="/" data-testid="link-to-search" className="a">HOME</Link>
          <Link to="/meals" data-testid="link-to-search" className="a">MEALS</Link>
          <Link to="/drinks" data-testid="link-to-search" className="a">DRINKS</Link>
          <Link to="/profile" data-testid="link-to-search" className="a">PROFILE</Link>
          <h5 className="storagerecipe">STORAGE RECIPE</h5>
        </div> 
        <div className="header-line"></div>
      </div>
    </header>

  );
}
