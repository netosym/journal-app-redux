import { types } from '../../types/types';

describe('Tests in types', () => {
  const testTypes = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    uiStartLogin: '[UI] Start Login',
    uiFinishLogin: '[UI] Finish Login',
    notesAddNew: '[Notes] New Note',
    notesActive: '[Notes] Set Active Note',
    notesLoad: '[Notes] Load Notes',
    notesUpdated: '[Notes] Update Notes',
    notesFileUrl: '[Notes] Update Image URL',
    notesDelete: '[Notes] Delete Note',
    notesCleanLogout: '[Notes] Logout Cleaning',
  };

  test('should have all types', () => {
    expect(types).toEqual(testTypes);
  });
});