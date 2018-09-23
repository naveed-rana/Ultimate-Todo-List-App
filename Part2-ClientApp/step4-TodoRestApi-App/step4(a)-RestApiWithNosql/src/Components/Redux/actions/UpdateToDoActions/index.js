import { toast } from 'react-toastify';
import axios from 'axios';
export const UPDATE_TODO = 'UPDATE_TODO';


export function updateToDo(data) {
    // alert('Update Action func', data);
    return (dispatch) => {
        axios.put(window.baseURL + `/todo/api/v1.0/tasks/${data.id}`, data)
        // console.log("from axios"+ data.id)
            .then(() => {
                toast.success("Successfully Updated!");
                  dispatch({
                    type: UPDATE_TODO,
                    payload: data
                });
            }).catch(()=>{
                toast.error("Error Occored! Please Try Again Later");
            })
    };
}