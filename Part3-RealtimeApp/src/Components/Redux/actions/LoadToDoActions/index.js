import db from '../FirebaseConfig';

export const LOAD_TODO = 'LOAD_TODO';

//load all todos data from app starting

export function loadTodo() {
    return (dispatch) => {
     
      db.collection("todos").get()

      .then((querySnapshot) => {
          let todos = [];
          querySnapshot.forEach((doc) => {
            let obj = {
              ...doc.data(),
                uid:doc.id,
            }
            todos.push(obj);
          });
          dispatch({
            type: LOAD_TODO,
            payload: todos,
          });
        })
        
        .catch((err)=>{
          console.log(err);
          
        })


     
    };
  }