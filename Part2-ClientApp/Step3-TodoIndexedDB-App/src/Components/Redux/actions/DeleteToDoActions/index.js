import db from '../../../congif/db';
export const REMOVE_TODO = 'REMOVE_TODO';

// Delete data from indexedDB
export function removeToDo(id) {
    return (dispatch) => {
        db.table('todos')
            .delete(id)
            .then(() => {
                //////////
                // When Delete record against given id, then call reducer
                //////////

                //Call Reducer
                dispatch({
                    type: REMOVE_TODO,
                    payload: id,
                });
            });
    };
}