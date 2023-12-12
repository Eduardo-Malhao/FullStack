import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import  { FaEyeSlash } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Formulário enviado:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form onSubmit={handleSubmit}>

    <div
      className="input-container"
    >

      <h5>Email</h5>
			<label htmlFor="Email">
				<input
					className="input"
					name="email"
					type="email"
					size="30"
					placeholder="Email"
					value={ formData.email }
					onChange={ handleChange }
          required
				/>
			</label>

      <h5>Username</h5>
      <label htmlFor='Username'>
        <input
          type="text"
          name="username"
          value={ formData.username }
          onChange={ handleChange }
          required
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
						value={ formData.password }
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
