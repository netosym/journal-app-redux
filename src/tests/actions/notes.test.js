/**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: 'testing',
  },
});

describe('Tests in notes-actions', () => {
  test('should start new note', async () => {
    await store.dispatch(startNewNote());
  });
});
