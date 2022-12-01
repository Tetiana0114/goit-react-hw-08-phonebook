import { useDispatch, useSelector } from 'react-redux';
import { BsPhoneFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css'
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit= e => {
    e.preventDefault();
    const field = e.target;
    const name = field.elements.name.value;
    const number = field.elements.number.value;

    const foundContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (!foundContact) {
      dispatch(addContact({ name, number }));
      field.reset();
      Notify.success(`${name} is added to the contacts !`);
    } else {
      Notify.info(`${name} is already in contacts !`);
    }
  };

return ( 
<form onSubmit={onFormSubmit} className={css.form}>
        <label className={css.label}>Name<FaUserPlus size={20} className={css.icon}/>:
         <input className={css.input}
      type="text"
      name="name"
      placeholder="Enter name..."
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      /> 
        </label>
        <label className={css.label}>Number<BsPhoneFill size={20} className={css.icon}/>:
         <input className={css.input}
      type="tel"
      name="number"
      placeholder="Enter number..."
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /> 
    </label>
    <Button type="submit" variant="contained">Add contact</Button>
    </form>
    );
}

export default ContactForm;