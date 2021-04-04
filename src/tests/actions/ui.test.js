import {
  finishLogin,
  removeError,
  setError,
  startLogin,
} from '../../actions/ui';
import { types } from '../../types/types';

describe('Tests in ui-actions', () => {
  test('all sync actions should work', () => {
    const setErrorAction = setError('help!');
    const removeErrorAction = removeError();
    const startLoginAction = startLogin();
    const finishLoginAction = finishLogin();

    expect(setErrorAction).toEqual({
      type: types.uiSetError,
      payload: 'help!',
    });

    expect(removeErrorAction).toEqual({ type: types.uiRemoveError });

    expect(startLoginAction).toEqual({ type: types.uiStartLogin });

    expect(finishLoginAction).toEqual({ type: types.uiFinishLogin });
  });
});
