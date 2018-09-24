import db from '../../../congif/db';
export const ADD_TODO = 'ADD_TODO';


// Save data into indexedDB
export function addToDo(data) {
    return (dispatch) => {
        db.table('todos')
            .add(data) //{ title: data.title, desc: data.desc, done: data.done, createAt: data.createAt}
            .then((id) => {
                //////////
                // "id" in then param is the id of inserted record
                // Then also save data into Redux (store)
                //////////

                //Call Reducer
                dispatch({
                    type: ADD_TODO,
                    payload: data //Object.assign({}, {id: id} , data)
                });
            });
    }
}