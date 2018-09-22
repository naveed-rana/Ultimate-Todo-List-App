import db from '../FirebaseConfig';
import { toast } from 'react-toastify';
export const UPDATE_TODO = 'UPDATE_TODO';


export function updateToDo(data,uid) {

    return (dispatch) => {
        db.collection("todos").doc(`${uid}`).set(data)
        .then(function() {
            toast.success("Todo Successfully Updated!");
            dispatch({ 
                type: UPDATE_TODO,
                payload: data})
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            toast.error("Error Occored! Please Try Again Later");
        });
    };
}