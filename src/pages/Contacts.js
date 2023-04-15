import { selectContacts, selectIsLoading } from 'Redux/Contacts/Selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Conteiner } from 'components/Conteiner.styled';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <Conteiner>
        <ContactForm />
        <h2>My contacts</h2>

        <div>
          <h2>Contacts</h2>
          {contacts.length > 0 && <Filter />}

          {contacts.length > 0 && <ContactList />}
          {isLoading && <p>Loading</p>}
        </div>
        <Toaster />
      </Conteiner>
    </div>
  );
};
export default Contacts;
