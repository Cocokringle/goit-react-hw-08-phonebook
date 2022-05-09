import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import styles from './LoginPage.module.css'


export default function LoginPage(){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

    return (
        <div>
          <h1>Sign in to your account</h1>
    
          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <label className={styles.label}>
            Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
    
            <label className={styles.label}>
            Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
    
            <button type="submit">Sign in</button>
          </form>
        </div>
      );
    }


