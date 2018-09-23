import db from '../../../congif/db';
export const LOAD_TODO = 'LOAD_TODO';

// fetch all todos from indexedDB in the form of array
export function loadTodos() {
  return (dispatch) => {
    db.table('todos')
      .toArray()
      .then((todos) => {
        dispatch({
          type: LOAD_TODO,
          payload: todos,
        });
      });
  };
}