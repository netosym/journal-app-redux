import { types } from '../types/types';

const authReducer = (state = {}, action) => {
  switch (action) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.dsiplayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};

export default authReducer;
