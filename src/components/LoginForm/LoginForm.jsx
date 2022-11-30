import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

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
        <input type="email" name="email"  className={css.input} placeholder="Enter email..."/>
      </label>
      <label className={css.label}>
        Password:
        <input type="password" name="password"  className={css.input} placeholder="Enter password..."/>
      </label>
      <button type="submit" className={css.btn}>Log In</button>
    </form>
  );
};

export default LoginForm;