import db from '../../../congif/db';
export const UPDATE_TODO = 'UPDATE_TODO';

// Update the record against given id
export function updateToDo(data) {
    console.log('check update id: ', data.id);
    console.log('check update data for id is : ', data);
    
    return (dispatch) => {
        
        db.todos.update(data.id , data).then(() => {
                //////////
                // "update" function of dexie take 2 parameters, 1st for id 2nd for data which we want to update
                //////////

                //Call Reducer
                dispatch({
                    type: UPDATE_TODO,
                    payload: data,
                });
            });
    };
}