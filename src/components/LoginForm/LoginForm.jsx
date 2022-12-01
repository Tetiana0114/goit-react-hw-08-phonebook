import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
           <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email:
        <input type="email" name="email"  className={css.input} placeholder="across@mail.com"/>
      </label>
      <label className={css.label}>
        Password:
        <input type="password" name="password"  className={css.input} placeholder="********"/>
      </label>
      <Button type="submit" variant="contained">Log In</Button>
    </form>
  );
};

export default LoginForm;