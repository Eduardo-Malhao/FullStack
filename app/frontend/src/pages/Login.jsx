import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';
import logoImage from '../images/mystoragerecipepng.png';
import Footer from '../components/Footer';
import FullFooter from '../components/FullFooter';
import { FaEye } from "react-icons/fa";
import  { FaEyeSlash } from "react-icons/fa";


function Login() {
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email_username, setEmail_username] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const minCharacter = 6;
    const emailValid = email_username.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordValid = password.length > minCharacter;
    if (emailValid && passwordValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email_username, password]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'username_Email') {
      setEmail_username(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleRegister = () => {
    history.push('/register');
  }

  const submitForm = () => {
    history.push('/meals');
  };

  return (

    <div className="all-login-page">
      <div className="login-page-container">
        <div className="logo-image-container">
          <img
            src={logoImage}
            alt="Logo"
            className="logo-full-image "
          />
        </div>
        <form className="form-content">
          <div className="input-container">
            <h5>login</h5>
            <label htmlFor="Email">
              <input
                className="input"
                name="emailLogin"
                id="Email"
                type="email"
                size="30"
                placeholder="email"
                value={ emailLogin }
                onChange={ emailChange }
              />
            </label>
          </div>
          <div className="input-container">
            <h5>password</h5>
            <label htmlFor="Senha">
              <input
                className="input"
                type="text"
                id="Senha"
                size="30"
                name="passwordLogin"
                value={ password }
                onChange={ passwordChange }
              />
            </label>
          </div>
          <div  className="login-button-container">
            <button
              className="login-button"
              type="button"
              name="buttonLogin"
              disabled={ buttonDisabled }
              onClick={ submitForm }
            >
              Enter
            </button>
          </div>
        </form>
    {/*     <Footer/> */}

      </div>

      <form
			className="form"
			>
				<div
					className="input-container"
				>
					<h5>Login</h5>
					<label htmlFor="Email or Username">
						<input
							className="input"
							name="username_Email"
							type="text"
							size="30"
							placeholder="Username / Email"
							value={ email_username }
							onChange={ handleChange }
						/>
					</label>

					<h5>Password</h5>
					<label htmlFor="Password">
            <div
              className='password-container'
            >

						  <input
						  	className="input"
						  	type={ showPassword ? 'text' : 'password' }
						  	size="30"
						  	name="password"
                placeholder="Password"
						  	value={ password }
						  	onChange={ handleChange }
						  />
					    <div
					    	className='password-visibility'
					    	onClick={togglePasswordVisibility}
					    >
					    	{showPassword ? <FaEye /> : <FaEyeSlash /> }
					    </div>
            </div>
          </label>

				</div>
        
				<div
				className="login-button-container"
				>
          <button
            className="login-button"
            type="button"
            name="loginButton"
            disabled={ buttonDisabled }
            onClick={ submitForm }
          >
            Enter
          </button>
        </div>

        <div
          className="register-router-container"
        >
          <p>
            Don't have an account?
          </p>
          <p
            className="register-router-button"
            onClick={ handleRegister }
          >
            Register
          </p>
        </div>

      </form>

      <FullFooter/>
    </main>
  );
}

export default Login;
