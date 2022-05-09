import Navigation from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import styles from './Appbar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <header className={styles.header} >
        <Navigation />
      {isLoggedIn? <UserMenu/> : <AuthNav/>}
    </header>
  );
}