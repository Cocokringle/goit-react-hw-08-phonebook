import React from 'react';
import s from './ContactList.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ContactListItem = ({contact, onDeleteContact}) => {
  const {number, id, name} = contact;
    return (
     <li className={s.contact} key={id}>
         <p className={s.contact_name}>{name}</p>
          <a className={s.contact_number} href="tel:{number}">{number}</a>
          <Button variant="outlined" onClick={() => onDeleteContact(id)} startIcon={<DeleteIcon />}>Delete</Button>
     </li>
    )
 
 }
 

 
 export default ContactListItem;