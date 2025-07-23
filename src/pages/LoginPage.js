import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return alert('Please enter both username and password.');
    }

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser?.username === username && savedUser?.password === password) {
        localStorage.setItem('loggedIn', 'true');
        navigate('/books');
      } else {
        alert('Invalid credentials.');
      }
    } else {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Account created! You can now log in.');
      setIsLogin(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Welcome Back 👋' : 'Create Your Account'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="toggle-mode">
          {isLogin ? (
            <>
              <span>Don't have an account?</span>
              <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button onClick={() => setIsLogin(true)}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
