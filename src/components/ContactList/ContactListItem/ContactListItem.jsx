import React from 'react';
import s from './ContactList.module.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';



const ContactListItem = ({contact, onDeleteContact}) => {
  const {number, id, name} = contact;
    return (
      
      <li className={s.contact} key={id}>
        <p className={s.contact_info}>
          {name}
        <Link underline="none"  href="tel:{number}">{number}</Link>
        </p>
        <IconButton aria-label="delete" color="primary" onClick={() => onDeleteContact(id)} ><DeleteIcon /></IconButton>
      </li>
   
    )
 
 }
 

 
 export default ContactListItem;