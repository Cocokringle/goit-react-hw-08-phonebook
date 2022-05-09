import React from 'react';
import styles from './HomePage.module.css'
import Container from 'components/Container/Container';


const HomeView = () => (
  <Container >
    <h1 className={styles.title}>
    Welcome!
    Please <a href='/login'>login</a> or <a href='/register'>register</a> to continue.
    </h1>
    
  </Container>
);

export default HomeView;