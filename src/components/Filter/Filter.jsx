import React from "react"
import styles from './Filter.module.css'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from "redux/contacts/contacts-actions";


const Filter = () => {
    let filterId = nanoid();
    const dispatch = useDispatch()
    const filter = useSelector(contactsSelectors.getFilter);


    return(
        <form className={styles.form}>
        <label htmlFor={filterId} className={styles.label} >Find contact by name
            <input className={styles.input} type="text" value={filter} id={filterId} onChange={e => dispatch(changeFilter(e.currentTarget.value))}/>
        </label>
        </form>
 
    )
}

export default Filter;