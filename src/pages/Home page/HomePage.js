import React from 'react';
import styles from './HomePage.module.css'
import Container from 'components/Container/Container';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';


const HomeView = () => (
  <Container >
    <h1 className={styles.title}>
    Welcome!
    <br/>
    Please <Link to='/login' className={styles.link}>{'login'}</Link> or
       <Link to='/register' className={styles.link}>{' register'}</Link> to continue.
    </h1>
    
  </Container>
);

export default HomeView;