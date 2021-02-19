import { types } from '../types/types';

export const setError = (error) => {
  return {
    type: types.uiSetError,
    payload: error,
  };
};

export const removeError = (error) => {
  return {
    type: types.uiRemoveError,
  };
};

export const startLogin = () => {
  return {
    type: types.uiStartLogin,
  };
};

export const finishLogin = () => {
  return {
    type: types.uiFinishLogin,
  };
};
