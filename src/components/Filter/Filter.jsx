import React from "react"
import s from './Filter.module.css'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from "redux/contacts/contacts-actions";


const Filter = () => {
    let filterId = nanoid();
    const dispatch = useDispatch()
    const filter = useSelector(contactsSelectors.getFilter);


    return(
        <label htmlFor={filterId}>Find contact by name
            <input className={s.filter} type="text" value={filter} id={filterId} onChange={e => dispatch(changeFilter(e.currentTarget.value))}/>
        </label>
    )
}

export default Filter;