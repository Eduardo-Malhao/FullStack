import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

function Login() {
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [emailLogin, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const minCaracter = 6;
    const emailValid = emailLogin.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordValid = password.length > minCaracter;
    if (emailValid && passwordValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [emailLogin, password]);

  const emailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const passwordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const submitForm = () => {
    const userEmail = { email: emailLogin };
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/meals');
  };

  return (
    <div className="meals">
      <form>
        <label htmlFor="Email">
          Email
          <input
            data-testid="email-input"
            name="emailLogin"
            id="Email"
            type="email"
            size="30"
            placeholder="Digite seu Email"
            value={ emailLogin }
            onChange={ emailChange }
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            data-testid="password-input"
            type="text"
            id="Senha"
            name="passwordLogin"
            value={ password }
            onChange={ passwordChange }
          />
        </label>
        <button
          data-testid="login-submit-btn"
          type="button"
          name="buttonLogin"
          disabled={ buttonDisabled }
          onClick={ submitForm }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
