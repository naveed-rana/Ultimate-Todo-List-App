import db from '../../../config/db';
import {toast}  from 'react-toastify';
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
                toast.success("Successfully Added!");
                //dispatch reducer
                dispatch(addTodoAction(data));
            }).catch((err)=>{
                toast.error("Error Occoured! Try Again");
            })
    }
}