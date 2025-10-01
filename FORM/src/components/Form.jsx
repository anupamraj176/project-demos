import React, { useState } from 'react';
import '../Form.css';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('#d1d1d1'); 
  const [emailColor, setEmailColor] = useState('#d1d1d1');
  const [passwordColor, setPasswordColor] = useState('#d1d1d1');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('#d1d1d1');

  const validate = (e) => {
    e.preventDefault(); 
    let isValid = true;

    if (userName.length >= 8) {
      setErrorUsername('');
      setUserColor('green');
    } else {
      setErrorUsername('Username must be at least 8 characters long.');
      setUserColor('red');
      isValid = false;
    }

    if (email.includes('@')) {
        setErrorEmail('');
        setEmailColor('green');
    } else {
        setErrorEmail('Email should be a valid address');
        setEmailColor('red');
        isValid = false;
    }

    if (password.length >= 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('Password must be at least 8 characters long.');
      setPasswordColor('red');
      isValid = false;
    }

    if (password && password === confirmPassword) {
      setErrorConfirmPassword('');
      setConfirmPasswordColor('green');
    } else {
      setErrorConfirmPassword('Passwords do not match.');
      setConfirmPasswordColor('red');
      isValid = false;
    }

    if (isValid) {
        // Handle successful submission
        alert('Form submitted successfully!');
    }
  };

  return (
    <div className="form-wrapper">
      <div className='card'>
        <div className='card-image'></div>
        <div className='card-content'>
          <h1>Create Account</h1>
          <form onSubmit={validate} noValidate>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Username'
                style={{ borderBottomColor: userColor }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <p className='error'>{errorUsername}</p>
            </div>

            <div className='input-group'>
              <input
                type='email'
                placeholder='Email'
                style={{ borderBottomColor: emailColor }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className='error'>{errorEmail}</p>
            </div>

            <div className='input-group'>
              <input
                type='password'
                placeholder='Password'
                style={{ borderBottomColor: passwordColor }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='error'>{errorPassword}</p>
            </div>
            
            <div className='input-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                style={{ borderBottomColor: confirmPasswordColor }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className='error'>{errorConfirmPassword}</p>
            </div>

            <button className='submit-btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;