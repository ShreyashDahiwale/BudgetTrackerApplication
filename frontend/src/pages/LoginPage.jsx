import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import userAuth from '../services/userAuth.js';
import '../styles/LoginPage.css';
import accountingIcon from '../assets/accounting-icon2.svg';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
    //   const user = await userAuth.login({ username, password });
      // store token/user as needed (service already stores token)
      navigate('/dashboard');
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  const handleSso = () => {
    // userAuth.startSsoLogin();
  };

  return (
    <div className="login-root">
      <div className="login-left">
        <div className="brand">
          <div className="logo">BT</div>
          <h1>Budget Tracker</h1>
        </div>
        <div className="hero">
          <img alt="welcome" src={accountingIcon} />
        </div>
        <h2>WELCOME</h2>
        <p className="desc">
          A platform for managing your Budget and Expenses easily and efficiently.
        </p>
      </div>

      <div className="login-right">
        <div className="card">
          <h3>Login</h3>
          <p className="hint">Don't have an account? Contact your administrator. It takes less than a minute.</p>

          <form onSubmit={submit} className="login-form" noValidate>
            {error && <div className="error">{error}</div>}

            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn primary" type="submit" disabled={busy}>
              {busy ? 'Logging in...' : 'LOGIN'}
            </button>

            <button type="button" className="btn sso" onClick={handleSso}>
              SIGN UP
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}