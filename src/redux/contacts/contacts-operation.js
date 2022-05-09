
import axios from 'axios';
import { addContactRequest,
     addContactSuccess,
     addContactError,
     fetchContactsRequest,
     fetchContactsSuccess,
     fetchContactsError,
     deleteContactRequest,
     deleteContactSuccess,
     deleteContactError,
     } from './contacts-actions';

// GET @ /contacts
const fetchAllUserContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};


// POST @ /contacts

export const addContact = description => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', description)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

// DELETE @ /contacts/:id

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};


const contactsOperations = {
  fetchAllUserContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;