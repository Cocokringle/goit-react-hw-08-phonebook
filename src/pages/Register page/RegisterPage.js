import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import styles from './RegisterPage.module.css'
import Container from 'components/Container/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function RegisterPage(){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    reset()
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

    return (
        <Container>
          <h1 className={styles.title}>Register an account</h1>
    
          <form  onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Name
              <input className={styles.input}
              type="text" 
              name="name" 
              value={name} 
              onChange={handleChange} 
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required/>

            </label>
    
            <label className={styles.label}>
            Email

              <input className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            
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
                required
                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
            </label>
            <Box textAlign='center' >
            <Button variant="contained" type="submit">Sign up</Button>
            </Box>

          </form>
        </Container>
      );
}