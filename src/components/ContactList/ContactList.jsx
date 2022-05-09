import React from 'react';
import ContactListItem from 'components/ContactList/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operation';
import contactsSelectors from 'redux/contacts/contacts-selectors';



const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(contactsSelectors.getAllContacts)
   const filter = useSelector(contactsSelectors.getFilter)
   const deleteContact = id => dispatch(contactsOperations.deleteContact(id))
   
   const getVisibleContacts = () => {
      const normalizeFilter = filter.toLowerCase();
  
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    };

   return (
      <ul>{getVisibleContacts().map((contact) => (<ContactListItem  key={contact.id} contact={contact} onDeleteContact={deleteContact}/>))}
      </ul>
   )


 
}

export default ContactList;


