import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">Person | Budget Tracker</div>
      <nav className="nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="icon">🏠</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/transactions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="icon">📄</span>
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/budget" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="icon">📊</span>
          <span>Budget</span>
        </NavLink>
        <a className="nav-link" href="#logout">
          <span className="icon">↪️</span>
          <span>Logout</span>
        </a>
      </nav>
    </aside>
  );
}


