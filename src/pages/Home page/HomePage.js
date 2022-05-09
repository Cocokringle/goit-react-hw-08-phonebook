import React from 'react';
import styles from './HomePage.module.css'
import Container from 'components/Container/Container';
import Link from '@mui/material/Link';


const HomeView = () => (
  <Container >
    <h1 className={styles.title}>
    Welcome!
    <br/>
    Please <Link href='/login' underline="hover">{'login'}</Link> or
       <Link href='/register' underline="hover" >{' register'}</Link> to continue.
    </h1>
    
  </Container>
);

export default HomeView;