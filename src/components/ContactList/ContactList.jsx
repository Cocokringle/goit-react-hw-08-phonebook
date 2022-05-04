import React from 'react';
import ContactListItem from 'components/ContactList/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
// import { remove } from 'redux/sliceContacts ';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/sliceContacts ';


const ContactList = () => {
   const {data} = useFetchContactsQuery()
   const [deleteContact] = useDeleteContactMutation()
   const filter = useSelector(state => state.filter.value)
  
   const getVisibleContacts = contacts =>
      contacts.filter(contact =>
         contact.name.toLowerCase().includes(filter.toLowerCase()),
   );

   const visibleContacts = data ? getVisibleContacts(data) : null;
 
  // const getContacts = state => state.contacts.items;
  // const getFilter = state => state.filter.value;
  // const dispatch = useDispatch()
  
  // const deleteContact = (id) => {
  //     dispatch(remove(id));
  // };
  
  // const getVisibleContacts = state => {
  //   const allContacts = getContacts(state);
  //   const filter = getFilter(state);
  //   const normalizedFilter = filter.toLowerCase();
  //   return allContacts.filter(({ name }) =>
  //   name.toLowerCase().includes(normalizedFilter));
  // };

  // const contacts = useSelector(getVisibleContacts);

   return (
      <ul>{data && visibleContacts.map((contact) => (<ContactListItem  key={contact.id} contact={contact} onDeleteContact={deleteContact}/>))}
      </ul>
   )


 
}

export default ContactList;


