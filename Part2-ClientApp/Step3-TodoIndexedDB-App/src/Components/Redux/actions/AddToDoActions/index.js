import db from '../../../config/db';

export const ADD_TODO = 'ADD_TODO';


export function addToDo(data) {
    return (dispatch) => {
        db.todos
            .add(data)
            .then((id) => {
                // console.log(id)
                // console.log(data)
                dispatch({
                    //Call Reducer
                    type: ADD_TODO,
                    payload: data
                });
            });
    }
}