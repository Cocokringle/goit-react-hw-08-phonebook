import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { authSelectors } from "redux/auth";
import styles from './UserMenu.module.css'
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)
  
    return (
        <div className={styles.container}>
          <span className={styles.name}>Welcome, {name}</span>
          <Button variant="outlined" type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log out
          </Button>
        </div>
      );
}