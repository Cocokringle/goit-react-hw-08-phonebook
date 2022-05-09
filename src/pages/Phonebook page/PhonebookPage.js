import Container from "components/Container/Container";
import ContactForm from "components/ContactForm/ContactForm ";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import styles from './PhonebookPage.module.css'
import { useSelector } from 'react-redux';
import contactsSelectors from "redux/contacts/contacts-selectors";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function PhonebookPage() {
    const isLoadingContacts = useSelector(contactsSelectors.getLoading);

    return (
        <>
        <Container>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
            <ContactList/>
        </Container>
        {isLoadingContacts && (<Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><CircularProgress/></Box>)}
        </>

      );
}