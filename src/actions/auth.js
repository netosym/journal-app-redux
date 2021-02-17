import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginEmail = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(132, 'Ernesto'));
    }, 2000);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
