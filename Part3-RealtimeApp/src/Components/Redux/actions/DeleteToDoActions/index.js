import db from '../FirebaseConfig';

export const REMOVE_TODO = 'REMOVE_TODO';

//Remove data from indexedDB
export function removeToDo(id) {
    return (dispatch) => {
        db.table('todos')
            .delete(id)
            .then(() => {
                dispatch({
                    //Call Reducer
                    type: REMOVE_TODO,
                    payload: id
                });
            });
    };
}