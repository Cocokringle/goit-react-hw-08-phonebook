import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { authSelectors } from "redux/auth";
import styles from './UserMenu.module.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)

 
  
    return (
        <div className={styles.container}>
          <Avatar src="/broken-image.jpg" sx={{ width: 32, height: 32 }} />
          <span className={styles.name}>Welcome, {name}</span>
          <Button variant="outlined" type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log out
          </Button>
        </div>
      );
}