import { types } from '../types/types';
import { startLogin, finishLogin } from './ui';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginEmail = (email, password) => {
  return (dispatch) => {
    dispatch(startLogin());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(finishLogin());
      });
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

export const startWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        dispatch(login(user.uid, name));
      })
      .catch((error) => {
        console.log(error);
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
