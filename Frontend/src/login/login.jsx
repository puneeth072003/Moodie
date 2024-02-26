import React, { useState } from 'react';
import axios from 'axios';
import icon14 from "../../public/icon14.png";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        const requestBody = {
            email: username,
            password: password
          };
          
      const response = await axios.post('http://localhost:5000/api/v1/login',requestBody);
      if (response.data.message=="Login successful") {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#081c29', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="login-card" style={{ backgroundColor: '#34495e', padding: '20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={icon14} alt="Logo" style={{ width: '100px', height: '100px' }} />
          <h2 style={{ color: '#ffff',fontSize:'2rem' }}>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" style={{ color: '#fff' }}>Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: '#2c3b4a', color: '#fff', padding: '8px', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
          />
          <label htmlFor="password" style={{ color: '#fff' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: '#2c3b4a', color: '#fff', padding: '8px', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
          />
          <button type="submit" disabled={loading} style={{ backgroundColor: '#04a2e2', color: '#fff', padding: '10px',fontSize:'1rem', borderRadius: '5px', border: 'none',cursor: 'pointer', width: '100%' }}>
            <b>{loading ? 'Logging in...' : 'Login'}</b>
          </button>
          {error && <p className="error" style={{ color: '#ff7675', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
