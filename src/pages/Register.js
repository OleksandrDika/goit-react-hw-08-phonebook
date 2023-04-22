import { register } from 'Redux/Auth/Operations';
import {
  FormButton,
  FormField,
  Forma,
} from 'components/ContactForm/ContactForm.styled';
import { Conteiner } from 'components/Conteiner.styled';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(value));
    form.reset();
  };
  return (
    <Conteiner>
      <Forma onSubmit={handleSubmit}>
        <FormField>
          Name:{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <FormField>
          Email: <input type="email" name="email" required />
        </FormField>
        <FormField>
          Password: <input type="password" name="password" required />
        </FormField>

        <FormButton type="submit">Log in</FormButton>
      </Forma>
    </Conteiner>
  );
};

export default Register;
