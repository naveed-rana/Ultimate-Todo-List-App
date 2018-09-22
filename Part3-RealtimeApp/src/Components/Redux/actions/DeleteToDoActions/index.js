import db from '../FirebaseConfig';
import { toast } from 'react-toastify';

export const REMOVE_TODO = 'REMOVE_TODO';

//Remove data from indexedDB
export function removeToDo(id,uid) {

    return (dispatch) => {
        //get reference and call delete function for deleting!
    db.collection('todos').doc(`${uid}`).delete().then(()=>{
            toast.success("Todo Successfully Deleted!");
            dispatch({
                            //Call Reducer
                    type: REMOVE_TODO,
                     payload: id
                     });
        }).catch((err)=>{
            console.log(err);
            toast.error("Error Occored! Please Try Again Later");
        });
    };
}