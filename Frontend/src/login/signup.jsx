import React, { useState } from 'react';
import axios from 'axios';
import icon14 from "../../public/icon14.png";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const requestBody = {
        email: email,
        password: password
      };

      const response = await axios.post('http://localhost:5000/api/v1/signup', requestBody);
      if (response.data.message === "User created successfully") {
        setError(<a href='/login' style={{ color: 'white', textDecoration: 'none' }}>{response.data.message}</a>);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError(response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container" style={{ backgroundColor: '#081c29', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="signup-card" style={{ backgroundColor: '#34495e', padding: '20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
      <img src={icon14} alt="Logo" style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px',color: '#ffff',fontSize:'2rem' }}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" style={{ color: '#fff' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: '#2c3b4a', color: '#fff', padding: '8px', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
          />
          <label htmlFor="email" style={{ color: '#fff' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" disabled={loading} style={{ backgroundColor: '#04a2e2',fontSize:'1rem', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>
            <b>{loading ? 'Signing up...' : 'Signup'}</b>
          </button>
          {error && <p className="error" style={{ color: '#ff7675', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
