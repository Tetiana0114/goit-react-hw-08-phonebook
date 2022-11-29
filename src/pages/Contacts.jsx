import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchField from 'components/SearchField';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';


export default function Contacts() {
const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

useEffect(() => {
dispatch(fetchContacts());
}, [dispatch]);
    
return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: '#010101'
    }}
  >
<Section title="Phonebook:">
<ContactForm />
</Section>
<Section title="Contacts:">
<SearchField />
{isLoading && !error && <b>Request in progress...</b>}
<ContactList />
</Section>
  </div>
);
}