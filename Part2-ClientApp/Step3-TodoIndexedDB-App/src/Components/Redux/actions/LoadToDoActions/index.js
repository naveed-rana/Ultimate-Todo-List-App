import db from '../../../config/db';

export const LOAD_TODO = 'LOAD_TODO';

export function loadTodo() {
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