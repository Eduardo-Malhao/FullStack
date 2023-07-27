import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Profile({ history }) {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'));
    const emailDefault = email || 'teste@teste.com';
    setUserEmail(emailDefault);
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    history.push('/');
  }, [history]);

  return (
    <>
      <Header
        titleName="Profile"
      />
      <h2
        className="user-email-profile"
        data-testid="profile-email"
      >
        { userEmail.email }
      </h2>

      <Button
        type="button"
        data-testid="profile-done-btn"
        as={ Link }
        to="/done-recipes"
      >
        Done Recipes
      </Button>
      <Button
        type="button"
        data-testid="profile-favorite-btn"
        as={ Link }
        to="/favorite-recipes"
      >
        Favorite Recipes
      </Button>
      <Button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
      >
        Logout
      </Button>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;

/* Código desenvolvido em conjunto com Arthur Garcia, Elaine Chacon e Junior Gomes! */
