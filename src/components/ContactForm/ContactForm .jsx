import {useState} from 'react';
import { nanoid } from "nanoid";
import s from './ContactForm.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { add } from '../../redux/sliceContacts ';
import { useAddContactMutation, useFetchContactsQuery } from '../../redux/sliceContacts ';


export default function ContactForm(){
    const [addContact] = useAddContactMutation()    
    const {data} = useFetchContactsQuery()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    // const dispatch = useDispatch()
    // const contacts = useSelector(state => state.contacts.items);

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const onNameChange = evt => {
        setName(evt.currentTarget.value);
    };
    
    const onNumberChange = evt => {
        setPhone(evt.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
          id: nanoid(),
          name,
          phone,
        };

        const normalizedName = name.toLowerCase();
        const savedContacts = data.find(
            contact => contact.name.toLowerCase() === normalizedName
        );
      
        if (savedContacts) {
            alert(`${name} is already in contacts list`);
            return;
        }
      
        addContact(contact);
      
        reset();

    }

    const reset = () => {
        setName('');
        setPhone('');
    };

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
                        value={phone}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={onNumberChange}
                        id={numberInputId}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
    )
}

// class ContactForm  extends React.Component{
//     state = {
//         name: '',
//         number: '',
//     }
    
    //     NameInputId = nanoid();
    //     NumberInputId = nanoid();

//     handleInputChange = (event) =>{
//         const {name, number, value } = event.currentTarget;
//         this.setState({[name]: value,[number]: value})

//     }
    
//     handleSubmit = (e) => {
//         e.preventDefault();

//         this.props.onSubmit(this.state)

//         this.reset()
//     }

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor={this.NameInputId}> Name
//                     <input className={s.contactsItem}
//                         type="text"
//                         value={this.state.name}
//                         name='name'
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.handleInputChange}
//                         id={this.NameInputId}
//                     />
//                 </label>
//                 <label  htmlFor={this.NumberInputId}>Number 
//                     <input className={s.contactsItem}
//                         type="tel"
//                         value={this.state.number}
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={this.handleInputChange}
//                         id={this.NumberInputId}
//                     />
//                 </label>
//                 <button type="submit">Add contact</button>
//             </form>
//         )
//     }
// }

// export default ContactForm ;