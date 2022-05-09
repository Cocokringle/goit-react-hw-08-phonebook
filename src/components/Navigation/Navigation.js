import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';



const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <nav>
      {!isLoggedIn && (
           <NavLink to="/"  className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
           Home
          </NavLink>
      )}

      {isLoggedIn && (
          <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Phonebook
        </NavLink>
      )}
      </nav>
  );
}

export default Navigation;