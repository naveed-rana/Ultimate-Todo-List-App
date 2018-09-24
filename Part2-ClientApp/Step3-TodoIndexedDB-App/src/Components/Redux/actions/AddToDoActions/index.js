import db from '../../../config/db';
export const ADD_TODO = 'ADD_TODO';


//Call Reducer

export function addTodoAction(data) {
    return {
        type: ADD_TODO,
        payload: data
    }
}


// Save data into indexedDB
export function addToDo(data) {
    return (dispatch) => {
        db.table('todos')
            .add(data)
            .then((id) => {
                //////////
                // "id" in then param is the id of inserted record
                // Then also save data into Redux (store)
                //////////

                //Call Reducer
                dispatch(addTodoAction(data));
            });
    }
}