import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startWithEmailPassword } from '../../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

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
      dispatch(startWithEmailPassword(email, password1, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email not valid'));
      return false;
    } else if (password1 !== password2 || password2.length < 4) {
      dispatch(
        setError(
          'pass sholud be at least 6 characters long, and match each other'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
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
          name="password1"
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
