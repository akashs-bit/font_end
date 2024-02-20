import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus('ACCOUNT CREATED SUCCESSFULLY');
      }
    });
  };

  return (
    <div className='container'>
      <div className='loginForm'>
        <form>
          <h4>Sign in</h4>
          <label htmlFor='username'>Username:</label>
          <input
            className='textInput'
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your UserName'
            required
          />
          <label htmlFor='password'>Password:</label>
          <input
            className='textInput'
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your Password'
            required
          />
          <input
            className='button'
            type='submit'
            onClick={handleLogin}
            value='Signin'
          />
          <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>
            {loginStatus}
          </h1>
        </form>
      </div>
      <div className='loginFrom'>
        <form>
          <h4>Sign Up</h4>
          <label htmlFor='email'>Email Address:</label>
          <input
            className='textInput'
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email Address'
            required
          />
          <label htmlFor='signup-username'>Username:</label>
          <input
            className='textInput'
            type='text'
            name='signup-username'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your UserName'
            required
          />
          <label htmlFor='signup-password'>Password:</label>
          <input
            className='textInput'
            type='password'
            name='signup-password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your Password'
            required
          />
          <input
            className='button'
            type='submit'
            onClick={handleRegister}
            value='SignUp'
          />
          <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>
            {registerStatus}
          </h1>
        </form>
      </div>
    </div>
  );
}

export default App;
