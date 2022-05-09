import Container from "components/Container/Container";
import ContactForm from "components/ContactForm/ContactForm ";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import styles from './PhonebookPage.module.css'


export default function PhonebookPage() {
    return (
        <Container>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
            <ContactList/>
        </Container>
      );
}