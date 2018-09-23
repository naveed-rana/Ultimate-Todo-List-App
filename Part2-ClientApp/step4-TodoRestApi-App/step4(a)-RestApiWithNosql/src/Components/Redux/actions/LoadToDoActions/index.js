import { toast } from 'react-toastify';
import axios from 'axios';

export const LOAD_TODO = 'LOAD_TODO';

export function loadTodo() {
    return (dispatch) => {
      axios.get(window.baseURL + "/todo/api/v1.0/tasks")
      .then((res)=>{
          console.log(res.data);
          
          dispatch({
            type: LOAD_TODO,
            payload: res.data,
          })
        }).catch(() => {
          toast.error("Error Occored! Please Try Again Later");
        });
    };
  }