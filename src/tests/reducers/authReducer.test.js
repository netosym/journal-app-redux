import authReducer from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Tests in authReducer', () => {
  test('should make login', () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: '123',
        displayName: 'Ernesto',
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({ uid: '123', name: 'Ernesto' });
  });

  test('should make logout', () => {
    const initState = { uid: '123', name: 'Ernesto' };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test('should return same state', () => {
    const initState = { uid: '123', name: 'Ernesto' };
    const action = {
      type: 'something that does not exist',
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
