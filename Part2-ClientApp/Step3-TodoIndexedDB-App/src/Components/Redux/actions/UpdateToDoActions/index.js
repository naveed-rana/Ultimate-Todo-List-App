import db from '../../../congif/db';
export const UPDATE_TODO = 'UPDATE_TODO';

// Update the record against given id
export function updateToDo(data) {
    // var id = Number(data.id);
    return (dispatch) => {

        db.todos
            .update(data.id, { title: data.title, desc: data.desc, done: data.done, createAt: data.createAt })
            .then(function (updated) {
                if (updated) {
                    console.log('update successfully', updated);
                    console.log('check updated data at action : ', data);

                    //////////
                    // "update" function of dexie take 2 parameters, 1st for id 2nd for data which we want to update
                    //////////

                    //Call Reducer
                    dispatch({
                        type: UPDATE_TODO,
                        payload: data,
                    });
                }
                else
                    console.log('failed to update');
            });

    };
}