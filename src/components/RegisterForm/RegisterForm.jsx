import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username:
        <input type="text" name="name" className={css.input} placeholder="Enter name..."/>
      </label>
      <label className={css.label}>
        Email:
        <input type="email" name="email" className={css.input} placeholder="Enter email..."/>
      </label>
      <label className={css.label}>
        Password:
        <input type="password" name="password" className={css.input} placeholder="Enter password..."/>
      </label>
      <button type="submit" className={css.btn}>Register</button>
    </form>
  );
};

export default RegisterForm;