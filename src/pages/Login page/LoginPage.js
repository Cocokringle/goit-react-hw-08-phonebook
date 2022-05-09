import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import styles from './LoginPage.module.css'
import Container from 'components/Container/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


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
        <Container>
          <h1 className={styles.title}>Sign in to your account</h1>
    
          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <label className={styles.label}>
            Email
              <input className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
    
            <label className={styles.label}>
            Password
              <input className={styles.input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
    
            <Box textAlign='center' >
            <Button variant="contained" type="submit" >Sign in</Button>
            </Box>
          </form>
        </Container>
      );
    }


