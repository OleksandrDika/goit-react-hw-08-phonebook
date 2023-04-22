import { login } from 'Redux/Auth/Operations';
import {
  FormButton,
  FormField,
  Forma,
} from 'components/ContactForm/ContactForm.styled';
import { Conteiner } from 'components/Conteiner.styled';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(value));
    form.reset();
  };
  return (
    <Conteiner>
      <Forma onSubmit={handleSubmit}>
        <FormField>
          Email: <input type="email" name="email" required />
        </FormField>
        <FormField>
          Password: <input type="password" name="password" required />
        </FormField>

        <FormButton type="submit">Sign in</FormButton>
      </Forma>
    </Conteiner>
  );
};

export default Login;
