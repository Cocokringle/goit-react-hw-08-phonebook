import React from "react"
import s from './Filter.module.css'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { set } from "../../redux/sliceFilter";

const Filter = () => {
    let filterId = nanoid();
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.value);

    const changeFilter = e => {
        dispatch(set(e.currentTarget.value))
    }

    return(
        <label htmlFor={filterId}>Find contact by name
            <input className={s.filter} type="text" value={filter} id={filterId} onChange={changeFilter}/>
        </label>
    )
}

export default Filter;