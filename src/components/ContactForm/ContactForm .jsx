import {useState, useEffect} from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from "nanoid";
import s from './ContactForm.module.css'
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operation';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import Button from '@mui/material/Button';





export default function ContactForm(){

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getAllContacts)

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const onNameChange = evt => {
        setName(evt.currentTarget.value);
    };
    
    const onNumberChange = evt => {
        setNumber(evt.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
          name,
          number,
        };

        const normalizedName = name.toLowerCase();
        const savedContacts = contacts.find(
            contact => contact.name.toLowerCase() === normalizedName
        );
      
        if (savedContacts) {
            Notify.info(`${name} is already in contacts list`);
            return;
        }
      
       dispatch(contactsOperations.addContact(contact));
      
        reset();

    }

    const reset = () => {
        setName('');
        setNumber('');
    };

    useEffect(() => {
        dispatch(contactsOperations.fetchAllUserContacts());
      }, [dispatch]);
    
    return(
        
            <form onSubmit={handleSubmit}>
                <label htmlFor={nameInputId}> Name
                    <input className={s.contactsItem}
                        type="text"
                        value={name}
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={onNameChange}
                        id={nameInputId}
                    />
                </label>
                <label  htmlFor={numberInputId}>Number 
                    <input className={s.contactsItem}
                        type="tel"
                        value={number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={onNumberChange}
                        id={numberInputId}
                    />
                </label>
                <Button type="submit" variant="contained">Add contact</Button>
            </form>
  
           
    )
}

