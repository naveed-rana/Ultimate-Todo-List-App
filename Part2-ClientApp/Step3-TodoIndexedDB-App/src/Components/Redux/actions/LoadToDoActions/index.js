import db from '../../../config/db';
export const LOAD_TODO = 'LOAD_TODO';

// fetch all todos from indexedDB in the form of array

export function loadTodos() {
  return (dispatch) => {
    db.table('todos')
      .toArray()
      .then((todos) => {

        // Call Reducer and update the state
        dispatch({
          type: LOAD_TODO,
          payload: todos,
        });
      });
  };
}