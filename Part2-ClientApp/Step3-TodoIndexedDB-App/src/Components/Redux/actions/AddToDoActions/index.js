import axios from 'axios';
import {toast} from 'react-toastify';
export const ADDTODO = 'ADDTODO';

//Call Reducer

function addToDo(data) {
    return{
        type:ADDTODO,
        data
    }
}

//Api Call

export function startAddToDo(message) {
    
    return (dispatch) => {

        axios.post(window.baseURL+'/message/sendmessage',message).then((response=>{
            toast.success(response.data);
            dispatch(addToDo(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
            dispatch(addToDo(err));
        });
    }


}