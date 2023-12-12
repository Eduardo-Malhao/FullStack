import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';
import logoImage from '../images/mystoragerecipepng.png';
import Footer from '../components/Footer';
import { FaEye } from "react-icons/fa";
import  { FaEyeSlash } from "react-icons/fa";


function Login() {
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email_username, setEmail_username] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    const minCaracter = 6;
    const emailValid = email_username.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordValid = password.length > minCaracter;
    if (emailValid && passwordValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email_username, password]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleRegister = () => {
    setRegister((register) => !register);
  };

  const emailChange = ({ target: { value } }) => {
    setEmail_username(value);
  };

  const passwordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const submitForm = () => {
    const userEmail = { email: email_username };
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/meals');
  };

  return (
    <main
			className="body"
    >
      <div
        className="logo-container"
      >
        <img
          src={logoImage}
          alt="Logo"
        />
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
							name="Username_Email"
							type="text"
							size="30"
							placeholder="Username / Email"
							value={ email_username }
							onChange={ emailChange }
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
						  	name="passwordLogin"
                placeholder="Password"
						  	value={ password }
						  	onChange={ passwordChange }
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
            name="buttonLogin"
            disabled={ buttonDisabled }
            onClick={ submitForm }
          >
            Enter
          </button>
        </div>

        <div
          className="register-container"
        >
          <p>
            Don't have an account?
          </p>
          <p
            className="register-button"
            onClick={ toggleRegister }
          >
            Register
          </p>
        </div>

      </form>

      <Footer/>
    </main>
  );
}

export default Login;
