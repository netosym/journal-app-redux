import { Link } from 'react-router-dom';
import validator from 'validator';
import useForm from '../../hooks/useForm';

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: 'Dereck',
    email: 'dereck@gmail.com',
    password1: '12345',
    password2: '12345',
  });

  const { name, email, password1, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('correct');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('name is required');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email not valid');
      return false;
    } else if (password1 !== password2 || password2.length < 4) {
      console.log('pass shoud be at least 6 characters long error');
      return false;
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">hola</div>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          name="name"
          className="auth__input"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          autoComplete="off"
          name="email"
          className="auth__input"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password1}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
