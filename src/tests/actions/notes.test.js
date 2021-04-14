/**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
} from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'testing',
  },
};

let store = mockStore(initState);

describe('Tests in notes-actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('should start new note', async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    await db.doc(`testing/journal/notes/${docId}`).delete();
  });

  test('should load notes', async () => {
    await store.dispatch(startLoadingNotes('testing'));
    const action = store.getActions();

    expect(action[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(action[0].payload[0]).toMatchObject(expected);
  });

  test('should save note', async () => {
    const note = {
      id: '7X8hxcFWLsXBDhGmkuF3',
      title: 'title',
      body: 'body',
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();
    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });
});
