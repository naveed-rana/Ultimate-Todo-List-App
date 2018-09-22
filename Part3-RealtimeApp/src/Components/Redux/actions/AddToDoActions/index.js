import db from '../FirebaseConfig';
import { toast } from 'react-toastify';
export const ADD_TODO = 'ADD_TODO';


export function addToDo(data) {
    return (dispatch) => {
      //call todos collection and add single todo
        db.collection("todos").add(data)
            .then((docRef) => {
                toast.success("Successfully Added!")
                dispatch({
                    //Call Reducer
                    type: ADD_TODO,
                    payload: data
                });
            }).catch((err)=>{
                toast.error("Error Occored! Please Try Again Later");
            });
    }
}